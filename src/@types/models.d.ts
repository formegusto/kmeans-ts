declare interface IKMeans {
  K: number;
}

declare type IKMeansIteratorResultObject = number[] | undefined;

declare interface IKMeansIterable
  extends IKMeans,
    Iterable<IKMeansIteratorResultObject> {}

declare interface IKMeansIteratorSetting
  extends IKMeans,
    Iterator<IKMeansIteratorResultObject> {
  centroids: number[][];
  distances?: number[][];
  labels?: number[];
}
