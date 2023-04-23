//validates .env file
import { config, env } from "@env";
config();

const { NODE_ENV } = env; // validated and typesafe env vars
console.log(NODE_ENV); //development by default

import hello from "@/hello";
hello(); //prints "hello world"
