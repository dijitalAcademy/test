#pragma checksum "C:\Users\DJ\Documents\GitHub\code-401-dotnet-guide\curriculum\class-32\demo\ComponentsDemo\ComponentsDemo\Pages\Components\LoggedInUser\Default.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5c2c862cf340fee361824db5dca6f92728353459"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Pages_Components_LoggedInUser_Default), @"mvc.1.0.view", @"/Pages/Components/LoggedInUser/Default.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5c2c862cf340fee361824db5dca6f92728353459", @"/Pages/Components/LoggedInUser/Default.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"53061ec0f8a2e376e0ce3e4826324be4aebfa563", @"/Pages/_ViewImports.cshtml")]
    #nullable restore
    public class Pages_Components_LoggedInUser_Default : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ComponentsDemo.Components.LoggedInUser.ViewModel>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\DJ\Documents\GitHub\code-401-dotnet-guide\curriculum\class-32\demo\ComponentsDemo\ComponentsDemo\Pages\Components\LoggedInUser\Default.cshtml"
 if (Model.username != null)
{

#line default
#line hidden
#nullable disable
            WriteLiteral("<span class=\"navbar-text\">Welcome Back, ");
#nullable restore
#line 4 "C:\Users\DJ\Documents\GitHub\code-401-dotnet-guide\curriculum\class-32\demo\ComponentsDemo\ComponentsDemo\Pages\Components\LoggedInUser\Default.cshtml"
                                    Write(Model.username);

#line default
#line hidden
#nullable disable
            WriteLiteral("</span>");
#nullable restore
#line 4 "C:\Users\DJ\Documents\GitHub\code-401-dotnet-guide\curriculum\class-32\demo\ComponentsDemo\ComponentsDemo\Pages\Components\LoggedInUser\Default.cshtml"
                                                               }

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ComponentsDemo.Components.LoggedInUser.ViewModel> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591