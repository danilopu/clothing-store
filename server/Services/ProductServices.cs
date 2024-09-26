using MongoDB.Driver; // Add this line at the top of the file
using server.Models;
using server.Data;

namespace server.Services;

public interface IProductService
{
    Task<List<Product>> GetProductsAsync();
    Task<Product> AddProductAsync(Product product);
    Task<Product?> GetProductByIdAsync(string id);
}

public class ProductService : IProductService
{
    private readonly MongoDbContext _context;

    public ProductService(MongoDbContext context)
    {
        _context = context;
    }

    public async Task<List<Product>> GetProductsAsync()
    {
        return await _context.Products.Find(product => true).ToListAsync();
    }

    public async Task<Product> AddProductAsync(Product product)
    {
        // MongoDB will automatically generate an ID if it's not provided
        await _context.Products.InsertOneAsync(product);
        return product;
    }

    public async Task<Product?> GetProductByIdAsync(string id)
    {
        return await _context.Products.Find(p => p.Id == id).FirstOrDefaultAsync();
    }
}
