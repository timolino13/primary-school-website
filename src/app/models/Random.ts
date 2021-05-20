export function mathRandom(approximate: (result: number) => number, min: number, max: number): number {
  return approximate(Math.random() * (max - min)) + min;
}
