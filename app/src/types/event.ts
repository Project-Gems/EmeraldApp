import { KewiClient } from "../client";

export enum Events {
    GuildBanAdd = "guildBanAdd",
    GuildMemberAdd = "guildMemberAdd",
    GuildMemberUpdate = "guildMemberUpdate",
    GuildMemberRemove = "guildMemberRemove",
    InteractionCreate = "interactionCreate",
    Ready = "ready",
    VoiceStateUpdate = "voiceStateUpdate",
    GuildAdminAdd = "guildAdminAdd",
    GuildAdminRemove = "guildAdminRemove",
    GuildVerifiedAdd = "guildVerifiedAdd",
    GuildVerifiedRemove = "guildVerifiedRemove",
    MessageCreate = "messageCreate",
    GuildCreate = "guildCreate",
}

export interface Event {
    name: string;
    once?: boolean;
    plugin?: string;
    execute: (client: KewiClient, ...args: any) => void;
}