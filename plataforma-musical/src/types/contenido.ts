export interface Contenido {
  id: string;
  usuarioId: string;  
  tipo: string;       
  titulo: string;    
  fecha_lanzamiento: string;
  descripcion?: string;
  imagen?: string;   
  lyrics?: string;
  reproducciones?: number;
  likes?: number;
  seguidores?: number; 
}
