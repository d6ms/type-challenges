type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type Colors = ["white", "red", "black", "purple"]

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple>

const a: result = {
    tesla: "tesla",
    "model 3": "model 3",
    "model X": "model X",
    "model Y": "model Y"
};

type nn = TupleToObject<Colors>;
const c: nn = {
    white: "white",
    red: "red",
    black: "black",
    purple: "purple"
}