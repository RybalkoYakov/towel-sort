module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    const solution = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            solution.push(...matrix[i])
        } else {
            solution.push(...matrix[i].reverse())
        }
    }
    return solution;
}
