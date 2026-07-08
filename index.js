
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} đã online!`);
});

client.login("DÁN_TOKEN_CỦA_BẠN_VÀO_ĐÂY");
