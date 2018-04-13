const Discord = require("discord.js")
const client = new Discord.Client()
client.login(process.env.TOKEN)

var prefix = "d!";

client.on('ready', () =>  {
    console.log("Je suis connecté !")
     client.user.setActivity("d!help | © 🌺🍃FroGroZe🍃🌺#6893 | "+ client.guilds.size + " Serveurs, " + client.users.size + "  Utilisateurs")
  });

     client.on("guildMemberAdd", member => {
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
  member.guild.channels.find("name", "bienvenue-bye").send({embed})
  });
  
  client.on("guildMemberAdd", member => {
      const logs = member.guild.channels.find(m => m.name === "logs-douzii");
      if (!logs) return console.log("Salon Logs absent!");
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
      const embed = new Discord.RichEmbed()
      .setColor('#9F0000')
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle("Départ d'un utilisateur")
      .addField("Il s'agit de", `[${member.user.tag}](https://discordapp.com/)`, true)
      .addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)
      .setFooter(`ID : ${member.user.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
      member.guild.channels.find("name", "bienvenue-bye").send({embed})
      });
  
  client.on("guildMemberRemove", member => {
      const logs = member.guild.channels.find(m => m.name === "logs-douzii");
      if (!logs) return console.log("Salon Logs absent!");
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
    if (!logs) return console.log("Salon Logs absent!");
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
      if (!logs) return console.log("Salon Logs absent!");
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
  
    client.on("channelUpdate", (oldName, newName) => {
      const logs = newName.guild.channels.find(m => m.name === "logs-douzii");
      if (!logs) return console.log("Salon Logs absent !");
      const embed = new Discord.RichEmbed()
      .setColor("#FE6F01")
      .setAuthor(client.user.tag, client.user.avatarURL)
      .setTitle("Le Nom d'un channel a été modifié ! :white_check_mark:")
      .setDescription("Nom de channel modifié !")
      .addField("Ancien Nom", `${oldName.name}`)
      .addField("New Nom", `${newName.name}`)
      .addField("Nombre de channels", newName.guild.channels.size)
      .setFooter(`ID : ${newName.id} | © 🌺🍃FroGroZe🍃🌺#6893`)
      .setTimestamp()
      logs.send({embed})
  });
  
  client.on("roleCreate", role => {
      const logs = role.guild.channels.find(m => m.name === "logs-douzii");
      if (!logs) return console.log("Salon Logs absent!");
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
      if (!logs) return console.log("Salon Logs absent!");
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
  
  client.on("roleUpdate", (oldName, newName) => {
      const logs = oldName.guild.channels.find(m => m.name === "logs-douzii");
      if (!logs) return console.log("Salon Logs absent !");
      const embed = new Discord.RichEmbed()
      .setColor("#FE6F01")
      .setAuthor(client.user.tag, client.user.avatarURL)
      .setTitle("Le nom d'un rôle a été modifié ! :white_check_mark:")
      .setDecription("Nom de rôle modifié !")
      .addField("Ancien Nom", `${oldName.name}`)
      .addField("New Nom", `${newName.name}`)
      .addField("Nombre de rôles", role.guild.roles.size)
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
      if (!logs) return console.log("Salon Logs absent!");
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
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
    if(message.content.startsWith(prefix + "avatar")) {
        message.channel.send(message.author.avatarURL);
    }

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
              "`d!demande` : *Pour faire une demande au developpeur ( ajout de commandes, modifications, etc ... )*:white_check_mark:\n")
        message.author.send({embed});
        message.reply(":point_right:help envoyé en MP:envelope_with_arrow:");
        }
  
        if(message.content.startsWith(prefix + "help")){
            if (message.channel.type === "dm") return;
          let embed = new Discord.RichEmbed()
          .setColor('#FE6F01')
          .setDescription("__**MODERATION**__ : \n" +
              " `d!kick (@user)` : *Pour kick un joueur*:white_check_mark:\n" +
              "`d!ban (@user)` : *Pour ban une personne*:white_check_mark:\n" +
              "`d!purge ( 2 à 100 )` : *Pour purge des messages*:white_check_mark:\n" +
              "`logs ( sous activation par salon )` : *Permet de suivre les agissements des utilisateurs*:white_check_mark::regional_indicator_a:\n" +
              "`d!mute` : *Permet de mute un utilisateur*:hourglass:\n" +
              "`d!afk` : *Permet de se mettre* **AFK**:hourglass:\n")
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
        "`d!serveurinfo` : *Affiche les infos du serveur* **|| ALIASE : **`d!si`:white_check_mark:\n" +
        "`d!sondage` : *Execute un sondage*:white_check_mark:\n" +
        "`d!8ball(question)` : *Poser une question et le bot répond\n" +
        "`nsfw` : *Voir du porno*:white_check_mark: :regional_indicator_a:")
      message.author.send({embed});
        }
      
        if(message.content.startsWith(prefix + "help")) {
            if (message.channel.type === "dm") return;
            let embed = new Discord.RichEmbed()
            .setColor('#FE0101')
            .setDescription("__**ACTIVATIONS**__ (:regional_indicator_a:)\n" +
          "`logs` : *Créer un salon* ***#logs-douzii***\n" +
          "`Bienvenue-Bye` : *Se met dans un salon* ***#bienvenue-bye***\n" +
          "`nsfw` : **Créer un salon* ***#nsfw***")
      message.author.send({embed});
        }

        if(message.content.startsWith(prefix + "help")) {
            if (message.channel.type === "dm") return;
            let embed = new Discord.RichEmbed()
            .setColor('#DC009A')
            .setDescription("__**EXPLICATIONS**__ (:regional_indicator_a:)\n" +
          "`logs` : *MemberAdd, MemberRemove, MessageUpdate, MessageDelete, ChannelCreate, ChannelDelete, RoleCreate, RoleDelete*\n" +
          "`nsfw` : *4k, ass, boobs, fuck, suck, hentaiimg, hentaigif*")
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
          ":regional_indicator_a: = **activations commandes**")
          .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
          .setTimestamp()
        message.author.send({embed});
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

        if(message.content.startsWith(prefix + "ping")){
          let startTime = message.createdTimestamp;
          let endTime = new Date().getTime()
          let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
          .setColor("#C3FE01")
          .setAuthor("Ping-Pong")
          .setTitle("__Voici le ping du bot__")
          .addField("**pong :ping_pong: " + Math.round(endTime - startTime) + " ms.**", "Excellent ping ! :v:")
          .setFooter(`Demandé par ${message.author.tag} | © 🌺🍃FroGroZe🍃🌺#6893`)
          .setTimestamp()
              message.channel.send({embed})
      }
    
            if(message.content.startsWith(prefix + "botinfo") || message.content.startsWith(prefix + "bi")) {
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
        var msg = message.content.substr('4')
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
        name: "Utilisateur",
        value: user.username + "#" + user.discriminator,
        inline: true
    }, {
        name: "ID",
        value: user.id,
        inline: true
    }, {
        name: "Nickname",
        value: (member.nickname !== null) ? member.nickname : user.username,
        inline: true
    }, {
        name: "Jeux",
        value: "Joue a : " + game,
        inline: true
    }, {
        name: "Status",
        value: (user.presence !== null && user.presence.status !== null) ? user.presence.status : "Offline",
        inline: true
    }, {
        name: "Rejoins Le",
        value: member.joinedAt.toString(),
        inline: true
    }, {
        name: "Compte Crée Le",
        value: user.createdAt,
        inline: true
    }, {
        name: "Roles (" + ttt + ")",
        value: wato,
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
            var d = message.content.substr(10)
            message.reply("**Demande envoyé!**")
            
            client.users.get('307919815547551745').send(`|---------------------------------------------|\nIl y a une demande : ${d} \nPseudo de la personne : @${message.author.tag}\nSur le server : ${message.guild.name}\nDans le salon  #${message.channel.name}`)
            }

            if(message.content.startsWith(prefix + "report")) {
              if (message.channel.type === "dm") return;
                  message.delete(message.author)
                var d = message.content.substr(10)
                message.reply("**Report envoyé!**")
                
                client.users.get('307919815547551745').send(`|---------------------------------------------|\nIl y a un report : ${d} \nPseudo de la personne : @${message.author.tag}\nSur le server : ${message.guild.name}\nDans le salon  #${message.channel.name}`)
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
     message.channel.send({embed})
    }
})

  client.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
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

    if (command === "ban") {
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
  })
