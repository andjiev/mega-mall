namespace EasyFind.Downloader
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;
    using EasyFind.Request;
    using HtmlAgilityPack;

    public class EasyFindPageLinkReader
    {
        private readonly IEasyFindRequest request;
        private readonly Regex regex;

        public EasyFindPageLinkReader(IEasyFindRequest request)
        {
            this.request = request;
            if (!string.IsNullOrWhiteSpace(request.Regex))
            {
                regex = new Regex(request.Regex);
            }
        }

        public async Task<IEnumerable<string>> GetLinks(string url, int level = 0)
        {
            if (level < 0)
                throw new ArgumentOutOfRangeException(nameof(level));

            var rootUrls = await GetPageLinks(url, false);

            if (level == 0)
                return rootUrls;

            var links = await GetAllPagesLinks(rootUrls);

            --level;
            var tasks = await Task.WhenAll(links.Select(link => GetLinks(link, level)));
            return tasks.SelectMany(l => l);
        }

        private async Task<IEnumerable<string>> GetPageLinks(string url, bool needMatch = true)
        {
            try
            {
                HtmlWeb web = new HtmlWeb();
                var htmlDocument = await web.LoadFromWebAsync(url);

                var linkList = htmlDocument.DocumentNode
                                   .Descendants("a")
                                   .Select(a => a.GetAttributeValue("href", null))
                                   .Where(u => !string.IsNullOrEmpty(u))
                                   .Distinct();

                if (regex != null)
                    linkList = linkList.Where(x => regex.IsMatch(x));

                return linkList;
            }
            catch (Exception)
            {
                return Enumerable.Empty<string>();
            }
        }

        private async Task<IEnumerable<string>> GetAllPagesLinks(IEnumerable<string> rootUrls)
        {
            var result = await Task.WhenAll(rootUrls.Select(url => GetPageLinks(url)));

            return result.SelectMany(x => x).Distinct();
        }
    }
}