declare interface GenerateRandomDatasetParams {
  // [row, column]
  shape: [number] | [number, number];
  max?: number;
}

declare interface KMeansRunParams {
  filename: string;
}
