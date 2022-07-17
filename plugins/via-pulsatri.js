let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} TRI3 ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Pulsa Tri3
📞 Nomor: 0895394988123
👤 A/n: Fangz
📝 Mitra: Fangz BOT
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
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
handler.help = ['tri']
handler.tags = ['info']
handler.command = /^(donasitri)$/i
handler.private = true

export default handler