import { KewiClient } from "../client";
import { Button } from "../types/component";

export class ComponentManager {
    public client: KewiClient;

    constructor(client: KewiClient) {
        this.client = client;
    }

    public loadButtons(buttons: Button[]) {
        for (var button of buttons) {
            this.client.buttons.set(button.config.custom_id, button);
        }
    }

    async onInteraction(interaction: any) {
        if (interaction.isButton()) {
            const buttonId = (interaction.customId).split("_")[0];
            const button = this.client.buttons.get(buttonId);

            if (!button) return;

            try {
                button.execute(this.client, interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
};