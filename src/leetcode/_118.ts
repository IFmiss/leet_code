function generate(numRows: number): number[][] {
  let wrap: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    wrap[i] = []
    for (let j = 0; j <= i; j ++) {
      if (j == 0 || j == i) {
        wrap[i].push(1)
      } else {
        const w = wrap[i - 1]
        wrap[i].push(w[j - 1] + w[j])
      }
    }
  }
  return wrap
};

export default generate
