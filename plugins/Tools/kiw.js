import fetch from "node-fetch";
import yts from "yt-search";

const kiw = async (m, { conn, text }) => {
  try {
    const pushname = m.sender.pushname;
    const teks = !text ? m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.play not you*`) : null;

    const res = await yts(text);
    const url = res.all;
    const result = url[Math.floor(Math.random() * url.length)];

    const captionText = `⏩ *PLAYING AUDIO*\n\n> *Judul : ${result.title}*\n> *Upload : ${result.ago}*\n> *Url : ${result.url}*\n> *RequestBy : ${pushname}*\n\n📦 *AUDIO SEDANG DIPROSES....*`;

    conn.sendMessage(m.chat, { image: { url: result.thumbnail }, caption: captionText }, { quoted: m });

    const shanz = await fetch(`https://api.shannmoderz.xyz/downloader/ytdl?url=${result.url}`);
    const data = await shanz.json();
    const finish = data.result.audio;

    conn.sendMessage(m.chat, { audio: { url: finish['128'].url }, mimetype: 'audio/mp4' }, { quoted: m });

  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan. Mohon coba lagi.');
  }
};

kiw.command = kiw.help = ["kiw"];
kiw.tags = ["downloader"];

export default kiw;