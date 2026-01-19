export interface paramsLocationType {
  latitude: number;
  longitude: number;
}

export interface LocationPickerTypes {
  location: paramsLocationType | null; 
  setLocation: (value: paramsLocationType) => void;
}