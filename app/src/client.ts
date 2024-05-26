import {
    Client,
    GatewayIntentBits,
    Partials,
    Collection
} from "discord.js";

import { PluginManager } from "./managers/plugin";
import { Plugins } from "./plugins/plugins";

import { CommandManager } from "./managers/command";
import { ComponentManager } from "./managers/component";
import { EventManager } from "./managers/event";
import { LoopManager } from "./managers/loop";

import { Button } from "./types/component";
import { SlashCommand } from "./types/slashCommand";
import { PrefixCommand } from "./types/prefixCommand";
import { Event, Events } from "./types/event";
import { Loop } from "./types/loop";

export class KewiClient extends Client {
    public buttons: Collection<string, Button>;
    public slashCommands: Collection<string, SlashCommand>;
    public prefixCommands: Collection<string, PrefixCommand>;
    public events: Collection<string, Event>;
    public loops: Collection<string, Loop>;

    public PluginManager: PluginManager;
    public CommandManager: CommandManager;
    public ComponentManager: ComponentManager;
    public EventManager: EventManager;
    public LoopManager: LoopManager;

    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildModeration,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.AutoModerationExecution,
                GatewayIntentBits.AutoModerationConfiguration,
            ],
            partials: [
                Partials.GuildMember,
                Partials.Channel,
                Partials.Message,
                Partials.User,
            ]
        });

        //this.setMaxListeners(25);

        this.slashCommands = new Collection();
        this.prefixCommands = new Collection();
        this.events = new Collection();
        this.buttons = new Collection();
        this.loops = new Collection();

        // Plugin Manager
        this.PluginManager = new PluginManager(this);

        // Command Manager
        this.CommandManager = new CommandManager(this);

        // Component Manager
        this.ComponentManager = new ComponentManager(this);

        // Event Manager
        this.EventManager = new EventManager(this);

        // Loop Manager
        this.LoopManager = new LoopManager(this);

        // Load all plugins
        this.PluginManager.loadAll(Plugins)

        this.on("ready", async (client) => {
            console.log(`Logged in as ${client.user?.tag}`);
            
            for (let guild of await client.guilds.fetch()) {
                this.CommandManager.register([...this.slashCommands.values()], guild[0]);
            }
            this.on(Events.InteractionCreate, (interaction: any) => this.CommandManager.onInteraction(interaction));
        });
    }
};