using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace server.Models;

public class Product
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string Category { get; set; } = null!;
    public List<string> Sizes { get; set; } = new List<string>();
    public List<string> Colors { get; set; } = new List<string>();
    public List<string> ImageUrls { get; set; } = new List<string>();
}
