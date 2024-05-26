import { Plugin } from "../../types/plugin";

export const LevelsPlugin: Plugin = {
    config: {
        name: "Levels",
        disableable: true
    },
    buttons: [],
    slashCommands: [],
    prefixCommands: [],
    events: [],
    afterLoad: () => {
        console.log("Loaded Levels Plugin")
    }
}