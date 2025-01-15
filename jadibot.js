const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, process, PhoneNumber } = modul;
const { Boom } = boom
const path = require('path');
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, makeCacheableSignalKeyStore } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const rimraf = require("rimraf");
let Pino = require("pino")

const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
   let NodeCache = require("node-cache")
   let msgRetryCounterCache = new NodeCache() 
if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (Kelvin, text, m) => {
const { sendImage, sendMessage } = Kelvin;
//sendMessage(from, 'tesss');
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/rentbot/${sender}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
 const config = {
    logger: Pino({ level: "fatal" }).child({ level: "fatal" }),
    printQRInTerminal: false,
    mobile: false,
    auth: {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
    },
    browser: [ 'Mac OS', 'Safari', '10.15.7' ],
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined
 }
 let simple = require('./index')
if (!Kelvin.authState.creds.registered) {
      setTimeout(async () => {
         let phoneNumber = `${text}`  
         console.log(chalk.red.bold(`[ Jadibot ] -> (+${phoneNumber})`))
         let code = await Kelvin.requestPairingCode(phoneNumber)
         let hasilcode = code?.match(/.{1,4}/g)?.join("-") || code
         global.codepairing = `${hasilcode}`
      }, 3000)
   }
Kelvin.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

Kelvin.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
Kelvin.sendNode({
  tag: 'call',
    attrs: {
      from: '6289512545999@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await Kelvin.sendContact(callerId, owner)
await Kelvin.sendMessage(callerId, { text: `Automatic Block System!!!\nDon't Call Bots!!!\nPlease Contact Owner to Open!!!`}, { quoted : qutsnya })
await sleep(8000)
await Kelvin.updateBlockStatus(callerId, "block")
}
})

Kelvin.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!Kelvin.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(Kelvin, kay, store)
require('./XeonCheems8.js')(Kelvin, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

Kelvin.public = true

store.bind(Kelvin.ev);
Kelvin.ev.on("creds.update", saveCreds);
Kelvin.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to DARE-V3..")
}
/*console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 30 detik\nBot akan Mengirim lagi Jika Qr Expire', m)*/
if (connection == "open") {
Kelvin.id = Kelvin.decodeJid(Kelvin.user.id)
Kelvin.time = Date.now()
global.conns.push(Kelvin)
await m.reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× id : ${Kelvin.decodeJid(Kelvin.user.id)}*_`)
user = `${Kelvin.decodeJid(Kelvin.user.id)}`
txt = `*Terdeteksi menumpang Jadibot*\n\n _ User : @${user.split("@")[0]}_`
sendMessage(`1234483@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); Kelvin.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); Kelvin.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Kelvince Logged Out, Please Scan Again And Run.`); Kelvin.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else Kelvin.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

Kelvin.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Kelvin.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Kelvin.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Kelvin.getName = (jid, withoutContact  = false) => {
id = Kelvin.decodeJid(jid)
withoutContact = Kelvin.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Kelvin.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Kelvin.decodeJid(Kelvin.user.id) ?
Kelvin.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Kelvin.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Kelvin.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Kelvin.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Kelvin.getName(i + '@s.whatsapp.net')}\n
FN:${await Kelvin.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
Kelvin.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

Kelvin.setStatus = (status) => {
Kelvin.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Kelvin.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Kelvin.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Kelvin.sendText = (jid, text, quoted = '', options) => Kelvin.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadibot, conns }
