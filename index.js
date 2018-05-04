const Discord = require("discord.js")
const client = new Discord.Client()
const ms = require("ms")
const moment = require("moment");
client.login(process.env.TOKEN)

var prefix = "d!";

client.on('ready', () =>  {
    console.log("Je suis connecté !")
     client.user.setActivity("d!help | © 🌺🍃FroGroZe🍃🌺#6893 | "+ client.guilds.size + " Serveurs, " + client.users.size + "  Utilisateurs")
  });

  client.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "bienvenue-bye");
    if (!bvn) return;
    const embed = new Discord.RichEmbed()
      .setColor('#009114')
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle("Arrivée d'un nouvel utilisateur")
      .addField("Un nouvel utilisateur vient d'arriver", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
      .setDescription("J'espère que tu t'y plairas")
      .addField("Ma commande est `d!help`", "Si tu souhaites savoir mon fonctionnement")
      .addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
      .setFooter(`ID : ${member.user.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
bvn.send({embed})
});

client.on("guildMemberAdd", member => {
    const logs = member.guild.channels.find(m => m.name === "logs-douzii");
    if (!logs) return;
const embed = new Discord.RichEmbed()
  .setColor('#FE6F01')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Arrivée d'un nouvel utilisateur")
  .addField("Un nouvel utilisateur vient d'arriver", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
  .addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
  .setTimestamp()
logs.send({embed})
});

client.on("guildMemberRemove", member => {
    const bye = member.guild.channels.find(m => m.name === "bienvenue-bye");
    if(!bye) return;
    const embed = new Discord.RichEmbed()
    .setColor('#9F0000')
    .setAuthor(member.user.tag, member.user.avatarURL)
    .setTitle("Départ d'un utilisateur")
    .addField("Il s'agit de", `[${member.user.tag}](https://discordapp.com/)`, true)
    .addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)
    .setFooter(`ID : ${member.user.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
    .setTimestamp()
    bye.send({embed})
    });

client.on("guildMemberRemove", member => {
    const logs = member.guild.channels.find(m => m.name === "logs-douzii");
    if (!logs) return;
const embed = new Discord.RichEmbed()
.setColor('#FE6F01')
.setAuthor(member.user.tag, member.user.avatarURL)
.setTitle("Départ d'un utilisateur")
.addField("Il s'agit de", `[${member.user.tag}](https://discordapp.com/)`, true)
.addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)
.setFooter(`ID : ${member.user.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
.setTimestamp()
logs.send({embed})
});

client.on("channelCreate", channel => {
  if(!channel.guild) return;
  const logs = channel.guild.channels.find(m => m.name === "logs-douzii");
  if (!logs) return;
  const embed = new Discord.RichEmbed()
  .setColor('#FE6F01')
  .setAuthor(client.user.tag, client.user.avatarURL)
  .setTitle("Nouveau salon créé ! :white_check_mark:")
  .addField("Channel créé !",`Le nom : **${channel.name}**`)
  .addField(`Nombre de salons après l'ajout du salon **${channel.name}**`, channel.guild.channels.size)
  .setFooter(`ID : ${channel.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
  .setTimestamp()
  logs.send({embed})
});

client.on("channelDelete", channel => {
    const logs = channel.guild.channels.find(m => m.name === "logs-douzii");
    if (!logs) return;
const embed = new Discord.RichEmbed()
.setColor('#FE6F01')
.setAuthor(client.user.tag, client.user.avatarURL)
.setTitle("Un salon a été supprimé ! :white_check_mark:")
.addField("Salon supprimé !",`Son nom : **${channel.name}**`)
.addField(`Nombre de salons après la suppression du salon **${channel.name}**`, channel.guild.channels.size)
.setFooter(`ID : ${channel.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
.setTimestamp()
logs.send({embed})
});

client.on("roleCreate", role => {
    const logs = role.guild.channels.find(m => m.name === "logs-douzii");
    if (!logs) return;
const embed = new Discord.RichEmbed()
.setColor("#FE6F01")
.setAuthor(client.user.tag, client.user.avatarURL)
.setTitle("Un rôle a été créé ! :white_check_mark:")
.addField("Rôle créé !", `Son nom : **${role.name}**`)
.addField(`Nombre de rôles après l'ajout du rôle **${role.name}**`, role.guild.roles.size)
.setFooter(`ID : ${role.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
.setTimestamp()
logs.send({embed})
});

client.on("roleDelete", role => {
    const logs = role.guild.channels.find(m => m.name === "logs-douzii");
    if (!logs) return;
const embed = new Discord.RichEmbed()
.setColor("#FE6F01")
.setAuthor(client.user.tag, client.user.avatarURL)
.setTitle("Un rôle a été supprimé ! :white_check_mark:")
.addField("Rôle supprimé !", `Son nom : **${role.name}**`)
.addField(`Nombre de rôles après la supression du rôle **${role.name}**`, role.guild.roles.size)
.setFooter(`ID : ${role.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
.setTimestamp()
logs.send({embed})
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if(!newMessage.guild) return;
    const logs = newMessage.guild.channels.find(m => m.name === "logs-douzii");
    if (!newMessage.guild.channels.exists('name','logs-douzii')) return;
  newMessage.guild.channels.find("name", "logs-douzii")
    if (!logs) return console.log("Salon Logs absent!");
    if(oldMessage.author.bot || oldMessage.cleanContent === newMessage.cleanContent) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(newMessage.member.user.tag, newMessage.member.user.avatarURL)
    .setColor("#FE6F01")
    .setTitle("Un message a été modifié ! :white_check_mark:")
    .setDescription(`Le message de ${newMessage.author} a été modifié`)
    .addField("Message Avant", `${oldMessage.cleanContent}`)
    .addField("Message Après", `${newMessage.cleanContent}`)
    .setFooter(`ID : ${newMessage.member.user.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
    .setTimestamp()
    return logs.send({embed})
    });
client.on("messageDelete", (message) => {
  if (message.author.bot) return;
    const logs = message.guild.channels.find(m => m.name === "logs-douzii");
    if (!logs) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.member.user.tag, message.member.user.avatarURL)
    .setColor("#FE6F01")
    .setTitle("Un message a été supprimé ! :white_check_mark:")
    .setDescription(`Le message de ${message.author} a été supprimé`)
    .addField(`Message Supprimé`, `${message.cleanContent}`)
    .setFooter(`ID : ${message.author.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
    .setTimestamp()
    logs.send({embed})
  });

  client.on('guildBanAdd', (guild, user)=> {
      if(!guild) return;
      const logs = guild.channels.find(m => m.name === "logs-douzii");
      if (!guild.channels.exists('name','logs-douzii')) return;
      guild.channels.find("name", "logs-douzii")
      if (!logs) return;
      let embed = new Discord.RichEmbed()
      .setAuthor("Ban", user.avatarURL)
      .setColor("#FE6F01")
      .setTitle("Un utilisateur a été ban ! :white_check_mark:")
      .setDescription(`Utilisateur ban : ${user}`)
      .setThumbnail(user.avatarURL)
      .addField("Nombre de membres après le ban", guild.memberCount)
      .setFooter(`ID : ${user.id}`)
      .setTimestamp()
      logs.send({embed})
  })

  client.on('guildBanRemove', (guild, user)=> {
      if(!guild) return;
      const logs = guild.channels.find(m => m.name === "logs-douzii");
      if (!guild.channels.exists('name','logs-douzii')) return;
      guild.channels.find("name", "logs-douzii")
      if (!logs) return;
      let embed = new Discord.RichEmbed()
      .setAuthor("Unban", user.avatarURL)
      .setColor("#FE6F01")
      .setTitle("Un utilisateur a été unban ! :white_check_mark:")
      .setDescription(`Utilisateur unban : ${user}`)
      .setThumbnail(user.avatarURL)
      .addField("Nombre de membres", guild.memberCount)
      .setFooter(`ID : ${user.id}`)
      .setTimestamp()
      logs.send({embed})
  })

client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        message.delete(message.author)
        if (message.channel.type === "dm") return;
        
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
        
        var embed = new Discord.RichEmbed()
            .setColor('#C3FE01') 
            .setTitle(user.username)
            .setImage(user.avatarURL) 
            
        message.channel.send(embed);
        
    };

  if(message.content.startsWith(prefix + "date")) {
      var d = new Date()
      let embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor('#0BD9E8')
      .setTitle("__Voici la date actuelle__")
      .addField("Nous sommes le " + d, "Bonne journée")
      .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
          message.channel.send({embed})
  }
    
if(message.content.startsWith(prefix + "help")){
      if (message.channel.type === "dm") return;
        let embed = new Discord.RichEmbed()
        .setColor('#03FC03')
        .setAuthor(client.user.tag, client.user.avatarURL)
        .setTitle("__Voici la page d'aide de DouZii__:")
        .setThumbnail(message.author.avatarURL)
        .setDescription("__**DIVERS**__ : \n" +
            " `d!support` : *Te donne le serveur de mon créateur* :white_check_mark:\n" +
            " `d!invite` : *Te donne le lien pour minviter sur ton serveur* :white_check_mark:\n" +
            "`d!report` : *Pour faire un report au developpeur ( bug, abus, etc ... )*:white_check_mark:\n" +
            "`d!demande` : *Pour faire une demande au developpeur ( ajout de commandes, modifications, etc ... )*:white_check_mark:\n" +
            "`d!avis` : *Pour donner un avis sur le bot* :white_check_mark:")
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")){
          if (message.channel.type === "dm") return;
        let embed = new Discord.RichEmbed()
        .setColor('#FE6F01')
        .setDescription("__**MODERATION**__ : \n" +
            " `d!kick (@user)` : *Pour kick un joueur*:white_check_mark:\n" +
            "`d!ban (@user)` : *Pour ban une personne*:white_check_mark:\n" +
            "`d!purge ( 2 à 100 )` : *Pour purge des messages*:white_check_mark:\n" +
            "`logs ( sous activation par salon )` : *Permet de suivre les agissements des utilisateurs*:white_check_mark::regional_indicator_a::regional_indicator_e:\n" +
            "`d!afk` : *Permet de se mettre* **AFK**:hourglass:\n" +
            "`d!createrole [nom-du-role-à-créer]` : *Permet de créer un role* **||ALIASE :** `d!cr` **||**:white_check_mark:\n" +
            "`d!createchannel [nom-du-channel-à-créer]` : *Permet de créer un channel* **||ALIASE :** `d!cc` **||**:white_check_mark:\n" +
            "`d!giverole [@user] [nom-du-role]` : *Permet d'ajouter un rôle à un utilisateur* **||ALIASE :** `d!gr` **||**:white_check_mark:\n" +
            "`d!removerole [@user] [nom-du-role]` : *Permet de retirer un rôle à un utilisateur* **||ALIASE :** `d!rr` **||**:white_check_mark:\n" +
            "`d!mute [@user]` : *Permet de mute un utilisateur* **(pour mute un utilisateur en secondes, veuillez mettre [temps]s, en minutes [temps]m, en heures [temps]h.)**:white_check_mark:\n" +
            "`d!tempmute [@user] [temps]` : *Permet de mute un utilisateur temporairement ( en millisecondes )*:white_check_mark:\n" +
            "`d!unmute [@user]` : *Permet de unmute un utilisateur*:white_check_mark:\n")
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")){
          if (message.channel.type === "dm") return;
      let embed = new Discord.RichEmbed()
      .setColor('#C3FE01')
      .setDescription("__**FUN**__ : \n" +
      "`d!date` : *Te dit quel jour nous somme*:white_check_mark:\n" + 
      "`d!avatar` : *Te donne ton avatar*:white_check_mark:\n" + 
      "`d!userinfo(@user)` : *Affiche les infos de l'utilisateur mentionné* **|| ALIASE : **`d!ui`:white_check_mark:\n" +
      "`d!ping` : *Affiche le ping du bot*:white_check_mark:\n" +
      "`d!serveurinfo` : *Affiche les infos du serveur* **|| ALIASE :**`d!si` **||**:white_check_mark:\n" +
      "`d!botinfo` : *Pour voir les infos sur le bot* **|| ALIASE : **`d!bi` **||**:white_check_mark:\n" +
      "`d!sondage` : *Execute un sondage*:white_check_mark:\n" +
      "`d!8ball(question)` : *Poser une question et le bot répond*:white_check_mark: \n" +
      "`images aléatoires` : *Send plusieurs type d'images aléatoirement* :white_check_mark: :regional_indicator_e:\n" +
      "`nsfw` : *Voir du porno*:white_check_mark: :regional_indicator_a: :regional_indicator_e:\n" +
      "`d!vcs [message]` : *Envoie un message VCS*:white_check_mark: :regional_indicator_a: :regional_indicator_e:\n")
    message.author.send({embed});
      }
    
      if(message.content.startsWith(prefix + "help")) {
          if (message.channel.type === "dm") return;
          let embed = new Discord.RichEmbed()
          .setColor('#FE0101')
          .setDescription("__**ACTIVATIONS**__ (:regional_indicator_a:)\n" +
        "`logs` : *Créer un salon* ***#logs-douzii***\n" +
        "`Bienvenue-Bye` : *Se met dans un salon* ***#bienvenue-bye***\n" +
        "`nsfw` : *Créer un salon* ***#nsfw***\n" +
        "`d!vcs [message]` : *Créer un salon* ***#vcs-douzii***\n" + 
        "`info` : *Créer un salon* ***#infos-douzii***\n")
    message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")) {
          if (message.channel.type === "dm") return;
          let embed = new Discord.RichEmbed()
          .setColor('#DC009A')
          .setDescription("__**EXPLICATIONS**__ (:regional_indicator_e:)\n" +
        "`logs` : *MemberAdd, MemberRemove, MessageUpdate, MessageDelete, ChannelCreate, ChannelDelete, RoleCreate, RoleDelete*\n" +
        "`nsfw` : *4k, ass, boobs, fuck, suck, hentaiimg, hentaigif*\n" +
        "`images aléatoires` : *d!cat, d!dog, d!kiss (@user), d!punch (@user), d!slap (@user), d!hug(@user), d!bang (@user)*\n" +
        "`d!vcs [message]` : *Le vcs est une fonction inter-serveur, ce qui veut dire que quand vous envoyez un message **VCS**, le message sera reçu dans tout les serveurs où le salon ***#vcs-douzii*** sera créé\n" +
        "`info` : *Cette fonction permet d'avoir les nouveautés de douzii, un message sera envoyé dans le salon approprié ( expliqué dans la partie ACTIVATION )\n")
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")) {
          if (message.channel.type === "dm") return;
        let embed = new Discord.RichEmbed()
        .setColor('#0177FE')
        .setDescription("__**LEGENDE**__ : \n" +
        ":x: = **commande non disponible**\n" +
        ":white_check_mark: = **commande disponible**\n" +
        ":hourglass: = **commande en cours de developpement**\n" +
        ":regional_indicator_a: = **activations commandes**\n" +
        ":regional_indicator_e: = **explications commandes**")
        .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
        .setTimestamp()
      message.author.send({embed});
          message.reply(":point_right:help envoyé en MP:envelope_with_arrow:");
      }

    if(message.content.startsWith(prefix + "invite")) {
      let embed = new Discord.RichEmbed()
      .setColor('#03FC03')
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle("Invite moi")
      .addField(":notepad_spiral: Pour m'ajouter a votre serveur ", "[Cliquez ici](https://discordapp.com/oauth2/authorize?client_id=419142627087089695&scope=bot&permissions=2146958591)", true)
      .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
      message.channel.send({embed})
    }

    if(message.content.startsWith( prefix + "logout")){
      if(message.author.id == "307919815547551745"){
      message.channel.send("**:gear: Arrêt en cours...**").then(() => {
              console.log('Je suis off');
              client.destroy();
              process.exit()
      })
          } else {
          message.channel.send("Pour quoi vouloir m'éteindre ;-;")
        }
      }
    
    if(message.content.startsWith(prefix + "JMA")) {
        message.delete(message.author)
        let embed = new Discord.RichEmbed()
        .setColor("#C3FE01")
        .setAuthor("JEAN MICHEL AULAS")
        .setDescription("JEAAAAN MICHEL AULASSSSS, OHHH GROSSEEEEE PETASSEEEEE, ON VA TOUT CASSER CHEZ TOIIIIIII")
        .setImage("http://static.parisfans.fr/wp-content/uploads/2018/01/Jean-Michel-Aulas-qualifie-Al-Khelaifi-et-Desplat-de-peste-ou-cholera-et-se-defend-avec-lhumour.jpg")
        .setFooter("ALLEZ L'OM")
        .setTimestamp()
        message.channel.send(embed)
    }

        if(message.content.startsWith(prefix + "ping")){
          let startTime = Date.now();
          let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
          .setColor("#C3FE01")
          .setAuthor("Ping-Pong")
          .setTitle("__Voici le ping du bot__")
          .addField("Ping local:", `**:ping_pong: Ping = ${Math.round(Date.now() - startTime)} ms**`, true)
          .addField("API:", `**:ping_pong: Ping = ${Math.round(client.ping).toFixed(0)} ms**`, true)
          .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
          .setTimestamp()
              message.channel.send({embed})
      }
  
          if(message.content.startsWith(prefix + "botinfo") || message.content.startsWith(prefix + "bi")) {
              var g = (client.guilds.map(g => g.name))
          let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
          .setColor('#C3FE01')
          .setTitle("__Voici les infos sur le bot__")
          .addField(":crown: Createur", `🌺🍃FroGroZe🍃🌺#6893`)
          .addField(":speech_balloon:Channels", client.channels.size, true)
          .addField(":abcd:Username", client.user.username, true)
          .addField(":1234:Discriminator", client.user.discriminator, true)
          .addField(":clock5: Uptime", Math.round(client.uptime / (1000 * 60 * 60)) + " hours, " + Math.round(client.uptime / (1000 * 60)) % 60 + " minutes, and " + Math.round(client.uptime / 1000) % 60 + " seconds", true)
          .addField(":file_cabinet:Nombre de serveurs", client.guilds.size, true)
          .addField(":bust_in_silhouette: Nombre d'utilisateurs", client.users.size, true)
          .addField(":ab:Noms des serveurs où le bot est présent", client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
          .setTimestamp()
          .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
          message.channel.send({embed})
      }

  if(message.content.startsWith(prefix + "purge")){
      let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
      let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
  
      if (!myrole) {
          return message.channel.send(":no_entry:**Je n'ai pas les permissions nécessaires pour effacer un/des message(s)**");
      }
  
      if (!yourole) {
          return message.channel.send(":no_entry:**Vous n'avez pas les permissions nécessaires**");
      }
  
      var suppression = message.content.substr(8);
      if (suppression < 2 || suppression > 101) {
          return message.reply(":warning:**La valeur que vous avez entré est invalide, merci de choisir une valeur comprise entre 2 et 100**");
      }
      message.channel.bulkDelete(suppression, true).then(ok => {
          message.reply("**Suppression de " + "" + suppression + "" + " messages**")
          .then(message => setTimeout(function(){message.delete()}, 1000))
          .catch(err => console.log(err));
      
  })
  }

  if(message.content.startsWith(prefix + "samerelapute")){
  if (message.author.id != '293068377805684746') {message.reply("**Il n'y a que @๖̶̶̶ۣۣۜۜ͜ζ͜͡Ryan <3#8803 qui peut l'utilisée!**")
      } else {
      let embed = new Discord.RichEmbed()
      .setColor("#FE0101")
      .setDescription("TA MERE C UNE PUTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
      .setFooter("BIG UP RYAN <3")
      return message.channel.send({embed})
  }
  }

  if (message.content.startsWith( prefix + "say")) {
      if(message.author.id == "307919815547551745"){
      var msg = message.content.substr('6')
      message.delete(message.author);
      message.channel.send(msg);
  }
}

  if (message.content.startsWith(prefix + "serveurinfo") || message.content.startsWith(prefix + "si")){
      let embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription("Information du serveur")
      .addField("Propriaitaire du serveur", message.guild.owner.user.tag)
      .addField("Nom du serveur", message.guild.name)
      .addField("Crée le", message.guild.createdAt)
      .addField("Utilisateurs sur le discord", message.guild.memberCount)
      .addField("Nombre de salons", message.guild.channels.size)
      .addField("Nombre de rôles", message.guild.roles.size)
      .addField("liste de rôles", message.guild.roles.map(r => r.name).length > 900 ? "Trop de rôle" : message.guild.roles.map(r => r.name))
      .addField("Humains", `${message.guild.members.filter(member => !member.user.bot).size}`)
      .addFields("Bots", `${message.guild.members.filter(member => member.user.bot).size}`)
      .addField("Status", `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** DND\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
      .setColor("#C3FE01")
      .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
  message.channel.send(embed)
  }

  if(message.content.startsWith(prefix + "sondage")){
      let args = message.content.split(" ").slice(1);
      let thingToEcho = args.join(" ")
      let embed = new Discord.RichEmbed()
          .setDescription("Sondage")
          .addField(thingToEcho, "Répondre avec :one:(oui/choix) ou :two:(non/choix)")
          .setColor("#C3FE01")
          .setTimestamp()
          .setFooter(`Sondage réalisé par ${message.author} | © 🌺🍃FroGroZe🍃🌺#6893`)
      message.channel.send({embed})
      .then(function (message) {
          message.react("1⃣")
          message.react("2⃣")
      }).catch(function() {
      });
  }

  if(message.content.startsWith(prefix + "support")) {
      let embed = new Discord.RichEmbed()
      .setColor('#03FC03')
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle("Serveur support")
      .addField(":notepad_spiral: Pour rejoindre le serveur discord ( support ) de mon créateur ", "[Cliquez ici](https://discord.gg/FR4KZrT)", true)
      .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
      message.channel.send({embed})
  }

  if (message.content.startsWith(prefix + "userinfo") || message.content.startsWith(prefix + "ui")){
      let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
      if(user.bot == true){
        var checkbot = "Oui"
      } else {
        var checkbot = "Non"
      }
let member = message.guild.member(user);
let roles = [];
if (member.roles.size > 0) {
  member.roles.forEach(r => {
      if(
  !r.name.includes("everyone")
)
  {
      roles.push(r.name);
  }
})
} else {
  roles = "no";
}
let ttt = (member.roles.size > 0) ? roles.length : "0";
let wato = (roles.length > 0) ? roles.join(", ") : "None";
let game = (!!user.presence && user.presence !== null && user.presence.game !== null && user.presence.game.name !== null) ? user.presence.game.name : "Nothing"
let embed = {
  author: {
      name: user.username,
      icon_url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
  },
  color: 0xC3FE01,
  thumbnail: {
      url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
  },
  fields: [{
      name: ":bust_in_silhouette:Pseudo",
      value: user.username + "#" + user.discriminator,
      inline: true
  }, {
      name: ":id:ID",
      value: user.id,
      inline: true
  }, {
      name: ":abcd:Pseudo sur le serveur",
      value: (member.nickname !== null) ? member.nickname : user.username,
      inline: true
  }, {
      name: ":video_game:Jeux",
      value: "Joue a : " + game,
      inline: true
  }, {
      name: ":radio_button:Status",
      value: (user.presence !== null && user.presence.status !== null) ? user.presence.status : "Offline",
      inline: true
  }, {
      name: ":inbox_tray:Rejoins Le",
      value: member.joinedAt.toString(),
      inline: true
  }, {
      name: ":gear:Compte Crée Le",
      value: moment.utc(message.guild.createdAt).format("dddd Do MMMM YYYY, HH:mm:ss"),
      inline: true
  }, {
      name: ":globe_with_meridians:Roles (" + ttt + ")",
      value: wato,
      inline: true
  }, {
      name: ":robot:Est-ce un bot ?",
      value: checkbot,
      inline: true
  }]
}
message.channel.send("", {
  embed
});
  }

              if(message.content.startsWith(prefix + "demande")) {
                if (message.channel.type === "dm") return;
                message.delete(message.author)
                const mp = client.users.get("307919815547551745")
                const d = message.content.substr(10)
                if(!d) return message.reply("Veuillez entrer un text");
                let embed = new Discord.RichEmbed()
                .setAuthor(message.member.user.tag, message.author.avatarURL)
                .setDescription("Il y a une demande")
                .addField("Demande", `${d}`)
                .addField("Pseudo de la personne", `${message.author.tag}`)
                .addField("Serveur", `${message.guild.name}`)
                .addField("Channel", `${message.channel.name}`)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`Demande de ${message.author.tag}`)
                .setTimestamp()
                mp.send(embed)
            }

            if(message.content.startsWith(prefix + "demande")) {
                message.reply("Demande envoyée")
            }

            if(message.content.startsWith(prefix + "mp")) {
                if(message.author.id == "307919815547551745"){
                    if(message.channel.guild){
                var mpMember = message.mentions.members.first();
                if(!mpMember) return message.reply("Veuillez mentionner un utilisateur");
                message.reply(`Message bien envoyé à ${mpMember}`)
                        message.delete(message.author)
                        const mp = client.users.get(mpMember)
                        const d = message.content.substr(28)
                        if (!d) return message.reply("Veuillez entrer un text");
                        let embed = new Discord.RichEmbed()
                        .setColor('#408AA4')
                        .setAuthor(message.member.user.tag, message.member.user.avatarURL)
                        .setDescription("Réponse du créateur")
                        .addField("Reponse", d)
                        .setFooter("Merci d'avoir fait pars de ta demade a mon créateur")
                        .setTimestamp()
                        message.mentions.members.first().send(embed)
            }
                    }
                }

              if(message.content.startsWith(prefix + "report")) {
                if (message.channel.type === "dm") return;
                message.delete(message.author)
                const mp = client.users.get("307919815547551745")
                const d = message.content.substr(10)
                if(!d) return message.reply("Veuillez entrer un text");
                let embed = new Discord.RichEmbed()
                .setAuthor(message.member.user.tag, message.author.avatarURL)
                .setDescription("Il y a un report")
                .addField("Report", `${d}`)
                .addField("Pseudo de la personne", `${message.author.tag}`)
                .addField("Serveur", `${message.guild.name}`)
                .addField("Channel", `${message.channel.name}`)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`Report de ${message.author.tag}`)
                .setTimestamp()
                mp.send(embed)
            }

            if(message.content.startsWith(prefix + "report")) {
                message.reply("Report envoyé")
            }
    
                  if(message.content.startsWith(prefix + "avis")) {
                if (message.channel.type === "dm") return;
                message.delete(message.author)
                const mp = client.users.get("307919815547551745")
                const d = message.content.substr(10)
                if(!d) return message.reply("Veuillez entrer un text");
                let embed = new Discord.RichEmbed()
                .setAuthor(message.member.user.tag, message.author.avatarURL)
                .setDescription("Il y a un avis")
                .addField("Report", `${d}`)
                .addField("Pseudo de la personne", `${message.author.tag}`)
                .addField("Serveur", `${message.guild.name}`)
                .addField("Channel", `${message.channel.name}`)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`Report de ${message.author.tag}`)
                .setTimestamp()
                mp.send(embed)
            }

            if(message.content.startsWith(prefix + "report")) {
                message.reply("Report envoyé")
            }
})

client.on('message', function(message) {
  if (message.author.equals(client.user)) return ;

  if (!message.content.startsWith(prefix)) return ;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
      case "8ball":
      let args = message.content.split(" ").slice(1);
      let tte = args.join(" ")
      if (!tte){
          return message.reply("Merci de poser une question :8ball:")};
          
          var replys = [
              "Oui",
              "Non",
              "Je ne sais pas",
              "Sûrement",
              "Peut être",
              "Je ne pense pas",
          ];

          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var bembed = new Discord.RichEmbed()
          .setColor('#000101')
          .setDescription(":8ball: 8ball")
          .addField("Question", tte)
          .addBlankField()
          .addField("Reponse", reponse)
      message.channel.send(bembed)
  }
})

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "info")) {
        message.delete();
        if (message.author.id == "307919815547551745") {
        let argson = message.content.split(" ").slice(1);
        let infomsg = argson.join(" ")
        if (!message.guild.channels.find("name", "infos-douzii")) return message.reply("Erreur: le channel `infos-douzii` est introuvable");
        if(message.channel.name !== "infos-douzii") return message.reply("Commande a effectuer dans `infos-douzii`");
        if(!infomsg) return message.reply("Merci de mettre un text");
    
        var replys = [
            '#FE0177'
        ];
    
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var embed = new Discord.RichEmbed()
        .setColor(reponse)
        .setAuthor("DouZii - INFO", client.user.avatarURL)
        .addField("Info", infomsg)
        .setFooter("INFO")
        .setTimestamp()
        client.channels.findAll('name', 'infos-douzii').map(channel => channel.send(embed))
            }
        }
    })

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "vcs")) {
                message.delete(message.author);
        let argson = message.content.split(" ").slice(1);
        let vcsmsg = argson.join(" ")
        if (!message.guild.channels.find("name", "vcs-douzii")) return message.reply("Erreur: le channel `vcs-douzii` est introuvable");
        if(message.channel.name !== "vcs-douzii") return message.reply("Commande a effectuer dans `vcs-douzii`");
        if(!vcsmsg) return message.reply("Merci d'envoyer un message à envoyer dans la globalité des discords");
    
        var replys = [
            '#01FEDC', 
            '#FE0101',
            '#FE6F01',
            '#FEF601',
            '#6FFE01',
            '#1201FE',
            '#7F01FE',
            '#FE01C3',
            '#0166FE',
            '#FE0177'
        ];
    
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var embed = new Discord.RichEmbed()
        .setColor(reponse)
        .setAuthor("DouZii - VCS", client.user.avatarURL)
        .addField("Serveur", message.guild.name, true)
        .addField("Utilisateur", message.author.tag, true)
        .addField("Message", vcsmsg)
        .setFooter("VCS")
        .setTimestamp()
        client.channels.findAll('name', 'vcs-douzii').map(channel => channel.send(embed))
        }
    })

