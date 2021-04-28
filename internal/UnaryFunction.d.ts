export type UnaryFunction<RETURN, VALUE = any> = (arg: VALUE) => RETURN | UnaryFunction<RETURN, VALUE>;
