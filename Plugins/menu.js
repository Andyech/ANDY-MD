const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚‍♀️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
 ╭─────────────━┈⊷
│*🧚‍♀️ ʙᴏᴛ ɴᴀᴍᴇ*: ANDY-MD
│*👨‍💻 ᴏᴡɴᴇʀ*: Andy Tech    
│*👤 ɴᴜᴍʙᴇʀ*: 256701583113
│
│*🧬Version*: 1.0.0
│*💻 HOST* :  fv-az661-842
│*💫 ᴘʀᴇғɪx:* .
╰─────────────━┈⊷ 

╭━❮ 𝙰𝙸 ❯━╮
┃◆ .𝙰𝚒
╰━━━━━━━━━━━━━━━⪼
╭━◆ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 ◆━╮
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝚁𝙴𝚂𝚃𝙰𝚁𝚃
┃◆ .𝙿𝚒𝚗𝚐
┃◆ .𝚅𝚒𝚍𝚎𝚘
┃◆ .𝙿𝙻𝙰𝚈
┃◆ .𝙼𝙸𝙺𝚄
┃◆ .𝙵𝙰𝙲𝚃
┃
╰━━━━━━━━━━━━━━━⪼


 > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ANDY TECH
`
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/eaNq5908Grs.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
