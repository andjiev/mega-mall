namespace EasyFind.Request
{
    public interface IEasyFindRequest
    {
        string Url { get; set; }

        string Regex { get; set; }

        long TimeOut { get; set; }
    }
}
