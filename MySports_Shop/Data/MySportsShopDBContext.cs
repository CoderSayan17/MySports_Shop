using Microsoft.EntityFrameworkCore;
using MySports_Shop.Models;

namespace MySports_Shop.Data
{
    public class MySportsShopDBContext : DbContext
    {
        public MySportsShopDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
