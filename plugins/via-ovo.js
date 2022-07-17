let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Ovo
📞 Nomor: 088215689772
👤 A/n: Fangz
📝 Mitra: Fangz BOT
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/ff71853efeb006d635a90.jpg'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['ovo']
handler.tags = ['info']
handler.command = /^(donasiovo)$/i
handler.private = true

export default handler