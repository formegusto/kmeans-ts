declare interface IKMeansSetting {
  K: number;
}

declare interface IKMeansIter extends IKMeansSetting {
  dataset: number[][];
}

declare interface IKMeansResult {
  centroids: number[][];
  labels: number[];
  inertia: number;
}

declare type IKMeansIteratorResult = IKMeansResult | undefined;

declare interface IKMeans extends IKMeansSetting {
  fit: (dataset: number[][]) => IKMeansIteratorResult | null;
}

declare interface IKMeansIterable
  extends IKMeansIter,
    Iterable<IKMeansIteratorResult, IKMeansIteratorResult> {
  setInitCentroids: (dataset: number[][]) => number[][];
}

declare interface IKMeansIterator
  extends IKMeansIter,
    Iterator<IKMeansIteratorResult, IKMeansIteratorResult> {
  centroids?: number[][];

  calcDistances: () => number[][];
  labeling: (distances: number[][]) => number[];
  calcCentroids: (labels: number[]) => void;
  calcSSE: (labels: number[]) => number;
}
