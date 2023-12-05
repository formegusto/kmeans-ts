export function generateRandomDataSet({
  shape,
  max,
}: GenerateRandomDataSetParams): number[][] {
  max = max ?? 100;

  const [r, c] = shape;
  const dataset = Array.from(
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
  );
  return dataset;
}
