export interface Artista {
  imagen: string | undefined;
  foto: string;
  id: string;
  nombre: string;
  genero: string;
  pais: string;
  descripcion: string;
  tokenVerificacion?: string;
  usuarioId: string;
}
