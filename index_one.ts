import { Console, Effect } from "effect";
const divide = (a: number, b: number): Effect.Effect<number, Error, never> =>
  b === 0
    ? Effect.fail(new Error("Cannot divide by zero"))
    : Effect.succeed(a / b);

Console.log(divide(12, 4));
Console.log(divide(12, 0));

const program1 = Console.log(divide(12, 4));
Effect.runSync(program1);

const program2 = Console.log(divide(12, 0));
Effect.runSync(program2);
