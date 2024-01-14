export function generateRandomDataset({
  shape,
  max,
}: GenerateRandomDatasetParams): GenerateRandomDatasetResult {
  max = max ?? 100;
  const [r, c] = shape;
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
            () => Math.random() * max!
          )
      )
    : Array.from(
        {
          length: r,
        },
        () => Math.random() * max!
      );
  return dataset;
}
