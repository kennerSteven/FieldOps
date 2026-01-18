export interface Location {
  latitude: number;
  longitude: number;
}

export interface Image {
  uri: string;
}
export default interface Report {
  Description: string;
  Priority: string;
  Localitation: {
    latitude: number;
    longitude: number;
  };
  img: { uri: string }[];
  createdAt?: Date;
}
