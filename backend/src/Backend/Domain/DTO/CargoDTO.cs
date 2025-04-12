using System;
using System.Text.Json.Serialization;

namespace UserAdmin.Domain.DTO;

public class CargoDTO
{
    [JsonPropertyName("id")] public int Id { get; set; }
    [JsonPropertyName("nombre")] public string Nombre { get; set; } = string.Empty;
    [JsonPropertyName("codigo")] public string Codigo { get; set; } = string.Empty;
    [JsonPropertyName("activo")] public bool Activo { get; set; }
    [JsonPropertyName("id_usuario_creacion")] public int IdUsuarioCreacion { get; set; }

    public CargoDTO(int id, string nombre, string codigo, bool activo, int idUsuarioCreacion)
    {
        Id = id;
        Nombre = nombre;
        Codigo = codigo;
        Activo = activo;
        IdUsuarioCreacion = idUsuarioCreacion;
    }
}
