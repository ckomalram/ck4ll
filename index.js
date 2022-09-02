/**
 * Returns a random value from an array.
 * @param {*[]} arr 
 */
const randomDataFromArray = (arr) => {
  const data = arr[Math.floor(Math.random() * arr.length)];
  console.log(`\x1b[34m${data}\x1b[89m`);
};

/**
 * Returns join array data into pairs. 
 * Example: [ [1,2], [3,4] , [5,6] ...]
 * @param {*[]} arr 
 * @returns {*[]} array
 */
const joinArrayDataIntoPair = (arr) => {
  const odds = arr.reduce( (result, value, index, array) => {

    if ( index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
     return result;
  }, []);


  return odds;
} 


module.exports = { randomDataFromArray, joinArrayDataIntoPair  };
