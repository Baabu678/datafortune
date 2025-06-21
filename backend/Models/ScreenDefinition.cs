using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class ScreenDefinition
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string DefinitionJson { get; set; } = string.Empty;
    }
}
