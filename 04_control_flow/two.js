// for of loop
 
const nums = [9, 8, 7, 6, 5, 4, 3, 2]
for (const num of nums) {
    // console.log(num);
}


// maps

const maps = new Map
maps.set('In', 'India')
maps.set('BR', 'Britain')
maps.set('AUS', 'Australia')

for (const [map, value] of maps) {
    console.log(map, value);
}