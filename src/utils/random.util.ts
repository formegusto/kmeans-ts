export function generateRandomDataset({
  shape,
  max,
}: GenerateRandomDataSetParams): number[] | number[][] {
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
