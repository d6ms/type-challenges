type MyExclude<T, U> = T extends U ? never : T;



type ramen = "shoyu" | "shio" | "miso"
type excludedRamen = MyExclude<ramen, "miso" | "shio">

const shoyu: excludedRamen = "shoyu" // OK
const shio: excludedRamen = "shio" // error
const miso: excludedRamen = "miso" // error