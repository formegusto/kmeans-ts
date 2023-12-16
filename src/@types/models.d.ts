declare type IKMeansParams = {
  K: number;
  maxEqIter: number;
};

declare interface IKMeansSetting {
  params: IKMeansParams;
}

declare interface IKMeansIter extends IKMeansSetting {
  dataset: number[][];
}

declare interface IKMeansIteratorResult {
  centroids: number[][];
  labels: number[];
  sse: number;
}

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
  centroids: number[][];

  calcDistances: () => number[][];
  labeling: (distances: number[][]) => number[];
  calcCentroids: (labels: number[]) => boolean;
  calcSSE: (labels: number[]) => number;
}
