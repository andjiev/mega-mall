namespace EasyFind.Downloader
{
    using System.Threading.Tasks;
    using HtmlAgilityPack;

    public class EasyFindDownloader
        : IEasyFindDownloader
    {
        public string DownloadPath { get; set; }

        public EasyFindDownloader() { }

        public async Task<HtmlDocument> Download(string crawlUrl)
        {
            HtmlWeb web = new HtmlWeb();
            return await web.LoadFromWebAsync(crawlUrl);
        }
    }
}
