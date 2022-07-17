let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Ovo
📞 Nomor: 088215689772
👤 A/n: Fangz
📦 Mitra: Fangz BOT
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Beli*

Apk TokoBot: https://app.bukaolshop.com/toko/tokobot

Apk FangzApp:https://web.jagel.id/store/fangzapp

Toko Website:https://toko.ly/TokoBot   (Non apk)

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
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
handler.command = /^ovo$/i
handler.private = true

export default handler