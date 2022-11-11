using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MySports_Shop.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Item { get; set; }
        public int Pip { get; set; }
        public int Quantity { get; set; }
        public string Totalprice { get; set; }
    }
}
