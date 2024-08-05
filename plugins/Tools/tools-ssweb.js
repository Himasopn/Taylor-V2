import axios from "axios";
import { tools } from "../../lib/scraper/all/tools.js";

const handler = async (m, { text, usedPrefix, command, conn }) => {
  const versions = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"];
  let [input, version] = text.split(" ");
  const linkRegex = /^(https?:\/\/[^\s]+)/;

  if (!input) 
    return m.reply(`📎 *Masukkan tautan!* \n\n*Contoh Penggunaan:*\n${usedPrefix + command} https://google.com v2`);
  
  try {
    new URL(input).hostname;
  } catch {
    input = `https://${input}`;
  }

  if (!linkRegex.test(input)) 
    return m.reply(`📎 *Tautan tidak valid!* \n\n*Contoh Penggunaan:*\n${usedPrefix + command} https://google.com v2`);

  if (!version) {
    const buttons = conn.ctaButton
      .setBody(`📋 *Tautan Screenshot:*\n- ${input}\n*Pilih versi screenshot:*`)
      .addSelection("🔍 Pilih versi")
      .makeSections("🔢 Daftar Versi", "Pilih versi");

    versions.forEach((v, i) => 
      buttons.makeRow("", `Versi ${i + 1}`, "Pilih: " + v.toUpperCase(), `${usedPrefix}${command} ${input} ${v}`)
    );

    return buttons.run(m.chat, conn, m);
  }

  if (!versions.includes(version.toLowerCase())) 
    return m.reply(`❌ *Versi tidak valid!* \n\n*Contoh:* \n${usedPrefix + command} https://example.com v2\n\n*Pilih versi yang ada:* \n(v1 hingga v${versions.length})`);

  try {
    m.react(wait);
    let res = await getScreenshot(input, version);

    if (!Buffer.isBuffer(res) && typeof res === "string" && /^https?:\/\//.test(res)) 
      res = await getBuffer(res);

    const caption = `✨ *Screenshot berhasil!*\n- ${input}\n\n*Request:* \n- @${m.sender.split("@")[0]}`;
    await conn.sendMessage(m.chat, { image: res, caption, mentions: [m.sender] }, { quoted: m });

    m.react(sukses);
  } catch (e) {
    console.log(e.message);
    m.react(eror);
  }
};

handler.help = ["ss", "ssf", "ssweb"];
handler.tags = ["tools"];
handler.command = /^ss(web|f)?$/i;

export default handler;

async function getScreenshot(url, version) {
  try {
    const encodedUrl = encodeURIComponent(url);
    switch (version.toLowerCase()) {
      case "v1":
        return `https://webss.yasirweb.eu.org/api/screenshot?resX=1280&resY=900&outFormat=jpg&waitTime=1000&isFullPage=true&dismissModals=false&url=${encodedUrl}`;
      case "v2":
        return `https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=${encodedUrl}`;
      case "v3":
        return `https://image.thum.io/get/fullpage/${encodedUrl}`;
      case "v4":
        return `https://mini.s-shot.ru/2560x1600/PNG/2560/Z100/?${encodedUrl}`;
      case "v5":
        return await ssweb(url, "full", "desktop");
      case "v6":
        return await pikwy(url);
      case "v7":
        return (await tools.ssweb(url))?.data;
      case "v8":
        return `https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=${encodedUrl}`;
      case "v9":
        return `https://2wg20nrbv4.execute-api.eu-west-1.amazonaws.com/default/screenshot?url=${encodedUrl}`;
      case "v10":
        return await googleApis(url);
      default:
        throw new Error("Versi tidak valid");
    }
  } catch {
    throw new Error("Gagal mengambil screenshot");
  }
}

async function getBuffer(url) {
  try {
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(data, "binary");
  } catch {
    throw new Error("Gagal mengonversi tautan menjadi buffer");
  }
}

async function ssweb(url = "", full = false, type = "desktop") {
  try {
    const form = new URLSearchParams({ url, device: type.toLowerCase(), cacheLimit: 0 });
    if (full) form.append("full", "on");
    const { headers, data } = await axios.post("https://www.screenshotmachine.com/capture.php", form);
    const cookies = headers["set-cookie"];
    const { data: bufferData } = await axios.get(`https://www.screenshotmachine.com/${data.link}`, {
      headers: { cookie: cookies.join("") },
      responseType: "arraybuffer"
    });
    return Buffer.from(bufferData);
  } catch {
    throw new Error("Gagal mengambil screenshot dari ssweb");
  }
}

async function pikwy(url) {
  try {
    const { data } = await axios.get(`https://api.pikwy.com/?tkn=125&d=3000&u=${url}&fs=0&w=1920&h=1080&f=png&rt=jweb`);
    return data?.iurl;
  } catch {
    throw new Error("Gagal mengambil screenshot dari pikwy");
  }
}

async function googleApis(url) {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?screenshot=true&url=${url}`);
    const dataURL = data.lighthouseResult?.fullPageScreenshot?.screenshot?.data;
    const base64Data = dataURL?.replace(/^data:image\/webp;base64,/, "");
    return base64Data ? Buffer.from(base64Data, "base64") : null;
  } catch {
    throw new Error("Gagal mengambil screenshot dari Google APIs");
  }
}
