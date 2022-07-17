let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "📊Test Speed", rowId: '.testspeed', description: 'Test Speed' },
	    {title: "📉Stats Server", rowId: '.statserver', description: 'Status server' },
	{title: "👤Owner", rowId: '.owner', description: 'Owner Fangz BOT' },
	{title: "💰Donasi", rowId: '.donasi', description: 'Support Fangz' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📖Rules", rowId: '.rules', description: 'S&K Fangz BOT' },
	    {title: "⛔", rowId: 'huuu', description: 'No menu' },
	{title: "⚡Speed", rowId: '.speed', description: 'Speed Fangz BOT' },
	{title: "💰Sewa BOT", rowId: '.sewa', description: 'Sewa Fangz BOT' },
	{title: "🗣️Request Fitur", rowId: '.request', description: 'Request Fitur Fangz BOT' },
	{title: "🌏Lokasi BOT", rowId: '.loc2', description: 'Lokasi Fangz BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
