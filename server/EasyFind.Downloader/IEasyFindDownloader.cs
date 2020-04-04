namespace EasyFind.Downloader
{
    using System.Threading.Tasks;
    using HtmlAgilityPack;

    public interface IEasyFindDownloader
    {
        Task<HtmlDocument> Download(string crawlUrl);
    }
}
