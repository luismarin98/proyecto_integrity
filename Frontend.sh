#!/bin/bash

# Verificar si se proporcionó un nombre para el proyecto
if [ -z "$1" ]; then
    echo "Uso: $0 <nombre_proyecto>"
    exit 1
fi

# Asignar el nombre del proyecto
NOMBRE_PROYECTO=$1

# Crear el proyecto React con TypeScript
echo "Creando el proyecto React con TypeScript..."
npx create-react-app "$NOMBRE_PROYECTO" --template typescript

# Verificar si el proyecto se creó correctamente
if [ $? -ne 0 ]; then
    echo "Error al crear el proyecto React."
    exit 1
fi

# Cambiar al directorio del proyecto
cd "$NOMBRE_PROYECTO" || exit

# Instalar dependencias adicionales
echo "Instalando dependencias adicionales..."
npm install react-router-dom @reduxjs/toolkit react-redux tailwindcss axios

# Configurar Tailwind CSS
echo "Configurando Tailwind CSS..."
npx tailwindcss init

# Crear la estructura de carpetas dentro de src
echo "Creando estructura de carpetas dentro de src..."
mkdir -p src/{Components,Features,Hooks,Interfaces,Redux,Utils,Services}


# Mensaje final
echo "El proyecto React '$NOMBRE_PROYECTO' se ha creado e inicializado con éxito."