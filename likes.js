
let first = ['Roman','Tom','Jack','Emma']; 
let second = ['Roman','Tom','Jack']; 
let third = ['Roman','Tom'];
let fourth = ['Roman'];
let fifth = [];

function likes(array) {
    if (array.length == 4) {
        console.log(`${array[0]}, ${array[1]} and 2 others like this`);
    } else if (array.length == 3) {
        console.log(`${array[0]}, ${array[1]} and ${array[2]} like this`);
    } else if (array.length == 2) {
        console.log(`${array[0]} and ${array[1]} like this`);
    } else if (array.length == 1) {
        console.log(`${array[0]} like this`);
    } else {
        console.log(`no like this`);
    }
}

likes(first);
likes(second);
likes(third);
likes(fourth);
likes(fifth);