export function generateRandomDataset({
  shape,
  max,
}: GenerateRandomDatasetParams): GenerateRandomDatasetResult {
  const [r, c] = shape;
  max = max ?? 100;
  const dataset = c
    ? Array.from(
        {
          length: r,
        },
        () =>
          Array.from(
            {
              length: c,
            },
            () => Math.round(Math.random() * max!)
          )
      )
    : Array.from(
        {
          length: r,
        },
        () => Math.round(Math.random() * max!)
      );
  return dataset;
}
