using System;
using Microsoft.EntityFrameworkCore;
using UserAdmin.Domain.Models;

namespace UserAdmin.Infrastructure.Context;

public class DB_Config : DbContext
{
    public DB_Config(DbContextOptions<DB_Config> options) : base(options) { }

    public DbSet<UserModel> Categoria => Set<UserModel>();
    public DbSet<DepartamentoModel> Departamento => Set<DepartamentoModel>();
    public DbSet<CargoModel> Cargo => Set<CargoModel>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>()
                .HasOne(u => u.Cargo)
                .WithMany(c => c.Users)
                .HasForeignKey(u => u.ID_Cargo);

            modelBuilder.Entity<UserModel>()
                .HasOne(u => u.Departamento)
                .WithMany(d => d.Users)
                .HasForeignKey(u => u.ID_Departamento);
        }
}
