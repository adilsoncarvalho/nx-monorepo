import { isEven } from "@cmx/is-even";

export function isOdd(x: number): boolean {
  return !isEven(x);
}
