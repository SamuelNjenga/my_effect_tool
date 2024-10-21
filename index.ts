import { Console, Effect } from "effect";
const program = Console.log("Hello, World JS!");
Effect.runSync(program);
