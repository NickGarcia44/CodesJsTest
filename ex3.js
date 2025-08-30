function digitalRoot(n) {
  let array = n.toString().split('').map(Number);
  
  while (array.length > 1) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    array = sum.toString().split('').map(Number);
  }

  return array[0];
}


console.log(digitalRoot(942)); // 9 + 4 + 2 = 15 → 1 + 5 = 6 → Saída: 6
console.log(digitalRoot(132189)); // Saída: 6