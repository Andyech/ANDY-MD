const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          
📍SESSION-ID ❤️‍🔥👇

👨‍💻◦ https://sahas-md-pair-web-ibx9.onrender.com

📍THIS IS ANDY-MD DEVELOPED  BY ANDY DEDICATED TO ABIE

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ANDY-TECH*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/n5vvij.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
