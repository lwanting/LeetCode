/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  /**
   * 先对角线镜像，再将每一行反转
   */
  const row = matrix.length;
  const col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  matrix.forEach(r => r = r.reverse());
  return matrix;
};