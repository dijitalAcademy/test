using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
  public class Technology
  {
    public int Id { get; set; }
    [Required]
    [DisplayName("Full Name")]
    public string Name { get; set; }
  }
}
