//// [usingDeclarationsDeclarationEmit.1.ts]
using r1 = {
    [Symbol.dispose] () {}
}
export { r1 };
await using r2 = {
    async [Symbol.asyncDispose] () {}
}
export { r2 };
