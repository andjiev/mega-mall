namespace EasyFind.API.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/products")]
    public class ProductsController
        : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> GetProducts()
        {
            return new[] { "product1", "product2" };
        }
    }
}
