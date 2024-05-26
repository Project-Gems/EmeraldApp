import { Plugin } from "../../types/plugin";
import { LevelsCommand } from "./slash/levels";

import { RankCommand } from "./slash/rank";

export const LevelsPlugin: Plugin = {
    config: {
        name: "Levels"
    },
    buttons: [],
    slashCommands: [
        LevelsCommand,
        RankCommand
    ],
    prefixCommands: [],
    events: [],
    afterLoad: () => {
        console.log("Loaded Levels Plugin")
    }
}