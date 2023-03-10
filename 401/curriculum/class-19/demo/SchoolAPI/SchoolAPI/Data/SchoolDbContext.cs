using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SchoolAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolAPI.Data
{
  public class SchoolDbContext : IdentityDbContext<ApplicationUser>
  {
    public DbSet<Student> Students { get; set; }
    public DbSet<Technology> Technologies { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Enrollment> Enrollments { get; set; }

    public SchoolDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      // We need Identity to do it's thing ...
      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<Student>().HasData(
        new Student { Id = 1, FirstName = "John", LastName = "Cokos" }
      );

      modelBuilder.Entity<Course>().HasData(
        new Course { Id = 1, CourseCode = "seattle-dotnet-401d13", TechnologyId = 3 },
        new Course { Id = 2, CourseCode = "seattle-javascript-401n18", TechnologyId = 1 },
        new Course { Id = 3, CourseCode = "seattle-code-201d73", TechnologyId = 1 }
      );

      modelBuilder.Entity<Technology>().HasData(
        new Technology { Id = 1, Name = "Javascript" },
        new Technology { Id = 2, Name = "Python" },
        new Technology { Id = 3, Name = "C#" },
        new Technology { Id = 4, Name = "Java" }
      );

      modelBuilder.Entity<Enrollment>().HasKey(
        enrollment => new { enrollment.CourseId, enrollment.StudentId }
      );

      // user Roles
      // Seed a few roles using Identity
      SeedRole(modelBuilder, "Administrator", "create", "update", "delete");
      SeedRole(modelBuilder, "Editor", "create", "update");

    }

    private int nextId = 1;

    private void SeedRole(ModelBuilder modelBuilder, string roleName, params string[] permissions)
    {
      var role = new IdentityRole
      {
        Id = roleName.ToLower(),
        Name = roleName,
        NormalizedName = roleName.ToUpper(),
        ConcurrencyStamp = Guid.Empty.ToString()
      };

      modelBuilder.Entity<IdentityRole>().HasData(role);

      // Go through the permissions list (the params) and seed a new entry for each
      var roleClaims = permissions.Select(permission =>
        new IdentityRoleClaim<string>
        {
          Id = nextId++,
          RoleId = role.Id,
          ClaimType = "permissions", // This matches what we did in Startup.cs
          ClaimValue = permission
        }).ToArray();

      modelBuilder.Entity<IdentityRoleClaim<string>>().HasData(roleClaims);
    }

  }

}
