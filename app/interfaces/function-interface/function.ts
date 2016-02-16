export interface functionalInterface {
  // argument types and the return of the function
  (arg1: string, arg2: number) :boolean
}

// This is an example that will error as f cannot return a string
// let f: functionalInterface;
// f = function(a: string, b: number) {
//   return a;
// }
