declare interface IKMeans {
  K: number;
  dataset: number[][];
}

declare type IKMeansIteratorResultValue = number | undefined;

declare interface IKMeansIterable
  extends IKMeans,
    Iterable<IKMeansIteratorResultValue> {}

declare interface IKMeansIterator
  extends IKMeans,
    Iterator<IKMeansIteratorResultValue> {
  centroids: number[][];
  distances?: number[][];
  labels?: number[];
}