client.on('message', function(message) {
  if(message.content.startsWith(prefix + "cat")) {
          var replys = [
              "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/315582/pexels-photo-315582.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/22346/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/115011/cat-face-close-view-115011.jpeg?auto=compress&cs=tinysrgb&h=350"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("CAT")
      message.channel.send(embed)
  }
})

client.on('message', function(message) {
  if(message.content.startsWith(prefix + "dog")) {
          var replys = [
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/89775/dog-hovawart-black-pet-89775.jpeg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/9080/night-garden-yellow-animal.jpg?auto=compress&cs=tinysrgb&h=350",
              "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&h=350"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("DOG")
        message.channel.send({embed})
  }
})

client.on('message', function(message) {
  if(message.content.startsWith(prefix + "4k")) {
          const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return console.log("Salon nsfw absent!");
          var replys = [
              "http://www.wallsexy.net/wp-content/uploads/2016/09/fonds-ecran-images-sexy-photoshop-de-femmes-nues-04-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/01/fonds-ecran-images-sexy-blonde-bombasse-porno-16-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/10/fonds-ecran-images-sexy-chikita-nue-et-sexy-94-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/03/amy-se-masturbe-avec-un-vibrateur-18-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/02/blonde-pulpeuse-se-caresse-la-chatte-15-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/12/fonds-ecran-images-sexy-belles-salopes-brune-03-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/12/fonds-ecran-images-sexy-brunette-bombasse-sexy-14-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/03/aspen-se-masturbe-le-cul-et-la-chatte-15-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/02/fonds-ecran-images-sexy-etudiantes-brunette-nues-03-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/01/fonds-ecran-images-sexy-etudiante-qui-prefere-baiser-13-660x330.jpg"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }

  if(message.content.startsWith(prefix + "ass")) {
  const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return console.log("Salon nsfw absent!");
          var replys = [
              "http://www.wallsexy.net/wp-content/uploads/2017/01/fonds-ecran-images-sexy-gros-seins-de-jolies-bombasses-09-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/01/fonds-ecran-images-sexy-blonde-bombasse-porno-16-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/12/fonds-ecran-images-sexy-2-mecs-pour-la-bombasse-01-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/12/fonds-ecran-images-sexy-2-bombasses-blanche-pour-un-black-12-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/12/fonds-ecran-images-sexy-brunette-bombasse-sexy-14-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2018/01/fonds-ecran-images-sexy-une-bouteille-dans-le-cul-07-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/12/fonds-ecran-images-sexy-deux-penis-dans-le-cul-09-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/02/fonds-ecran-images-sexy-simony-diamond-se-fait-enculer-13-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/11/fonds-ecran-images-sexy-Jolie-cul-de-femmes-noires-02-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/11/fonds-ecran-images-sexy-femmes-mature-avec-un-jolie-cul-14-660x330.jpg"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }
  
      if(message.content.startsWith(prefix + "boobs")) {
  const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return message.channel.send("Salon nsfw introuvable!");
          var replys = [
              "http://www.wallsexy.net/wp-content/uploads/2017/02/fonds-ecran-images-sexy-photoshop-de-gros-seins-06b-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2017/01/fonds-ecran-images-sexy-gros-seins-de-jolies-bombasses-09-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/12/fonds-ecran-images-sexy-gros-seins-jeune-femme-12-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/11/fonds-ecran-images-sexy-gros-seins-de-salope-noire-20-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/08/fonds-ecran-images-sexy-gros-seins-femme-sexy-08-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/08/fonds-ecran-images-sexy-jeunette-avec-des-seins-parfais-14-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/08/fonds-ecran-images-sexy-seins-de-jolies-rousses-14-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/05/fonds-ecran-images-sexy-petits-seins-amateurs-19-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/02/anette-dawn-et-ses-jolies-seins-10-660x330.jpg",
              "http://www.wallsexy.net/wp-content/uploads/2016/02/jolie-femme-et-gros-seins-09-660x330.jpg"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }

  if(message.content.startsWith(prefix + "fuck")) {
  const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return message.channel.send("Salon nsfw introuvable!");
          var replys = [
              "https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gifs-anim%C3%A9s-levrette.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-de-levrette.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gif-levrette.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/position-du-kamasutra-levrette.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/kamasutra-la-levrette.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/kamasutra-la-levrette.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/levrette-debout.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/levrette-exterieur.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/levrette-%C3%A0-plusieurs.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gif-anim%C3%A9-levrette-en-couple.gif"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }

  if(message.content.startsWith(prefix + "suck")) {
  const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return message.channel.send("Salon nsfw introuvable!");
          var replys = [
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-fellation.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-anime-fellation.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-ejac-faciale.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-fellation-69.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/animation-fellation.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/fellation-plaisir.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/fellation-pleine-nature.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/fellation-pipe.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/faire-une-fellation.gif",
              "https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-de-fellation.gif"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }

  if(message.content.startsWith(prefix + "hentaiimg")) {
  const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return message.channel.send("Salon nsfw introuvable!");
          var replys = [
              "https://images.sex.com/images/pinporn/2018/03/17/300/19253871.jpg",
              "https://images.sex.com/images/pinporn/2018/04/01/300/19315340.jpg",
              "https://images.sex.com/images/pinporn/2018/03/25/300/19288485.jpg",
              "https://images.sex.com/images/pinporn/2018/04/03/300/19321269.png",
              "https://images.sex.com/images/pinporn/2018/03/26/300/19290744.jpg",
              "https://images.sex.com/images/pinporn/2018/04/01/300/19314027.jpg",
              "https://images.sex.com/images/pinporn/2018/03/20/300/19268305.jpg",
              "https://images.sex.com/images/pinporn/2018/03/15/300/19248235.jpg",
              "https://images.sex.com/images/pinporn/2018/03/18/300/19257484.jpg",
              "https://images.sex.com/images/pinporn/2018/03/26/300/19292622.jpg"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }

  if(message.content.startsWith(prefix + "hentaigif")) {
  const nsfw = message.guild.channels.find(m => m.name === "nsfw");
  if (!nsfw) return message.channel.send("Salon nsfw introuvable!");
          var replys = [
              "https://images.sex.com/images/pinporn/2018/04/11/300/19353548.gif",
              "https://images.sex.com/images/pinporn/2018/04/02/300/19317076.gif",
              "https://images.sex.com/images/pinporn/2018/04/05/300/19329798.gif",
              "https://images.sex.com/images/pinporn/2018/03/18/300/19257302.gif",
              "https://images.sex.com/images/pinporn/2018/03/17/300/19257050.gif",
              "https://images.sex.com/images/pinporn/2018/04/05/300/19329924.gif",
              "https://images.sex.com/images/pinporn/2018/04/06/300/19335137.gif",
              "https://images.sex.com/images/pinporn/2018/03/13/300/19240110.gif",
              "https://images.sex.com/images/pinporn/2018/03/17/300/19254702.gif",
              "https://images.sex.com/images/pinporn/2018/03/12/300/19236921.gif"
          ];
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor('#C3FE01')
          .setImage(reponse)
          .setFooter("NSFW")
       nsfw.send({embed})
  }
  
      if(message.content.startsWith(prefix + "kiss")) {
      var kissMember = message.mentions.members.first();
      if(!kissMember) return message.reply("Veuillez mentionner un utilisateur")
      var replys = [
          "http://31.media.tumblr.com/d5a4c33ad15fa1731206900121f32c9c/tumblr_mn665qkDFW1spck1jo1_500.gif",
          "http://25.media.tumblr.com/0315131fb2ff8bdff4d069f0163dd7ad/tumblr_mu8r3mdffM1soop01o1_500.gif",
          "http://66.media.tumblr.com/f6632f17b9fc08173dcd1a28c21d93c2/tumblr_o7gwsuMhoU1v4w9s5o1_500.gif",
          "http://25.media.tumblr.com/bf2ceadc97e66a8a31c6311a3a79de81/tumblr_mukq8cnJHJ1spb1clo1_500.gif",
          "http://24.media.tumblr.com/7329aab37cbd7e65a7e13490701b1642/tumblr_n6p2wcYvTp1tdgu8lo1_500.gif",
          "http://37.media.tumblr.com/d8216d88aff781626015ade99ce15958/tumblr_mi0ag1Ebig1rarypbo1_500.gif",
          "http://37.media.tumblr.com/3704e9d1b9e7254238a959e3cd1898ce/tumblr_mu5mjhSxDn1s6ft4zo1_500.gif",
          "http://37.media.tumblr.com/e440b37451b6491144f211e440a7659e/tumblr_n2dz6yAI261tswgwpo1_500.gif",
          "http://37.media.tumblr.com/d22c1072863cb63a367e9a9a3e5a4f15/tumblr_n4iwxxS5nR1svgr39o1_500.gif",
          "http://37.media.tumblr.com/12d34f591e723c573be5e60a17c434eb/tumblr_mv4wcmbW7i1slpj5xo1_500.gif"
      ]
      let reponse = (replys[Math.floor(Math.random() * replys.length)])
      var embed = new Discord.RichEmbed()
      .setColor('#C3FE01')
      .setDescription(`${message.author} a embrassé(e) ${kissMember}`)
      .setImage(reponse)
      .setFooter("Kiss")
   message.channel.send({embed})
  }

  if(message.content.startsWith(prefix + "slap")) {
    var slapMember = message.mentions.members.first();
    if(!slapMember) return message.reply("Veuillez mentionner un utilisateur")
    var replys = [
        "https://m.popkey.co/6182f2/Q0YOJ_s-200x150.gif",
        "https://m.popkey.co/6e09c4/xRmMz_s-200x150.gif",
        "https://m.popkey.co/d67e0b/mr5V5_s-200x150.gif",
        "https://m.popkey.co/5ab5b0/M73kk_s-200x150.gif",
        "https://m.popkey.co/873958/Alv7J_s-200x150.gif",
        "https://m.popkey.co/0503b5/aWJO0_s-200x150.gif",
        "https://m.popkey.co/295003/bpQ8Y_s-200x150.gif",
        "https://m.popkey.co/67e39f/w6Dxz_s-200x150.gif",
        "https://m.popkey.co/0a1416/Ml0X6_s-200x150.gif",
        "https://m.popkey.co/1121ac/16jO8_s-200x150.gif"
    ]
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var embed = new Discord.RichEmbed()
    .setColor('#C3FE01')
    .setDescription(`${message.author} a donné(e) une claque à ${slapMember}`)
    .setImage(reponse)
    .setFooter("Slap")
 message.channel.send({embed})
}

if(message.content.startsWith(prefix + "punch")) {
    var punchMember = message.mentions.members.first();
    if(!punchMember) return message.reply("Veuillez mentionner un utilisateur")
    var replys = [
        "https://m.popkey.co/08f09f/Ow3qk_s-200x150.gif",
        "https://m.popkey.co/f4fbc3/NvK5Q_s-200x150.gif",
        "https://m.popkey.co/88b1b1/e0LR1_s-200x150.gif",
        "https://m.popkey.co/df1ba1/OwZV9_s-200x150.gif?c=popkey-web&p=popkey&i=dogs-animals&l=search&f=.gif",
        "https://m.popkey.co/4a47c1/8qJml_s-200x150.gif?c=popkey-web&p=popkey&i=dogs-animals&l=search&f=.gif",
        "https://m.popkey.co/64ed25/kWmx8_s-200x150.gif?c=popkey-web&p=popkey&i=dogs-animals&l=search&f=.gif",
        "https://m.popkey.co/66eb71/vkOEk_f-maxage-0_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/d5adb7/LlkJG_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/9d76d0/5MMkl_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/572779/zgbXZ_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif"
    ]
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var embed = new Discord.RichEmbed()
    .setColor('#C3FE01')
    .setDescription(`${message.author} a donné(e) un coup de poing à ${punchMember}`)
    .setImage(reponse)
    .setFooter("Punch")
 message.channel.send({embed})
}

if(message.content.startsWith(prefix + "bang")) {
    var bangMember = message.mentions.members.first();
    if(!bangMember) return message.reply("Veuillez mentionner un utilisateur")
    var replys = [
        "https://m.popkey.co/067e7b/lMRe0_s-200x150.gif",
        "https://m.popkey.co/c28d25/y6zmJ_s-200x150.gif",
        "https://m.popkey.co/43a428/mpARa_s-200x150.gif",
        "https://m.popkey.co/0ffd3a/8MveJ_s-200x150.gif",
        "https://m.popkey.co/6d15ad/brj49_s-200x150.gif",
        "https://m.popkey.co/fa34a5/GewOD_s-200x150.gif?c=popkey-web&p=popkey&i=sciencetech-ent&l=search&f=.gif",
        "https://m.popkey.co/449f79/p8koA_f-maxage-0_s-200x150.gif?c=popkey-web&p=popkey&i=sciencetech-ent&l=search&f=.gif",
        "https://m.popkey.co/a6ac86/WgEJa_s-200x150.gif?c=popkey-web&p=popkey&i=sciencetech-ent&l=search&f=.gif",
        "https://m.popkey.co/9f40c6/y0e9p_s-200x150.gif?c=popkey-web&p=popkey&i=sciencetech-ent&l=search&f=.gif",
        "https://m.popkey.co/a64a41/Dy8ZX_s-200x150.gif?c=popkey-web&p=popkey&i=sciencetech-ent&l=search&f=.gif"
    ]
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var embed = new Discord.RichEmbed()
    .setColor('#C3FE01')
    .setDescription(`${message.author} a tué(e) ${bangMember}`)
    .setImage(reponse)
    .setFooter("Bang")
 message.channel.send({embed})
}

if(message.content.startsWith(prefix + "hug")) {
    var hugMember = message.mentions.members.first();
    if(!hugMember) return message.reply("Veuillez mentionner un utilisateur")
    var replys = [
        "https://m.popkey.co/8ad255/kvV41_s-200x150.gif",
        "https://m.popkey.co/14f696/DDM5_f-maxage-0_s-200x150.gif",
        "https://m.popkey.co/f031fb/4M6Vx_s-200x150.gif",
        "https://m.popkey.co/f287c4/JaAoA_f-maxage-0_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/e67fe3/JaAo9_f-maxage-0_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/955c13/EoJdD_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/4758f7/oak4J_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/5e5e16/6jGpz_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif",
        "https://m.popkey.co/574937/3b0KJ_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif"
    ]
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var embed = new Discord.RichEmbed()
    .setColor('#C3FE01')
    .setDescription(`${message.author} fait un calîn à ${hugMember}`)
    .setImage(reponse)
    .setFooter("Hug")
 message.channel.send({embed})
}
})

client.on('message', message => {
  if (message.content.startsWith(prefix + "kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) {
          return message.reply("Tu n'as pas les permissions !").catch(console.error);
      }
      if(message.mentions.users.size === 0) {
          return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
      }
      let kickMember = message.guild.member(message.mentions.users.first());
      if(!kickMember) {
          return message.reply("Cet utilisateur est introuvable ou impossible a kick")
      }
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
          return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci").catch(console.error);
      }
      kickMember.kick().then(member => {
          message.channel.send(` :wave: ${member.user.username} a été kick :point_right:`).catch(console.error);

      }).catch(console.error);
  }

  if (message.content.startsWith(prefix + "ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) {
          return message.reply("Tu n'as pas les permissions !").catch(console.error);
      }
      if(message.mentions.users.size === 0) {
          return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
      }
      let banMember = message.guild.member(message.mentions.users.first());
      if(!banMember) {
          return message.reply("Cet utilisateur est introuvable ou impossible a ban")
      }
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
          return message.reply("Je n'ai pas la permission BAN_MEMBERS pour faire ceci").catch(console.error);
      }
      banMember.ban().then(member => {
          message.channel.send(` :wave: ${member.user.username} a été ban :point_right:`).catch(console.error);

      }).catch(console.error);
  }
    
        if(message.content.startsWith(prefix + "createchannel") || message.content.startsWith(prefix + "cc")){
            message.delete(message.author)
            let argson = message.content.split(" ").slice(1);
            let namechannel = argson.join(" ")
                if(!message.member.hasPermission("MANAGE_CHANNELS")) {
                    return message.reply("Tu n'as pas les permisions !").catch(console.error);
                }
                if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) {
                    return message.reply("Je n'ai pas les permissions !")
                }
                message.guild.createChannel(namechannel)
                return message.reply(`Le channel ${namechannel} a bien été créé`)
            }
    
    if(message.content.startsWith(prefix + "createrole") || message.content.startsWith(prefix + "cr")) {
    message.delete(message.author)
    let argson = message.content.split(" ").slice(1);
    let namerole = argson.join(" ")
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            return message.reply("Tu n'as pas les permisions !").catch(console.error);
        }
        if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
            return message.reply("Je n'ai pas les permissions !")
        }
        message.guild.createRole({name: namerole,})
        return message.reply(`Le role ${namerole} a bien été créé`)
    }
    
        if(message.content.startsWith(prefix + "giverole") || message.content.startsWith(prefix + "gr")) {
        message.delete(message.author)
        let membergiverole = message.mentions.members.first()
        if(!membergiverole) return message.reply("Veuillez mentionner un utilisateur");
        let namerole = message.mentions.roles.first();
        if(!namerole) return message.reply("Veuillez mentionner un role")
            if(!message.member.hasPermission("MANAGE_ROLES")) {
                return message.reply("Tu n'as pas les permisions !").catch(console.error);
            }
            if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
                return message.reply("Je n'ai pas les permissions !")
            }
            membergiverole.addRole(namerole)
            return message.reply(`Le role ${namerole} a bien été add a ${membergiverole}`)
        }

        if(message.content.startsWith(prefix + "removerole") || message.content.startsWith(prefix + "rr")) {
            message.delete(message.author)
            let memberremoverole = message.mentions.members.first()
            if(!memberremoverole) return message.reply("Veuillez mentionner un utilisateur");
            let namerole = message.mentions.roles.first();
            if(!namerole) return message.reply("Veuillez mentionner un role")
                if(!message.member.hasPermission("MANAGE_ROLES")) {
                    return message.reply("Tu n'as pas les permisions !").catch(console.error);
                }
                if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
                    return message.reply("Je n'ai pas les permissions !")
                }
                memberremoverole.removeRole(namerole)
                return message.reply(`Le role ${namerole} a bien été enlevé a ${memberremoverole}`)
            }
    
                if(message.content.startsWith(prefix + "tempmute") || message.content.startsWith(prefix + "tm")) {
                              if (message.channel.type === "dm") return;
                let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            let member_mods = message.member.hasPermission("ADMINISTRATOR")
            let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        
            if(!member_mods) return message.channel.send(message.author + " Tu n'as pas les permissions requises ! :warning:");
            if(!toMute) return message.channel.send(message.author + " Veuillez mentionner un utilisateur !");
            if(toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.author + "Cet utilisateur est impossible a mute");
        
            let muteR = message.guild.roles.find(`name`, "Muted");
        
        
        
            if(!muteR){
                try {
        
                    muteR = message.guild.createRole({
                        name: "Muted",
                        color: "#161616",
                        permission: []
                    })
        
                    message.guild.channels.forEach(async (channel, id) => {
                        channel.overwritePermissions(muteR, {
                            SEND_MESSAGES: false,
                            SEND_TTS_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SPEAK: false
                        });
                    });
        
                }catch(e){
                    console.log(e.stack);
                }
            }
        
            
        
        
        
            let muteT = args[1];
            if(!muteT) return message.channel.send(message.author + ' Veuillez mettre un temps de mute !');
        
        
            (toMute.addRole(muteR.id));
            message.delete();
            message.channel.send(`${toMute} a été mute pendant ${ms(ms(muteT))}.`);
            toMute.send(":mute: Vous avez été mute sur le serveur **" + message.guild.name + "**")
        
            setTimeout(function(){
                toMute.removeRole(muteR.id);
                message.channel.send(`${toMute} viens d'être unmute !`)
                toMute.send("Vous avez été unmute sur **" + message.guild.name + "**")
            }, ms(muteT));
        }

        if(message.content.startsWith(prefix + "mute")) {
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            let member_mods = message.member.hasPermission("ADMINISTRATOR")
            let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        
            if(!member_mods) return message.channel.send(message.author + " Tu n'as pas les permissions requises ! :warning:");
            if(!toMute) return message.channel.send(message.author + " Veuillez mentionner un utilisateur !");
            if(toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.author + "Cet utilisateur est impossible a mute");
        
            let muteR = message.guild.roles.find(`name`, "Muted");
        
        
        
            if(!muteR){
                try {
        
                    muteR = message.guild.createRole({
                        name: "Muted",
                        color: "#161616",
                        permission: []
                    })
        
                    message.guild.channels.forEach(async (channel, id) => {
                        channel.overwritePermissions(muteR, {
                            SEND_MESSAGES: false,
                            SEND_TTS_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SPEAK: false
                        });
                    });
        
                }catch(e){
                    console.log(e.stack);
                }
            }
        
            (toMute.addRole(muteR.id));
            message.delete();
            message.channel.send(`${toMute} a été mute.`);
            toMute.send(":mute: Vous avez été mute sur le serveur **" + message.guild.name + "**")
        }

        if(message.content.startsWith(prefix + "unmute")) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous devez avoir la permissions *ADMINISTRATOR* pour pouvoir exécuter cette commande")
        
          let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
          if (!toUnmute) return message.reply("Veuillez mentionner un utilisateur");
        
          let role = message.guild.roles.find(r => r.name === "Muted");
          
        
          if(!role || !toUnmute.roles.has(role.id)) return message.channel.send("Cet utilisateur n'est pas mute");
        
          toUnmute.removeRole(role)
          message.reply(`${toUnmute} a bien été mute !`)
        
          return;
        }
})

//Système de musique
client.on('message', message => {
    if(message.content === prefix + "play"){
function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}
var servers = {};
        var argsplay = message.content.substring(prefix.length).split(" ");
            if (!argsplay[1]) {
                message.channel.send("Merci de mettre un lien à lire.");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.send("Tu dois être dans un salon vocal.");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(argsplay[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
                message.channel.send("Lancement de la musique")
            });
        }});
//Commande skip (musique)
client.on('message', message => {
            if(message.content === prefix + "skip"){
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            message.channel.send("Musique skipée")
            }});
//Commande stop (musique)
client.on('message', message => {
if(message.content === prefix + "stop"){
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            message.channel.send("Musique arrêtée")
}});
