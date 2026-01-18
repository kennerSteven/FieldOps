export interface NewReportType {
  Description: string;
  Priority: string;
  Localitation: { latitude: number; longitude: number } | null;
  img:  { uri: string }[];
}