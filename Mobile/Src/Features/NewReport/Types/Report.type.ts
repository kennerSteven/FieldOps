export interface NewReportType {
  Description: string;
  Priority: string;
  Date?:string
  Localitation: { latitude: number; longitude: number } | null;
  img:  { uri: string }[];
}