// Correct
declare const [A, B];
export declare function foo(): number;
// Incorrect
declare const { c, d };
declare const [e];
export { c, d, e };
