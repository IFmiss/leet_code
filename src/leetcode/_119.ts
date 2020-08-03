function getRow(rowIndex: number): number[] {
  if (rowIndex == 0) return [1]
  if (rowIndex == 1) return [1, 1]

  const preArr = getRow(rowIndex - 1);

  const temp = []
  for (let i = 0; i <= rowIndex; i++) {
    if (i < 1) {
      temp[i] = preArr[i]
    } else {
      temp[i] = preArr[i - 1] + (preArr[i] || 0)
    }
  }
  return temp
};

export default getRow
