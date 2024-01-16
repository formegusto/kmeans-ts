declare interface GenerateRandomDatasetParams {
  // [row, column]
  shape: [number, number];
  max?: number;
}

declare interface GenerateRandomDatasetRunParams {
  length: string;
}

declare interface KMeansRunParams {
  filename: string;
  K: string;
  type: "steps" | "result";
}
