function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
import fetch from "node-fetch";
const handler = async (m, {
  conn,
  command,
  args,
  usedPrefix,
  DevMode
}) => {
  if (!1 === db.data.chats[m.chat].nsfw && m.isGroup) return await conn.reply(m.chat, "❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ", m);
  let type = (args[0] || "").toLowerCase(),
    _type = (args[0] || "").toLowerCase(),
    ch = db.data.chats[m.chat].premnsfw,
    res = "https://api.lolhuman.xyz/api/random/nsfw/",
    api = `?apikey=${Object.entries(APIKeys).find(([key]) => key.includes('lolhuman'))?.[1]}`,
    resl = "https://api.lolhuman.xyz/api/random2/",
    apil = `?apikey=${Object.entries(APIKeys).find(([key]) => key.includes('lolhuman'))?.[1]}`,
    ass = !0 !== ch,
    blowjob = !0 !== ch,
    cums = !0 !== ch,
    ecchi = !0 !== ch,
    eroyuri = !0 !== ch,
    feet = !0 !== ch,
    femdom = !0 !== ch,
    futanari = !0 !== ch,
    girlsolo = !0 !== ch,
    hentai = !0 !== ch,
    jahy = !0 !== ch,
    kitsune = !0 !== ch,
    kuni = !0 !== ch,
    loli = !0 !== ch,
    manga = !0 !== ch,
    pussy = !0 !== ch,
    oppai = !0 !== ch,
    spank = !0 !== ch,
    tits = !0 !== ch,
    trap = !0 !== ch,
    waifu = !0 !== ch,
    yaoi = !0 !== ch,
    yuri = !0 !== ch,
    txtprem = (botdate, "❗ ɴsғᴡ ɪɴɪ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ\nʜᴀʀᴀᴘ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ! 📞"),
    p = "🅟 | ",
    f = "Ⓕ | ";
  !!args[0] && args[0]?.capitalize();
  const sections = [{
      title: `${htki} N S F W ${htka}`,
      rows: [{
        title: `${f}A • Ahegao`,
        id: ".nsfw ahegao"
      }, {
        title: `${f}A • Anal`,
        id: ".nsfw anal"
      }, {
        title: `${!0 === ass ? p : f}A • Ass`,
        id: ".nsfw ass"
      }, {
        title: `${!0 === blowjob ? p : f}B • BlowJob`,
        id: ".nsfw blowjob"
      }, {
        title: `${!0 === cums ? p : f}C • Cumsluts`,
        id: ".nsfw cums"
      }, {
        title: `${!0 === ecchi ? p : f}E • Ecchi`,
        id: ".nsfw ecchi"
      }, {
        title: `${f}E • Ero`,
        id: ".nsfw ero"
      }, {
        title: `${f}E • Ero Feet`,
        id: ".nsfw erofeet"
      }, {
        title: `${f}E • Ero Girl`,
        id: ".nsfw erogirl"
      }, {
        title: `${f}E • Ero Holo`,
        id: ".nsfw holoero"
      }, {
        title: `${f}E • Ero Kitsune`,
        id: ".nsfw erokitsune"
      }, {
        title: `${f}E • Ero Neko`,
        id: ".nsfw eroneko"
      }, {
        title: `${1 == eroyuri ? p : f}E • Ero Yuri`,
        id: ".nsfw eroyuri"
      }, {
        title: `${!0 === feet ? p : f}F • Feet`,
        id: ".nsfw feet"
      }, {
        title: `${!0 === femdom ? p : f}F • Femdom`,
        id: ".nsfw femdom"
      }, {
        title: `${!0 === futanari ? p : f}F • Futanari`,
        id: ".nsfw futanari"
      }, {
        title: `${!0 === girlsolo ? p : f}G • Girl Solo`,
        id: ".nsfw girlsolo"
      }, {
        title: `${!0 === hentai ? p : f}H • Hentai`,
        id: ".nsfw hentai"
      }, {
        title: `${f}H • Holo`,
        id: ".nsfw holo"
      }, {
        title: `${!0 === jahy ? p : f}J • Jahy`,
        id: ".nsfw jahy"
      }, {
        title: `${!0 === kitsune ? p : f}K • Kitsune`,
        id: ".nsfw kitsune"
      }, {
        title: `${!0 === kuni ? p : f}K • Kuni`,
        id: ".nsfw kuni"
      }, {
        title: `${!0 === loli ? p : f}L • Loli`,
        id: ".nsfw loli"
      }, {
        title: `${1 == manga ? p : f}M • Manga`,
        id: ".nsfw manga"
      }, {
        title: `${f}M • Milf`,
        id: ".nsfw milf"
      }, {
        title: `${f}M • Mstrb`,
        id: ".nsfw mstrb"
      }, {
        title: `${f}N • Neko`,
        id: ".nsfw neko"
      }, {
        title: `${!0 === oppai ? p : f}O • Oppai`,
        id: ".nsfw oppai"
      }, {
        title: `${f}P • Panties`,
        id: ".nsfw panties"
      }, {
        title: `${!0 === pussy ? p : f}P • Pussy`,
        id: ".nsfw pussy"
      }, {
        title: `${!0 === spank ? p : f}S • Spank`,
        id: ".nsfw spank"
      }, {
        title: `${f}T • Tentacles`,
        id: ".nsfw tentacles"
      }, {
        title: `${f}T • Thighs`,
        id: ".nsfw thighs"
      }, {
        title: `${!0 === tits ? p : f}T • Tits`,
        id: ".nsfw tits"
      }, {
        title: `${!0 === trap ? p : f}T • Trap`,
        id: ".nsfw trap"
      }, {
        title: `${f}U • Uniform`,
        id: ".nsfw uniform"
      }, {
        title: `${!0 === waifu ? p : f}W • Waifu`,
        id: ".nsfw waifu"
      }, {
        title: `${!0 === yaoi ? p : f}Y • Yaoi`,
        id: ".nsfw yaoi"
      }, {
        title: `${!0 === yuri ? p : f}Y • Yuri`,
        id: ".nsfw yuri"
      }]
    }],
    listMessage = {
      text: `┊ 📮 Silahkan Pilih Dibawah!\n┊› Atau ketik ${usedPrefix}nsfw neko\n❏──···––`,
      footer: "┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•",
      title: "❏––––[ *NSFW* ]–––",
      buttonText: "- -NSFW- -",
      sections: sections
    };
  try {
    if (/(nsfw)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count);
      switch (type) {
        case "anal":
          0, await conn.sendFile(m.chat, await (await fetch(resl + "anal" + apil)).arrayBuffer(), m);
          break;
        case "blowjob":
          if (!0 === blowjob && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          let bj = await (await fetch("https://api.waifu.pics/nsfw/blowjob")).json();
          await conn.sendFile(m.chat, bj.url, m);
          break;
        case "cums":
          if (!0 === cums && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(resl + "cum" + apil)).arrayBuffer(), m);
          break;
        case "ecchi":
          if (!0 === ecchi && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "ecchi" + api)).arrayBuffer(), m);
          break;
        case "erofeet":
          0, await conn.sendFile(m.chat, await (await fetch(res + "feet" + api)).arrayBuffer(), m);
          break;
        case "erogirl":
          0, await conn.sendFile(m.chat, await (await fetch(res + "lewdanimegirls" + api)).arrayBuffer(), m);
          break;
        case "holoero":
          0, await conn.sendFile(m.chat, await (await fetch(res + "holo" + api)).arrayBuffer(), m);
          break;
        case "erokitsune":
          0, await conn.sendFile(m.chat, await (await fetch(resl + "erok" + apil)).arrayBuffer(), m);
          break;
        case "eroneko":
          0, await conn.sendFile(m.chat, await (await fetch(resl + "eron" + apil)).arrayBuffer(), m);
          break;
        case "eroyuri":
          if (!0 === eroyuri && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "eroYuri" + api)).arrayBuffer(), m);
          break;
        case "feet":
          if (!0 === feet && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "feet" + api)).arrayBuffer(), m);
          break;
        case "femdom":
          if (!0 === femdom && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "femdom" + api)).arrayBuffer(), m);
          break;
        case "futanari":
          if (!0 === futanari && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "futanari" + api)).arrayBuffer(), m);
          break;
        case "girlsolo":
          if (!0 === girlsolo && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(resl + "solo" + apil)).arrayBuffer(), m);
          break;
        case "holo":
          0, await conn.sendFile(m.chat, await (await fetch(res + "hololewd" + api)).arrayBuffer(), m);
          break;
        case "kitsune":
          if (!0 === kitsune && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "kitsune" + api)).arrayBuffer(), m);
          break;
        case "kuni":
          if (!0 === kuni && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(resl + "kuni" + apil)).arrayBuffer(), m);
          break;
        case "loli":
          if (!0 === loli && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "loli" + api)).arrayBuffer(), m);
          break;
        case "milf":
          0, await conn.sendFile(m.chat, await (await fetch(res + "milf" + api)).arrayBuffer(), m);
          break;
        case "oppai":
          if (!0 === oppai && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "sideoppai" + api)).arrayBuffer(), m);
          break;
        case "spank":
          if (!0 === spank && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "spank" + api)).arrayBuffer(), m);
          break;
        case "tits":
          if (!0 === tits && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "tits" + api)).arrayBuffer(), m);
          break;
        case "trap":
          if (!0 === trap && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          let tr = await (await fetch("https://api.waifu.pics/nsfw/trap")).json();
          await conn.sendFile(m.chat, tr.url, m);
          break;
        case "waifu":
          if (!0 === waifu && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          let wf = await (await fetch("https://api.waifu.pics/nsfw/waifu")).json();
          await conn.sendFile(m.chat, wf.url, m);
          break;
        case "yaoi":
          if (!0 === yuri && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "yaoi" + api)).arrayBuffer(), m);
          break;
        case "yuri":
          if (!0 === yuri && db.data.users[m.sender].premiumTime < 1) return await conn.reply(m.chat, txtprem, m);
          await conn.sendFile(m.chat, await (await fetch(res + "yuri" + api)).arrayBuffer(), m);
          break;
        default:
          return await conn.sendButtonCta(m.chat, [
            [listMessage.text, listMessage.footer, null, [], null, null, [
              [listMessage.buttonText, sections]
            ]]
          ], m);
      }
    } else if (/hentong/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count);
      switch (_type) {
        case "A":
        case "":
          break;
        default:
          return await conn.reply(m.chat, caption, m);
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack);
  }
};
handler.help = ["nsfw <type>"], handler.tags = ["nsfw", "premium"], handler.command = /^(nsfw)/i;
export default handler;