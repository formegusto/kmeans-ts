declare interface IKMeansResult {
  centroids: number[][];
  labels: number[];
  sse: number;
}

declare type IKMeansIteratorResultValue = IKMeansResult;

declare interface IKMeansIterable
  extends Iterable<IKMeansIteratorResultValue> {}

declare interface IKMeansIterator
  extends IKMeansResult,
    Iterator<IKMeansIteratorResultValue> {
  centroids: number[][];
  distances?: number[][];
  labels?: number[];
}
