type Length<T extends any[]> = T["length"]; // application of T[K]

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type empty = []

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

const four: teslaLength = 4;
const zero: Length<empty> = 0;