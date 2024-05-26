import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { env } from "../env";
import { KewiClient } from "../client";
import { SlashCommand } from "../types/slashCommand";
import { PrefixCommand } from "../types/prefixCommand";


export class CommandManager {
    public client: KewiClient;
    
    constructor(client: KewiClient) {
        this.client = client;
    }

    public loadSlashCommands(commands: SlashCommand[]) {
        for (var command of commands) {
            this.client.slashCommands.set(command.config.name, command);
        }
    }

    public loadPrefixCommands(commands: PrefixCommand[]) {
        for (var command of commands) {
            this.client.prefixCommands.set(command.config.name, command);
        }
    }

    public async register(commands: SlashCommand[], guildId?: string | null) {
        var cmds = new Array();

        for (let command of commands) {
            cmds.push(command.config);
        }

        const rest = new REST({ version: '10' }).setToken(env.CLIENT_TOKEN);

        if (guildId) {
            var data: any = await rest.put(
                Routes.applicationGuildCommands(env.CLIENT_ID, guildId),
                { body: cmds }
            )
            console.log(`Successfully reloaded ${data.length} guild (/) commands.`);
        } else {
            var data: any = await rest.put(
                Routes.applicationCommands(env.CLIENT_ID),
                { body: cmds }
            )
            console.log(`Successfully reloaded ${data.length} (/) commands.`);
        }
    }

    public async unregister(guildId?: string | null) {
        const rest = new REST({ version: '10' }).setToken(env.CLIENT_TOKEN);

        if (guildId) {
            await rest.put(
                Routes.applicationGuildCommands(env.CLIENT_ID, guildId),
                { body: [] }
            )
        } else {
            await rest.put(
                Routes.applicationCommands(env.CLIENT_ID),
                { body: [] }
            )
        }
    }

    public async onInteraction(interaction: any) {
        var command = this.client.slashCommands.get(interaction.commandName);

        if (!command) return;

        if (interaction.isChatInputCommand()) {
            try {
                await command.execute(this.client, interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }

        } else if (interaction.isAutocomplete() && command.autocomplete) {
            try {
                await command.autocomplete(this.client, interaction);
            } catch (error) {
                console.error(error);
            }
        }
    }
}