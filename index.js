const express = require('express');
const { Webhook } = require('@top-gg/sdk');
const Discord = require('discord.js');
const { WebhookClient } = require('discord.js');
const fs = require('fs').promises;
const path = require('path');
const schedule = require('node-schedule');

const web = new WebhookClient({ id: 'WEBHOOK_ID', token: 'WEBHOOK_TOKEN' });
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMembers] });

client.login('YOUR_BOT_TOKEN');

const app = express();
const webhook = new Webhook('YOUR_PASSWORD');


let votesData = {
  users: {} 
};
const votesFilePath = path.join(__dirname, 'votes.json');

async function loadVotes() {
  try {
    const data = await fs.readFile(votesFilePath, 'utf8');
    votesData = JSON.parse(data);

    
    if (!votesData.users) {
      votesData.users = {};
    }
  } catch (error) {
    console.error('Error loading votes:', error);
  }
}

loadVotes();

app.post('/votes', webhook.listener(async (vote) => {
  console.log(vote);

  const userId = vote.user;
  const user = await client.users.fetch(userId);
  console.log(user);

  
  const embed = new Discord.EmbedBuilder()
    .setThumbnail(user.displayAvatarURL())
    .setAuthor({ name: `New Vote Added!`, iconURL: user.displayAvatarURL({ dynamic: true }) })
    .setColor('#7742DF');

  
  try {
    await fs.writeFile(votesFilePath, JSON.stringify(votesData, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving votes:', error);
  }

 
  if (!votesData.users[userId]) {
    votesData.users[userId] = 0;
  }

  votesData.users[userId]++;

  const roleId = 'ROLE_ID'; 
  const durationInHours = 12;

 
  const guildId = 'GUILD_ID'; 
  const guild = await client.guilds.fetch(guildId);

  const member = await guild.members.fetch(userId).catch(() => null);

  if (!member) {
    console.log(`User ${userId} is not in the server.`);
    embed.setDescription(`\`${user.username}\` just voted for **MusicoBot**. \`${user.username}\` now has total **${votesData.users[userId]}** vote(s). You have been rewarded a <@&1185573321778135072> role..`);


   
    embed.setTimestamp();
    return web.send({ embeds: [embed] });
  }

  
  const role = guild.roles.cache.get(roleId);

  if (role && member) {
    await member.roles.add(role);

   
    schedule.scheduleJob(new Date(Date.now() + durationInHours * 60 * 60 * 1000), async () => {
      await member.roles.remove(role);
      console.log(`Role removed from ${member.user.tag} after ${durationInHours} hours.`);
    });

   
    embed.setDescription(`\`${user.username}\` just voted for **MusicoBot**. \`${user.username}\` now has total **${votesData.users[userId]}** vote(s). You have been rewarded a <@&1185573321778135072> role..`);
  }

  
  embed.setTimestamp();
  web.send({ embeds: [embed] });
}));

app.listen(3000, () => {
  console.log('Your app is ready to log votes!');
});
