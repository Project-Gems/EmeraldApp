import {
	ChatInputCommandInteraction,
} from "discord.js";

import { KewiClient } from "../../../client";
import { 
	CommandTypes,
	SlashCommandContexts,
	IntegrationTypes,
	OptionTypes,
	SlashCommand
} from "../../../types/slashCommand";

export const LevelsCommand: SlashCommand = {
	config: {
        name: "levels",
        description: "Requests the servers level leaderboard",
        type: CommandTypes.CHAT_INPUT,
        contexts: [SlashCommandContexts.GUILD],
        integration_types: [IntegrationTypes.GUILD],
    },

async execute(client: KewiClient, interaction: ChatInputCommandInteraction) {
    interaction.reply({ content: "This is working omg", ephemeral: true });
},
}