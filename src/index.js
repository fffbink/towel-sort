
module.exports = function towelSort (matrix) {
if((arguments.length == 0)||(matrix.length == 'undefinded')){return [];} 
 
    for(let i=0; i<matrix.length; i++)
    {
      (i%2!=0) ? matrix[i].sort((a, b) => b - a) : matrix[i].sort((a, b) => a - b); 
    }

    return matrix.flat();
}
