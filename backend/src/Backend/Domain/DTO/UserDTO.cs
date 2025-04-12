using System;
using System.Text.Json.Serialization;

namespace UserAdmin.Domain.DTO;

public class UserDTO
{
    [JsonPropertyName("id")] public int Id { get; set; }
    [JsonPropertyName("primer_nombre")] public string PrimerNombre { get; set; } = string.Empty;
    [JsonPropertyName("segundo_nombre")] public string SegundoNombre { get; set; } = string.Empty;
    [JsonPropertyName("primer_apellido")] public string PrimerApellido { get; set; } = string.Empty;
    [JsonPropertyName("segundo_apellido")] public string SegundoApellido { get; set; } = string.Empty;
    [JsonPropertyName("id_departamento")] public int ID_Departamento { get; set; }
    [JsonPropertyName("id_cargo")] public int ID_Cargo { get; set; }

    public UserDTO(int id, string PrimerNombre, string SegundoNombre, string PrimerApellido, string SegundoApellido, int ID_Departamento, int ID_Cargo)
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
