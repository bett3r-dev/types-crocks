type CurriedBinaryFunctionI<L= any, R = any, RETURN = R> = (arg1: L, arg2: R) => RETURN;
type CurriedBinaryFunctionII<L= any, R = any, RETURN = R> = (arg1: L) => (arg2: R) => RETURN;

export type BinaryFunction<L= any, R = any, RETURN = R> = CurriedBinaryFunctionI<L,R, RETURN> | CurriedBinaryFunctionII<L,R, RETURN>;
