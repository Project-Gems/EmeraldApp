import { KewiClient } from "./client";
import { env } from "./env";

const client = new KewiClient();
client.login(env.CLIENT_TOKEN);