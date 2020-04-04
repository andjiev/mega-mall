namespace EasyFind.Request
{
    public class EasyFindRequest
        : IEasyFindRequest
    {
        public string Url { get; set; }

        public string Regex { get; set; }

        public long TimeOut { get; set; }
    }
}