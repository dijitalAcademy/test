using ComponentsDemo.Pages;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.View;
using System.Threading.Tasks;
using ComponentsDemo.Components;

namespace ComponentsDemo.Components
{
  public class Test : ViewComponent
  {
    public async Task<IViewComponentResult> InvokeAsync()
    {
      //ViewBag["TestData"] = ;
      ViewModel vmd = new ViewModel() { data = "Aloha Y'all" };
      return View(vmd);
    }

    public class ViewModel
    {
      public string data { get; set; }
    }
  }
}
