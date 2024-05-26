import { KewiClient } from "../client";

export interface Loop {
    name: string;
    seconds: number;
    plugin?: string;
    execute: (client: KewiClient) => Promise<void>;
}