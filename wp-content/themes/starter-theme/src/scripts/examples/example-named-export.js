/// METHOD 1: ///
// You can add the word `export` in front of item you are wanting to export

export const exampleVariable1 = 'I am exampleVariable1';

export function exampleFunc1() {
  console.log( "FROM:  Named Export - exampleFunc1!" );
}


/// METHOD 2: ///
// You can write your functions as normal and export all items at the end as an Object

const exampleVariable2 = 'I am exampleVariable2';

function exampleFunc2() {
  console.log( "FROM:  Named Export - exampleFunc2!" );
}

export { exampleVariable2, exampleFunc2 }
