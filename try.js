function objectOnlyContains(obj, key) {
  return (Object.keys(obj).includes(key) && Object.keys(obj).length === 1);
}

function isStringArrayEqual(arr1, arr2) {
  try {
    if (arr1.length !== arr2.length) return false;
    let a1 = [...arr1].sort();
    let a2 = [...arr2].sort();
    for (let i=0; i<arr1.length; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;    
  } catch (error) {
    return false;
  }
}

let o1 = {da : 'fuq'}
let o2 = {da : 'fuq', is : 'this'};
let o3 = {da : { fuq : 'man'}};

// console.log(objectOnlyContains(o1, 'da'));
// console.log(objectOnlyContains(o2, 'da'));
// console.log(objectOnlyContains(o3, 'da'));

let x1 = ['pund','panda','pat pan','p'];
let x2 = ['panda', 'p', 'pat pan', 'pund'];
let x3 = ['n', ['qwe',982317], 'uaiej'];
let x4 = ['n', ['qwe',982317], 'uaiej'];


// console.log(isStringArrayEqual(x1,x2));
// console.log(isStringArrayEqual(x3,x4));

console.log(Number('1000 meter'));
console.log(parseInt('1000 meter'));
console.log(parseInt('31 Desember 1996'));
console.log(parseInt('31 Desember 1996'.slice(-4)));
console.log(parseInt('1996'.slice(-4)));
console.log(parseInt('Pleistosen'.slice(-4)));
console.log(parseInt('-14213'.slice(-4)));
console.log(parseInt('-14213'));
