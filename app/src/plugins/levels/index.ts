import { Plugin } from "../../types/plugin";

import { RankCommand } from "./slash/rank";

export const LevelsPlugin: Plugin = {
    config: {
        name: "Levels"
    },
    buttons: [],
    slashCommands: [
        RankCommand
    ],
    prefixCommands: [],
    events: [],
    afterLoad: () => {
        console.log("Loaded Levels Plugin")
    }
}