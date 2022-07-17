let handler = async (m, { conn }) => {
let info = `
*${htki} DONASI ${htka}*

2022 FangzBot Official 
`
const sections = [
   {
	title: `METODE`,
	rows: [
	    {title: "?Dana", rowId: '.donasidana', description: 'Bayar melalui Dana' },
	    {title: "?Gopay", rowId: '.donasigopay', description: 'Bayar melalui Gopay' },
	{title: "?Ovo", rowId: '.donasiovo', description: 'Bayar melalui Ovo' },
	{title: "?Motion Pay", rowId: '.donasimotionpay', description: 'Bayar melalui Motion Pay' },
	{title: "?Pulsa Smartfren", rowId: '.donasismartfren', description: 'Bayar melalui pulsa' },
	{title: "?Pulsa Tri3", rowId: '.donasiastri', description: 'Bayar melalui pulsa' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "DONASI",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.private = true

export default handler
