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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZTZ0lFY0k2Rm80U1ZUcVFxSUdXQ2NEK2NYNTc3ZXdnMnNyTlgwcTkyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREp4MnNFOVQ2a3hBVEREM2FLRzFla3o5QlhuN1FWaUlWUS82cjQrMW8yUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRi9DSnF2c01FcnJRSEtSQUNZc1JYUFNDTGdyeFhPVms1QVJaMDQwcVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeDJjWW9hb001bGt5SHhkY3VYalYvcFo0YnhDTisvQytwN3BBSndRbER3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRQaDVFL0E3azB3bjBoTEU2T1JXUjRFZjk1Qm5XSUhacnpWTi9KTktIM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink0OGd6c0pRQUJqeHRvVGR1dS9NdFBoRTJSekxYZmMweWV4b211UFpJR3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ppZWFZSnV3SVIrNnRZSTNtMEtsaEdjVTdVR0g5NjMwYm9oOHdMYW9FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmt0dnN0SDNWVitqbUNQaDZORGhjaEZobktLM0hoWTk1V01qdXFGeVdtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRmMmpUYzhTWmhEZHNnMU5uUGczbWplUzdqVCtVMEhDMlV5dzhsMVMzbmRyQ3JuZkhGMHBIRGhGR0RQS3lZWmREeUhOdVdGVzVBUmtqcjlDNkc0VGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJBSjVPRTZwOVY3aVZyOHVPTlMwRDNWckRnTDBBc2JYT3dYd0M2dTJxWnBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3RWdVUF96YVJsT1VYZ3JvQWtrNDRBIiwicGhvbmVJZCI6IjFkODJmNTEwLWUzZmUtNDk2OC04MzQ5LTcxNGY0Y2Q2YWQxMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbHY1aFFLTSswVWFTMTY5eXpjUXk2QTFIMjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXg5bGNydnFKWWJZZHA1SWRpeUpYbEsrMktjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkIyUzZYOE42IiwibWUiOnsiaWQiOiI5NDc1NjM5MjI2MDoxNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJrLmkiLCJsaWQiOiIxMzA0NjQ1MTM3OTgyNzU6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZTl3b1lERUpuTmxjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSWkxmR1V4bnlvOWVIQlZGcENJRk50TjlhRTdoOVFFcG1DSDVYTDVrY0RNPSIsImFjY291bnRTaWduYXR1cmUiOiI5VndLS2JHb1Z6NHFQdXRZM25mQnREN3ozc2RqN1hIWXVVWWwyVExnMGI5ajhxcDdvbjMwZU5yYjdRdjk0N1cxZUtDdzBhb0VlWEpkdVJ1d0dLYVVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOXowTmE4cmNIMTRJL0JaUkx0RFZML21vczhaZHRzT0g0UVA2eXhXQzIzQ1Vuc3BtTU5kOTZiKzhERnI3M21NQkVHaG82d0NISXFVK3dPVDljN05iaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NjM5MjI2MDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVV1MzeGxNWjhxUFhod1ZSYVFpQlRiVGZXaE80ZlVCS1pnaCtWeStaSEF6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NzAxODQsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdzcifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DI
};
