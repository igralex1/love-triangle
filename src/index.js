/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  
  var count = 0;
  for (let i = 0 ; i < preferences.length; i++){
    indexFirst = i;          
    valueFirst = preferences[indexFirst];      
  
    indexSecond = valueFirst-1;                      
    valueSecond = preferences[indexSecond];        
  
    indexThird = valueSecond -1;     
    valueThird = preferences[indexThird];      
  
   
    if (++indexFirst == valueThird){
      count+=1;
      
    }
  }
  count = Math.round(count/3);
  return count;
};
