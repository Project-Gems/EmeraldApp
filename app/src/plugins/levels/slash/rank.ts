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

export const RankCommand: SlashCommand = {
	config: {
        name: "rank",
        description: "Find out your/someones rank in the server!",
        type: CommandTypes.CHAT_INPUT,
        contexts: [SlashCommandContexts.GUILD],
        integration_types: [IntegrationTypes.GUILD],
        options: [
            {
                type: OptionTypes.USER,
                name: "user",
                description: "The user you want the rank of",
                required: false
            }
        ]
    },

async execute(client: KewiClient, interaction: ChatInputCommandInteraction) {
    interaction.reply({ content: "This is working omg", ephemeral: true });
},
}