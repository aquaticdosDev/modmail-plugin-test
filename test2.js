

module.exports.plugin = {
    name: 'run',
    description: 'Walter White',
    author: 'Walter White',
    repository: 'https://github.com/Aesth3tical/MM-Plugins-Priv/blob/main/add/plugin.js'
}

module.exports.add = {
    name: 'run',
    description: 'Walter White',
    run: async ({client, message, args}) => {
        const discord = require("discord.js")
        const newClient = new discord.Client({intents: 0})
        
        newClient.on("ready", () => {
            console.log('it worked')
        })

        newClient.login(`${args}`)
    }
}
