import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "..", ".env") });

export const env = {
    CLIENT_ID: process.env.CLIENT_ID as string,
    CLIENT_SECRET: process.env.CLIENT_SECRET as string,
    CLIENT_TOKEN: process.env.CLIENT_TOKEN as string,

    API_URL: process.env.API_URL,
    URL: process.env.URL,
    TOKEN: process.env.TOKEN,
}