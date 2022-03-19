// basically this answer is correct
// but is empty array is passed, the return type of First will be undefined
// to prevent that, First requires conditional branching and have to return never if empty array is passed
type First<T extends any[]> = T[0];

// better implementation using conditional types
type BetterFirst<T extends any[]> = T[number] extends never ? never : T[0];
type BetterFirst2<T extends any[]> = T extends [] ? never : T[0];


type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type empty = []

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

const a: head1 = "a";
const b: head2 = 3;
const c: BetterFirst2<empty> = "error";