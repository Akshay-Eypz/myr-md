const config = require('../config')
const { cmd , commands } = require('../command')
const {sleep} = require('../lib/functions')
cmd({
    pattern: "restart", 
    desc: "ᴄʏʙᴇʀ ᴍʏ ʀᴇꜱᴛᴀʀᴛᴇᴅ",
    category: "owner",  
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return reply("*This Owner Command*");
const {exec} = require("child_process")
reply("𝕣𝕖𝕤𝕥𝕒𝕣𝕥𝕚𝕟𝕘........")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
