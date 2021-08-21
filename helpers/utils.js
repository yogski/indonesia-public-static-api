/**
 * Check if object contains only specific key
 * @param {*} obj 
 * @param {*} item 
 */
export const objectOnlyContainsKeys = (obj, keys) => {
  return (isStringArrayEqual(Object.keys(obj),keys));
}

export const isStringArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let a1 = [...arr1].sort();
  let a2 = [...arr2].sort();
  for (let i=0; i<arr1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;    
}