import { KewiClient } from "../client";
import { SlashCommand } from "./slashCommand";
import { PrefixCommand } from "./prefixCommand";
import { Button } from "./component";
import { Event } from "./event";
import { Loop } from "./loop";


export interface Plugin {
    config: {
        name: string,
        description?: string,
        disableable?: boolean,
    },
    buttons?: Button[],
    slashCommands?: SlashCommand[],
    prefixCommands?: PrefixCommand[],
    events?: Event[],
    loops?: Loop[],
    beforeLoad?: (client: KewiClient) => void,
    afterLoad?: (client: KewiClient) => void,
    beforeUnload?: (client: KewiClient) => void,
    afterUnload?: (client: KewiClient) => void,
}