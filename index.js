var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Melhor server de RP",
assets : {
large_image : "logo",
large_text : "MTA Fortunna Roleplay" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "SERVER DC" , url : "https://discord.gg/VsZ73cebXs"},{label : "SITE",url : "http://fortunnarp.epizy.com/?i=1"}]
}
})
})
client.login({ clientId : "838201879116382208" }).catch(console.error);