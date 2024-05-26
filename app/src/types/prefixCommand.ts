export interface PrefixCommand {
    plugin?: string;
    config: {
        name: string,
        description?: string,
        usage?: string,
    },
}