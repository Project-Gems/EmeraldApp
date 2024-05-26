import { KewiClient } from "../client";
import { SlashCommand } from "../types/slashCommand";
import { Events } from "../types/event";
import { Plugin } from "../types/plugin";

export class PluginManager {
    public client: KewiClient
    public plugins: Plugin[];

    constructor(client: KewiClient) {
        this.client = client;
        this.plugins = [];
    }

    load(plugin: Plugin) {
        plugin.beforeLoad?.(this.client);
        this.plugins.push(plugin);

        if (plugin.slashCommands) {
            var slashCommands = new Array();
            for (let command of plugin.slashCommands) {
                command.plugin = plugin.config.name;
                slashCommands.push(command);
            }
            this.client.CommandManager.loadSlashCommands(slashCommands);
        }

        if (plugin.prefixCommands) {
            var prefixCommands = new Array();
            for (let command of plugin.prefixCommands) {
                command.plugin = plugin.config.name;
                prefixCommands.push(command);
            }
            this.client.CommandManager.loadPrefixCommands(prefixCommands);
        }

        if (plugin.buttons) {
            var buttons = new Array();
            for (let button of plugin.buttons) {
                button.plugin = plugin.config.name;
                buttons.push(button);
            }
            this.client.ComponentManager.loadButtons(buttons);
        }

        if (plugin.events) {
            var events = new Array();
            for (let event of plugin.events) {
                event.plugin = plugin.config.name;
                events.push(event);
            }
            this.client.EventManager.load(events);
        }

        if (plugin.loops) {
            var loops = new Array();
            for (let loop of plugin.loops) {
                loop.plugin = plugin.config.name;
                loops.push(loop);
            }
            this.client.LoopManager.load(loops);
        }

        plugin.afterLoad?.(this.client);
    }
    
    loadAll(plugins: Plugin[]) {
        for (let plugin of plugins) {
            this.load(plugin);
        }
    }
}