import { KewiClient } from "../client";
import { Loop } from "../types/loop";

export class LoopManager {
    private client: KewiClient;

    constructor(client: KewiClient) {
        this.client = client;
    }

    load(loops: Loop[]) {
        for (let loop of loops) {
            this.client.loops.set(loop.name, loop);

            setInterval(async () => {
                await loop.execute(this.client);
            }, loop.seconds * 1000);
        }
    }
};