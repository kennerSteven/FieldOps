export type Priority = 'Alta' | 'Media' | 'Bajo';

export interface Report {
  id: number;
  descripcion: string;
  prioridad: Priority;
  fecha: string;
  latitud: number;
  longitud: number;
}
