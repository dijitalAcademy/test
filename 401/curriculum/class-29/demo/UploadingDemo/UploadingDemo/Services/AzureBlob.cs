using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using UploadingDemo.Models;
using Metadata = System.Collections.Generic.IDictionary<string, string>;

namespace UploadingDemo.Services
{
  public interface IAzureBlob
  {
    Task<Document> Upload(IFormFile file);
  }
  //public class djClient : BlobContainerClient
  //{
  //  public override async Task<Response<BlobContainerInfo>> CreateIfNotExistsAsync(
  //          PublicAccessType publicAccessType = PublicAccessType.BlobContainer,
  //          Metadata metadata = default,
  //          BlobContainerEncryptionScopeOptions encryptionScopeOptions = default,
  //          CancellationToken cancellationToken = default) =>
  //          await base.CreateIfNotExistsInternal(
  //              publicAccessType,
  //              metadata,
  //              encryptionScopeOptions,
  //              async: true,
  //              cancellationToken)
  //              .ConfigureAwait(false);
  //}
  class AzureBlobService : IAzureBlob
  {

    private IConfiguration Configuration { get; }

    public AzureBlobService(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public async Task<Document> Upload(IFormFile file)
    {
      //Configuration.GetSection("ConnectionString").Value

      BlobContainerClient container = new BlobContainerClient(Configuration.GetConnectionString("AzureBlob"), "newimages");
      await container.CreateIfNotExistsAsync();
      container.SetAccessPolicy(PublicAccessType.BlobContainer, null, null, default);
      
      
      BlobClient blob = container.GetBlobClient(file.FileName);


      using var stream = file.OpenReadStream();

      // var filePath = Path.GetTempFileName();
      //using (var stream = System.IO.File.Create(filePath))
      //{
      //  await file.CopyToAsync(stream);
      //}

      BlobUploadOptions options = new BlobUploadOptions()
      {
        HttpHeaders = new BlobHttpHeaders() { ContentType = file.ContentType }
      };

      if (!blob.Exists())
      {
        await blob.UploadAsync(stream, options);
        // await blob.UploadAsync(filePath);
      }

      Document document = new Document()
      {
        Name = file.FileName,
        Size = file.Length,
        Type = file.ContentType,
        Url = blob.Uri.ToString(),
      };

      return document;
    }

  }
}
