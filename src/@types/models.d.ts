declare interface IKMeans {
  K: number;
}

declare interface IKMeansIter extends IKMeans {
  dataset: number[][];
}

declare interface IKMeansResult {
  centroids: number[][];
  labels: number[];
  sse: number;
}

declare type KMeansIteratorResultValue = IKMeansResult | undefined;

declare interface IKMeansIterable
  extends IKMeansIter,
    Iterable<KMeansIteratorResultValue> {}

declare interface IKMeansIterator
  extends IKMeansIter,
    Iterator<KMeansIteratorResultValue> {}
