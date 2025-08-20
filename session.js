//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtrSEJ1UjNsUWRRQW1LUUhYT210V1NLUlVIcEt6Uy9CdW1SQ0syV1VWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhrWEpHRkhkU0REMEN6dlZQQndYM20wOEJQVnUzN05ob3NmOVVPRTZUZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QjRNdW1hSGdJNVZvbEtOSiswa0taRzFNT2JZU0lzNzVVS0lBTDROOEZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQT0pqL0dNcEZlZnN4a0txcVlwWUI1TjZvSmJHakVTcnhkWGluRDBoTEZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QVnZoRWFoYU5CRnBycjhEdis3blNnWmc4bWJyVE44RGNtbVN4alg0V0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx1dWh0UlVLVVRUNFFGemU2L2MrTnRmVGpzZmxIRHVGNUtHVUQ0bTNHM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFaSWcxT3lwaDByTVdKTXM0OS9jVlV5NDAvbjdPL0VGa2N1TTlEdEprTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlILzdHZkhZZEdwOWlIVTRZSTFiT0ljNU83dnI1OUNtSC93cXRUenZnQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxuMnRRNmp0OWxpM0R5TzRLM2FpUmdYblhHNnhHajA4Q1VuVUlkeVJneC9kV1R6a2NLRGVBek9WaEFLNzc0cm9SOGh2K3ZZOUE2bGFsWkJZdGIxZGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJwRHVRQTFoQSt3N0NreHdycWtXTjBXRmkrdlFuTU9XQWdnK0lQSXNMZTFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzUTExQUE4X1FubUxUdGxsclJMc1ZRIiwicGhvbmVJZCI6ImQyZTkyZjA4LTBhOTgtNGMzYS1iZTExLTlmN2E1NjcwMWM1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWnJOWWVJOTlEVGRZR0Q2RUdldUxjTDFiRUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREJRamRFdStkdnQ3aXRNdHE4ZkFpR3JZaWF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhXTUwzWENHIiwibWUiOnsiaWQiOiI5NDc0MjgzOTkyNjo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA0NTQ0MTkzNjA1Njg3OjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbStzVmNRb0w2VnhRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDS3QwcUNZekYwbUtUbGJ2UkdTdTNuUkhjL1hTaFFxWFVmOWpHcmtEbVVnPSIsImFjY291bnRTaWduYXR1cmUiOiJsd2NPSWsrRlAxaFhBM3ZvdFBQaDVxcjJYbEhzMmVleDJMU2lza2kyVk5mR0lDT2x3WngwTkNTdExNaVczeEFYVC9TbzVySzBYcXNRdTRUeVBlZ0FBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN2J0RW5JanFQby8yQnBPTS9JaTAwY3RWQ2pJaTM4QWRmd0xiZzZLOXlpRlpOT0hHUjZvd2JMbmExelhYSy9PUi9Wai9tQlBVNHF5ZVF3eTZCOUpHZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MjgzOTkyNjo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFpcmRLZ21NeGRKaWs1VzcwUmtydDUwUjNQMTBvVUtsMUgvWXhxNUE1bEkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTY2ODI2OSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQUkifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
