export type UnaryFunction<R, V = any> = (arg: V) => R | UnaryFunction<R, V>;
