export interface actorDTO {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  foto: string;      // La foto que viene del backend es una URL (string)
  biografia: string; // <-- Añadido para que coincida con tu formulario
}

export interface actorCreacionDTO {
  nombre: string;
  fechaNacimiento: Date;
  foto:File;
  biografia: string;
}