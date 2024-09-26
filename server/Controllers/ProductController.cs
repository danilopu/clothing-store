using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _productService.GetProductsAsync();
        return Ok(products);
    }

    [HttpPost]
    public async Task<IActionResult> AddProduct([FromBody] Product product)
    {
        if (!ModelState.IsValid)
        {
            var errors = ModelState.Values.SelectMany(v => v.Errors)
                                   .Select(e => e.ErrorMessage)
                                   .ToList();
            return BadRequest(new { Errors = errors });
        }

        try
        {
            var addedProduct = await _productService.AddProductAsync(product);
            return CreatedAtAction(nameof(GetProduct), new { id = addedProduct.Id }, addedProduct);
        }
        catch (Exception ex)
        {
            // Log the exception
            return StatusCode(500, new { Error = "An error occurred while adding the product.", Details = ex.Message });
        }
    }

    // Add more endpoints for CRUD operations

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(string id)
    {
        var product = await _productService.GetProductByIdAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        return Ok(product);
    }
}
