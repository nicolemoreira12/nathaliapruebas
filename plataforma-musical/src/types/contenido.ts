export interface Contenido {
  id: string;
  artistaId: string;
  titulo: string;
  tipo: 'Canción' | 'Álbum';
  fecha_lanzamiento: string;
  lyrics: string;
}
