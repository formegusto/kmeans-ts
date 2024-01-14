interface IKMeansSetting {
  K: number;
}

interface IKMeansMethodParams {
  dataset?: number[][];
  centers?: number[][];
  distances?: number[][];
  labels?: number[];
}

interface IKMeansResult extends IKMeansMethodParams {
  inertia: number;
}

declare interface IKMeans {}

// declare interface IKMeansIterable
//   extends IKMeansIter,
//     Iterable<IKMeansIteratorResult, IKMeansIteratorResult> {
//   setInitCentroids: (dataset: number[][]) => number[][];
// }

// declare interface IKMeansIterator
//   extends IKMeansIter,
//     Iterator<IKMeansIteratorResult, IKMeansIteratorResult> {
//   centroids?: number[][];

//   calcDistances: () => number[][];
//   labeling: (distances: number[][]) => number[];
//   calcCentroids: (labels: number[]) => void;
//   calcSSE: (labels: number[]) => number;
// }
