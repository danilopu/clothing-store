using MongoDB.Driver;
using server.Models;
using Microsoft.Extensions.Options;

namespace server.Data;

public class MongoDbContext
{
    private readonly IMongoDatabase _db;

    public MongoDbContext(IOptions<MongoDbSettings> options)
    {
        var client = new MongoClient(options.Value.ConnectionString);
        _db = client.GetDatabase(options.Value.DatabaseName);
    }

    public IMongoCollection<Product> Products => _db.GetCollection<Product>("Products");
}
