export function setPrototype() {
  Array.prototype.getMinIdx = function () {
    const minValue = Math.min.apply(null, this);
    const minIdx = this.indexOf(minValue);

    return minIdx;
  };

  Array.prototype.getMaxIdx = function () {
    const maxValue = Math.max.apply(null, this);
    const maxIdx = this.indexOf(maxValue);

    return maxIdx;
  };
}
