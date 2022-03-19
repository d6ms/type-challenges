type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

// @ts-ignore
const func = async () => "";

const a = func();
type mayBeString = Awaited<typeof a>;

const str: mayBeString = "a";

