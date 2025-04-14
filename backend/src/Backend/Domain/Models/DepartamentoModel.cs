using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserAdmin.Domain.Models;

[Table("Departamento")]
public class DepartamentoModel
{
    [Key][Column("id", TypeName = "int")] public int Id { get; set; }
    [Column("nombre", TypeName = "varchar(50)")] public string Nombre { get; set; } = string.Empty;
    [Column("codigo", TypeName = "varchar(50)")] public string Codigo { get; set; } = string.Empty;
    [Column("activo", TypeName = "bit")] public bool Activo { get; set; }
    [Column("id_usuario_creacion", TypeName = "int")] public int IdUsuarioCreacion { get; set; }

    public virtual ICollection<UserModel> Users { get; set; }

    public DepartamentoModel(int id, string nombre, string codigo, bool activo, int idUsuarioCreacion)
    {
        Id = id;
        Nombre = nombre;
        Codigo = codigo;
        Activo = activo;
        IdUsuarioCreacion = idUsuarioCreacion;
    }
}