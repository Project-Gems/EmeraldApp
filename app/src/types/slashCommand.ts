import { 
    ChatInputCommandInteraction,
    AutocompleteInteraction
} from "discord.js";
import { KewiClient } from "../client";

export enum CommandTypes {
    CHAT_INPUT = 1,
    USER = 2,
    MESSAGE = 3
}

export enum SlashCommandContexts {
    GUILD = 0,
    BOT_DM = 1,
    PRIVATE_CHANNEL = 2
}

export enum IntegrationTypes {
    GUILD = 0,
    USER = 1
}

export enum OptionTypes {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9,
    NUMBER = 10,
    ATTACHMENT = 11
}

export enum ChannelTypes {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_ANNOUNCEMENT = 5,
    ANNOUNCEMENT_THREAD = 10,
    PUBLIC_THREAD = 11,
    PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13,
    GUILD_DIRECTORY = 14,
    GUILD_FORUM = 15,
    GUILD_MEDIA = 16
}

export interface SlashCommand {
    plugin?: string;
    config: {
        global?: boolean;
        type: CommandTypes;
        name: string;
        description: string;
        contexts: SlashCommandContexts[];
        integration_types: IntegrationTypes[];
        options?: CommandOption[];
    };
    autocomplete?: (client: KewiClient, interaction: AutocompleteInteraction) => Promise<void>;
    execute: (client: KewiClient, interaction: ChatInputCommandInteraction) => Promise<void>;
}

export interface CommandOption {
    type: OptionTypes;
    name: string;
    description: string;
    required?: boolean;
    options?: CommandOption[];
    choices?: Choice[];
    autocomplete?: boolean;
    channel_types?: ChannelTypes[];
}

export interface Choice {
    name: string;
    value: string | number;
}