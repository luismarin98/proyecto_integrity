using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserAdmin.Domain.Models;

[Table("Usuario")]
public class UserModel
{
    [Key][Column("id", TypeName = "int")] public int Id { get; set; }
    [Column("primer_nombre", TypeName = "varchar")] public string PrimerNombre { get; set; } = string.Empty;
    [Column("segundo_nombre", TypeName = "varchar")] public string SegundoNombre { get; set; } = string.Empty;
    [Column("primer_apellido", TypeName = "varchar")] public string PrimerApellido { get; set; } = string.Empty;
    [Column("segundo_apellido", TypeName = "varchar")] public string SegundoApellido { get; set; } = string.Empty;
    [Column("id_departamento", TypeName = "int")] public int ID_Departamento { get; set; }
    [Column("id_cargo", TypeName = "int")] public int ID_Cargo { get; set; }

    public virtual CargoModel Cargo { get; set; }
    public virtual DepartamentoModel Departamento { get; set; }

    public UserModel(int id, string PrimerNombre, string SegundoNombre, string PrimerApellido, string SegundoApellido, int ID_Departamento, int ID_Cargo)
    {
        Id = id;
        this.PrimerNombre = PrimerNombre;
        this.SegundoNombre = SegundoNombre;
        this.PrimerApellido = PrimerApellido;
        this.SegundoApellido = SegundoApellido;
        this.ID_Departamento = ID_Departamento;
        this.ID_Cargo = ID_Cargo;
    }
}