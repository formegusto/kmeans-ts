declare type IKMeansIteratorResultValue = number | undefined;

declare interface IKMeansIterable
  extends Iterable<IKMeansIteratorResultValue> {}

declare interface IKMeansIterator extends Iterator<IKMeansIteratorResultValue> {
  centroids: number[][];
  distances?: number[][];
  labels?: number[];
}
