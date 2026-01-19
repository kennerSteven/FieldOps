export interface TypeImagen {
  uri: string;
}

export interface ImageItemType {
  images: TypeImagen[];
  setImages: React.Dispatch<React.SetStateAction<TypeImagen[]>>;
}
