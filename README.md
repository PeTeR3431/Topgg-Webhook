<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Topgg Webhook with Rewards</h1>

<p>This Bot is designed to reward users who vote for your bot on top.gg. By integrating the top.gg API and Discord.js library, It tracks user votes, sends a webhook notification, and grants a special role to the voter in your Discord server. The rewarded role is held for a specified duration, enhancing user engagement and appreciation.</p>

<h2>Features:</h2>

<ul>
  <li><strong>Vote Tracking:</strong> MusicoBot monitors user votes on top.gg through a webhook, keeping track of each user's voting history.</li>
  <li><strong>Webhook Notifications:</strong> Receive real-time notifications on Discord when a user votes for your bot. The notifications include details such as the voter's username, vote count, and a customizable embed.</li>
  <li><strong>Role Rewards:</strong> Reward voters with a special Discord role, enhancing their status in the server. The role is automatically added upon voting and removed after a specified duration.</li>
  <li><strong>Persistent Data:</strong> Store and manage voting data in a JSON file, ensuring persistence across bot restarts.</li>
</ul>

<h2>Setup Guide</h2>

<h3>Prerequisites:</h3>

<ol>
  <li><strong>Node.js:</strong> Ensure you have Node.js installed on your machine. You can download it from <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a>.</li>
  <li><strong>Discord Bot Token:</strong> Create a new Discord bot on the <a href="https://discord.com/developers/applications" target="_blank">Discord Developer Portal</a> and obtain the bot token.</li>
  
</ol>

<h3>Installation:</h3>

<ol>
  <li><strong>Clone the repository:</strong></li>
  <pre><code>git clone https://github.com/your-username/MusicoBot.git</code></pre>

  <li><strong>Navigate to the project directory:</strong></li>
  <pre><code>cd Topgg-Webhook</code></pre>

  <li><strong>Install dependencies:</strong></li>
  <pre><code>npm install</code></pre>

  <li><strong>Configure the bot:</strong></li>
  <p>Create a <code>config.json</code> file in the project root and add the following:</p>
  <pre><code>{
  "discordToken": "YOUR_DISCORD_BOT_TOKEN",
  "topggApiKey": "YOUR_TOPGG_API_KEY",
  "guildId": "YOUR_DISCORD_GUILD_ID",
  "webhookId": "YOUR_DISCORD_WEBHOOK_ID",
  "webhookToken": "YOUR_DISCORD_WEBHOOK_TOKEN"
}</code></pre>
  <p>Replace placeholders with your actual Discord bot token, top.gg API key, Discord guild ID, webhook ID, and webhook token.</p>

  <li><strong>Run the bot:</strong></li>
  <pre><code>node index.js</code></pre>
</ol>

<h2>Contributing</h2>

<p>Contributions are welcome! If you find any issues, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.</p>

<h2>License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE.md" target="_blank">LICENSE.md</a> file for details.</p>

</body>
</html>
