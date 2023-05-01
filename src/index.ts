//validates .env file
import env from "@env";

const { NODE_ENV } = env; // validated and typesafe env vars
console.log(NODE_ENV); //development by default

import hello from "@/hello";
hello(); //prints "hello world"
