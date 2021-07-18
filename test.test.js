const arrayOfCoordinates = [];
for (var x = 1; x <= 5; x++) {
  for (var y = 1; y <= 5; y++) {
    arrayOfCoordinates.push({ x: x, y: y });
  }
}

/*  the loop above generates an array of coordiantes
  [
  { x: 1, y: 1 }, 
  { x: 1, y: 2 },
  { x: 1, y: 3 }, 
  { x: 1, y: 4 },
  { x: 1, y: 5 }, 
  { x: 2, y: 1 },
  { x: 2, y: 2 }, 
  { x: 2, y: 3 },
  { x: 2, y: 4 }, 
  { x: 2, y: 5 },
  { x: 3, y: 1 }, 
  { x: 3, y: 2 },
  { x: 3, y: 3 }, 
  { x: 3, y: 4 },
  { x: 3, y: 5 }, 
  { x: 4, y: 1 },
  { x: 4, y: 2 }, 
  { x: 4, y: 3 },
  { x: 4, y: 4 }, 
  { x: 4, y: 5 },
  { x: 5, y: 1 }, 
  { x: 5, y: 2 },
  { x: 5, y: 3 }, 
  { x: 5, y: 4 },
  { x: 5, y: 5 }
]
 */

//'target' is the reference coordinates which is going to be used to sort the array depending on the "distance" from target
const target = { x: 5, y: 2 }


// 'a' is the first element to compare. 'b' is the second element to compare with.
arrayOfCoordinates.sort((a, b) => {
  return Math.sqrt((target.x - a.x) ** 2 + (target.y - a.y) ** 2) - Math.sqrt((target.x - b.x) ** 2 + (target.y - b.y) ** 2);
});

console.table(arrayOfCoordinates)