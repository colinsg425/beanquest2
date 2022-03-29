window.onload = function () {//encases all code, makes sure all JS is loaded before any code can run

    var story = {//story object

        opener: {//properties in object, containing text and options
            text: "Terrarunel is a world full of magic, monsters, and heroes. You are an aspiring adventurer in their prime, ready for what the world might throw at them. You make your way to the city of Aicamed. \n\n You find yourself standing at a busy intersection, lost in the crowd. A piece of paper flutters by your feet. You pick it up to read it: 'Heroes wanted! Come one come all! The world needs You!' It’s a flyer for the latest guild meeting.\n\nYou read further on. The date and time listed below state that the meeting is today, right now! As you finish reading the paper, you hear the cries in the distance for help. What do you do?",
            options: [["guild", "Go to the Guild Meeting"], ["leave", "Leave the Game"], ["home", "Call it Quits"], ["helpWoman", "Help the Old Lady"]]
        },

        leave: {
            text: "This isn’t Death Stranding! This is just some generic RPG! You pull your Full Dive™ VR headset off your head in frustration.\n\nYou delete the game off of your PC. That’s the last time you torrent some random 200 gigabyte .exe file.",
        },

        guild: {
            text: `You bolt off in the direction of the guild hall. Old ladies can wait—the world needs saving.\n\nAs you arrive at the guild hall, you meet a few greeters leading a pack of adventurers into the crowded halls of the building. The sound of a hundred voices pierce your ears as you walk into the main hall.\n\nYou crawl through a sea of people to reach the front of the crowd where a burly, rugged man stands behind an elevated podium. You assume that the man is the leader of the guild hall, a retired adventurer with years of experience under his belt.\n\n“SILENCE!” the man yells.\n\nThe guild hall turns silent. He clears his throat and continues to speak.\n\n“Welcome everybody here. As many of you know, there has been an issue with a demon king at the top of Mount Ecathia. It has been terrorizing the realm and I am afraid it will do a full-scale attack soon. So, I am requesting the help of adventurers around the country slay the demon before any future harm is done. You can sign up for the quest at one of the guild tables where a worker will qualify you for the quest. That is all.”`,
            options: [["guildAccept", "Sign Up"], ["guildNo", "Don't Sign Up"], ["guildDont", "Decide that Guilds are Dumb"]],
        },

        guildAccept: {
            text: `You walk up to the quest giver and sign the papers to officially receive the quest from the guild. The guild worker then asks you to do a strength test. You have to lift a 250kg bag from the ground and hold it for 5 minutes. You try to lift the bag but it does not even come to an inch off the ground. You have failed the test and you cannot continue the quest.`,
            options: [["guildMan", "Exit the Guild Hall"]],
        },

        guildNo: {
            text: `You are intimidated by the quest and decide not to sign up. You walk out of the guild hall with a few other people who expected the quest would be easier. As you waddle away from the crowd, you trip and fall into a mud pile. You stay face down in the mud pile for a while like the coward you are. Rejection of your fate will be punished harshly. You may continue for now, but know that cowardice will be punished.`,
            options: [["guildMan", "Okay..."]],
        },

        guildDont: {
            text: `You decide that you don’t need the permission from the guild to do a slaying quest. As long as you bring back the head of the demon, then you should be handsomely rewarded for your efforts. So, you decide to get a headstart on everybody else and go straight to the mountain.\n\nYou stand before the mountain, an immovable object on your quest.`,
            options: [["trail", "Take the Trail"], ["climbMountain", "Climb the Mountain"], ["cave", "Enter the Cave"]],
        },

        guildMan: {
            text: `As you leave the guild hall, you see an old man motioning you to go near him. The old man indicates that he needs to speak with you privately. You two go into a tavern and he starts talking.\n\n“Liufewffhfwfhwufiwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwhawuefuaewfhnasdvjka”, said the wise old man.\n\nWhat?\n\nYou faint and pass out on the table. \n\nA dream starts with you on a desert island in the middle of tropical waters. You walk along the beach until you see a familiar silhouette in the distance. It is the old man you were just talking to. You walk up to him and he turns around to face you.\n\n“It is your destiny to kill the demon king at the top of Mount Ecathia. What awaits you up there is for you to find out.”\n\nYou are speechless at the fact that his words are now intelligible. You now have a flurry of questions to ask him, but only one comes to mind at the moment.\n\n“Why did you make me pass out in the bar?”\n\n“..........”\n\nHe looks away into the distance.\n\n“...because it was funny.”\n\nYou warp back into reality where an empty chair now sits in front of you. The old man is nowhere to be found.\n\nNext morning, you go to the mountain. It stands before you, an immovable object on your quest.`,
            options: [["trail", "Take the Trail"], ["climbMountain", "Climb the Mountain"], ["cave", "Enter the Cave"]],
        },

        trail: {
            text: `You walk on the trail and halfway on the trail, you see a troll on the path leading to the top.`,
            options: [["trailFight", "Beat That Sucker Up"], ["trailFlee", "Sneak Around It"]],
        },

        trailFight: {
            text: `You run up to the troll and punch it with your fist. It dies in one hit to your overwhelming strength. He drops a golden sword and you pick it up.\n\nFollowing the trail further, you meet the demon king at the top.`,
            options: [["rushIn", "Rush In With the Sword"], ["slowIn", "Begin an Honorable Fight"]],
        },

        trailFlee: {
            text: "You attempt to sneak around the troll, hoping to not draw it's attention. However, this troll is wearing glasses and has been prescribed a hearing implant. Having noticed you, it rushes over to you, picks you up by the leg, and flings you off of the mountain."
        },

        rushIn: {
            text: `You rush in with the golden sword, hoping to take him by surprise. \n\nAfter a long battle, you eventually slay the demon king. But, you've sustained heavy wounds and will die soon. You look into the sunset and smile as you fade away as you have saved the world.`
        },

        slowIn: {
            text: `You appear before the demon king, sword in hand. He looks up at you from his chair of skulls. "Very well then." After a long and arduous battle, you kill the demon king and save the world. You decide to leave the sword in his skull for good.`
        },

        climbMountain: {
            text: `You begin to climb the mountain with your hands and your wit.\n\nHalfway to the top, you see a monstrous amalgamation of a bird and mountain lion. It spots you out of the corner of it's eye, emitting a loud screech.`,
            options: [["throwRock", "Throw a Rock at It"], ["climbFaster", "Start Climbing Faster"]]
        },

        throwRock: {
            text: `The Griffin dies after you throw a rock at it. A golden feather falls from the sky and you catch the feather and put it into your bag. You continue climbing to the top to meet the demon king.\n\nThe demon king is actually a giant clown.\n\n“Tell me a funny joke”, the clown says.`,
            options: [["tickle", "Tickle the Clown"], ["notFunny", "Tell an Unfunny Joke"]]
        },

        tickle: {
            text: `The clown laughs hysterically and blows up. Confetti falls from the sky and a giant message appears in front of you.\n\n“GOOD JOB”\n\nYou stand there dumbfounded and contemplate jumping off the mountain in spite of the creator of this world.`
        },

        notFunny: {//corrupted text for funny
            text: `G̶̨̺̺̯̠͓̪̦̫͎̎͆͗͌̏̈͂͌̚̕ơ̷͕̳̲̙̬̐̒͜ỏ̴̺̹̭͗̄̓̈́̔̾͆̍͌̍̕̚̚d̷͕͓͎̐b̶̨͍͇̞̲̬̭̮̟͔͊̃͌̄̌̐̈́̕͘ͅy̶̪̣̭͍̩̥̲͆̈́̑̈͌̍̚e̶̤͆͐̋́̂̑̒̋͝͝ ̴͉̮̦̘̬͙͔̜̼͔̲̃̋͋̊͠Ĝ̶̡͉̗̦̜̫̘̳̲͍̤̣̯̾͗͆̄̃͝ȯ̸̹͚̦͈̞̲̞̺͈̭̖́͆͑͐̑́͜ȏ̴͔̆̐̑̓͒̑͆͂̓d̸̢̡̡̗̤̙̮̠̮̫̽͋̀̉̏̐͊͂͘̚b̵̡̛̫̲̪̟̲̲͛̄̊͆̃̐͂̚͘̕͠y̸̡̲̘͕̲̠̒̂̏͜ȅ̷̮̺̦͈̼̱̫̟ ̸͕̘̯̖̪̟̦̘̫̋̾̐̅̌̌̏͐̊̈́̅͗G̷̢̲̤̠̙͍͚͇̩͕͙̩̻̞̈̂̚͜o̵̠͗̑́̈́̏ő̷̺͍̜͈̞͎̻̣̱͂͌̎͛̇̈́́̋͒̅̌͘̕͠d̸̹̙̝̱̠͕̲̝͍̦͔̦͋̓̉̓̄͐͒͝b̶̧͍̟̭͕̰͔͚̫̻͓̈́͊̑̎̂͌͐̀̄̎̍y̸̧̱̦͉͗̀͆͘͜ę̵̽̐̄͝ ̶̡̄̎̀̉͐͐̓̃̈̿͗̾̂̓̕G̸̪̯̺͈͇͉̠͈̦̐͛͂͝͠ͅơ̶̧̨̪̦̯̙̯̻͍̓̃̓̔̓̉͑͋̓̀̔̈́͘̚ͅơ̷̡̠̰̲̟̩̯̼̙̬̂̐̓ḍ̷̛̮͕̻͊͊͐͋͑̍͌̿͌̽̒͐̋̚ͅb̴̢͖̻̥͔͈͔͉̩͔͗̓ͅy̶̖̦̗̟̱̏̎͌̑͑̔͝e̴̘͔̗̹̦͇͇̝͗̂̇ͅ ̴͈̱̭̎Ģ̴̛͚̦̯̮̜̫̰͍̠̖̖̾́̀͗̈́͗̎̆̈́̚͝ͅö̸͎̣̺͎́̀́͋͒̂͝o̸̦͈̘̜̝̗̮͐ͅd̷̨̻̞͉̣̯̭̙̘̊̆̔̀͊̍̄̓b̸̧͙̞̣͕̥̞͙͉̟̮̏̒́̓̈̓͒y̵̨̱̝͇̬͐̈́̈̐̄͗̇̿͆͑̔̚͝ę̵̡̩̰̙̩͎̗̆̓ ̷̧͓̫̦̯͇̲̩̻̑ͅG̴̖̤͙̗͖̤͓̈́͛̈̕o̷̧̖͎͐̇̈ỏ̶̘͕̞̤͆d̷̨̰̠̣̬̞̗̖̱͍̥̣̹́̋͗̃͜ͅb̴̼̻̱̱̮̳͈̿̏͜͝y̵̨̹̫͉̺͎̝̬̹̜̼̲̼͒͋̃̈́͌̆̈̔͆̒̉̓͘ͅè̵̺͚̻̬̠̰͈͔͙̦̙̈́͆̍͂͊̄ ̶̨̘̖͓̈́̾̽̋̊̔̐̽G̴̡̲͌̓̋̑̐̈ọ̶̼͐̋̀ǫ̸͚̩̲̞̃̀̈́͂̊̄̈̚ḍ̴͙̹̯̜̬͈̬̣͔͋̾̀͋̎́̾͠b̶̧̥͈̻͓͉̀̃̓͌̋̋̈́̑̓͒́̕͜͝͝ỹ̶̢͉̼̦̬͓͍̻̞̥̟̟͜e̵͔͐̑͗͛̀͌͛͐ ̷̧͔̫̳͍̰͔͔̺͒̏͗͐̊̒̈́͑̚͜͜͠Ģ̶̩̥̣̝̹̯͓͕̤͓̬̈́͑̏͌̾̈̃̿̚͜ǒ̸̧͇͕̝̬͉̪̭̰̰͉̿̈́̇̃͐̃̀͗͘̕͘o̵̧̢̦̠̫̫͐̊͆̐̿̏̽̏́͌̏̕̕d̵̮̣͠b̶̩̙̗͓͚̤̽̈́̐́ͅỹ̶̙̼̻̩͖͚͍̦͊̍̒̐̐́̚̚͜͝͝é̸̡ ̵̧̗̺̘̪̣̞̼̪͓̣̭̹̩̅͂͗̏̋͂̍͠͠G̶̢̡͎̩͍̣͎̭̯͙̿́̑͊͋̑̈́͠ͅợ̶͇̮̲͙̟̘͙͕̑̂̾̊̈́̅ͅǫ̴̻̟͇̦͒̒̈́̈́̑̓͒̌̍̈́͂̆͌͘͘d̷̬͓̰͚̔́̂̏̿͐͑͗̍̀̕͠b̴͓̝̖̟̟̦̙̦̔͐̄̄y̷̛̺̲̦̺̮̬͓̟̝̾̒̽̓̀͜ę̵̢̛̛͎̼̌̈́̓̏͊̅͒̽͘͝ ̸̢̢̨̡͇̯̤͇̭̗̤̞̙̊͒͒̀͆̆̎G̸͍͈͕̱̹͕̟͇̫̱̪̹͔̘̔̋̏̎̎̿̂͋̎̽̓̌͐̚ͅo̴͚̥̩̅̾̆̔͊̒̿͋̽ͅò̶̙̱̝̭̣͉̳̭͛͂͒͛̑̉̒̇d̶̨̢̡͎͇̖̤̱͓̰͕̝͍͐̇̌̑̏͌̕͠͠b̴̺̼̒̑̏́̈́̋͗̅̍̈̓̔̚̕y̴̢̝̪̺̜̣͔̞͑̑̔̽̓̿̅ḙ̷̄͊̄̈́́̒̿̊̔͊͠ ̶̢͖̲̫̖̣̙̭͌̽̓̏̅̏͋̇̎͠G̵̬̱͖͎͙͇̖̺̪͓͑̈́̔́̋̄̔́̅͐̋͂͝o̷̝͒̂͂̀͛̄͆̔̐͆͌̕̕͝͝ǫ̶̨͖͈̏̾͗́̾́̈́͠ͅd̷͔̠̼̯͐̐̆͌͊̅̈́͛̅̕b̵̡̯͖̰͓̜̝̲̗̬̄̄͝y̵̛͙̜̭̫̤͓͔̩͈̼͗̂͌̈́͐ę̴̝͔͈͚̘̘̆̂͋̐̃̏͆͝͝ͅ ̶̥̅̃̇̐͠G̴̨̨͎͇̪̬̳͇̲̯̞̫͚̍͌͗̀̍̆̄͗̀̋͜͝͠͠ö̷̩̠͔͕͎̱̫͔̜̺̤͈̝̰́͒͌̈́̐̈́ȍ̷̞͙͚̰͎̭̩̰͎͈̰̙͉̆̕d̶͕̼̰̲̟̝̼̜͓̼͗̀̇̀̋́̍̊͘͝b̴̧̨̗̠̤̳͉͚̙̣̹̫̦̾͒͛̑̌̾̀͠y̴̼̳̰͈͛͆͐̎̄̍͛͂͝ę̷̧̡̭̤̥͎͙̫̈́ ̴̢̛͓͎͕̌͊̀̆̽̀̈́͘̕Ģ̵̮̟̫̻͎̙̫̻̑̅ọ̷̡͕̪̜̬̭̯̭́̍̔o̶͍̘͗̄͌́̀͗̿̍̓̇̎̕̕͜ͅd̶̬̯̎́́̇̚b̸̙͖̥̠͚̥̼̗̩͍̩̾͆̅̀̑̒ͅͅͅy̵̛̳̣̩͍̮̙̱͕͉̰̜̤̍̔̈́̊̄̈̾̒̀͠͠é̸͙͍̜̺͙̰̳͙̙̬̔̂̔̓̿͑̓͜ ̴̳̰̝̤̮͕̪͖̯̱̅̈̓̆̀͗̿̚G̸̨̰͕̰̘̹͍̼̟͍̹̘̯̰͋͛͛͋͐́̈́̕̚ó̷͈͎̫̣͒͆͋̇̑͜o̶͉̒̓̊̊̏̄̃͋͑̾̓̀͊͘̕d̷̹͓̗̣͙͓͍͇̫̳̥̜͆̆͊͛͐̀̚b̵̪̤̟̟̜̲̤̊̑́̋̂͗͑ÿ̷͕̣̬͓̻̲̣̘́̎̾͒̆̓̏̚͜e̷̩͇͉̖̜̣̾͜ ̸̡̛͉̺̟̩̝̫̰͔̭̭̥͓̇͐̊̄̈́̇̂̽̄́́G̶̥̻͗͛̇̍̿̔̑̄̀̉̿͘ǫ̷̹̜̝̣̥̐̈́o̶̡̻͎̘̫̗̺͕̽̓̄d̷̛̠̖̯̍̀̍̈̀̈́̄̍̽̈̌̓̕͝b̴̡̜͖̲̰̖̩̯̳̦̩̺͝ỳ̷̨̢̦̱̰͇̯̦̠̠̦̥͍͂̂͊͗̓̾̃̓͌̂̄́̿͑͜e̴̢̤̝͇̳̱̖̟̝͒͌̈́́̽̈́̊̑̕͝͝ ̸̪̑̈́̆̇͒͒̊̌͆̿̾͝͝͠G̷̠̺̥̋̀́͊͐͊̇̆̌̓͆́͐̚͠ó̷̻̰̘̰͔͛̄͛̈ô̶̞̗͎̠͑̑́̾͠d̵̢̖͔̤̙͉̭̝̠̳̖̣͒͐̇̔̊̆̈̈̌͜ͅb̷̢͙͉̣̖̝̟̌̓̅͌̆y̶̛̠͍̘̰̜̗̣͚̌̈́̐͊̽̆͌͂́̀͐̋͠͝e̴̡̹͎͍͈̲̱͐̂̅̅͌͐̐͆͝͠͝͝ ̴̨̰̭͓̮́̿̓G̶̢͙̳̞͊̒̓͑̕͜ͅở̴̡̫͈̂͌͐͂̎̀͌̄̇̋͗͘ơ̶͖̙̞̩̼͉͓̣̙̣̪̺͔̠̎͋̋́̃̅͆̑̏̓̈́̊̀d̶̠̙̪͓́́̐̋b̸̛͎͓̙̞̰͔͖́̐̇͂̀̈́̕͝ͅͅy̵̡̩̖͙̱̆è̵̡̙̳̜̳͔͍͈͉̹͚̟̓̀́̄͂̏͗̓͘͝ ̷̨̨̡̡̖̝̪̙̻̺̙͈̃̆̀͗̎̍ͅ`
        },

        cave: {
            text: `You enter a dank dark cave in front of you. After a bit of walking, you reach a collapsed minecraft. Some more investigating reveals a crate of sticks of dynamite, conspicously placed for your benefit.`,
            options: [["leaveCave", "Exit the Cave"], ["dynamite", "Use the Dynamite"]]
        },

        leaveCave: {
            text: `You walk out the cave and get smited. You are lacking ambition and will be punished.`
        },

        dynamite: {
            text: `You grab a few dynamite sticks from the surrounding boxes. It works and the area opens up. You pick up a serrated dirk from the floor.\n\nYou walk further into the mine and encounter a room full of mirrors. A shadowy figure appears from your peripheral vision and walks up to you. He tells you that the mirrors show the reflection of a terrible creature.\n\nYou’re the demon king. He tells you that you have to kill yourself for the sake of the world.`,
            options: [["stab", "Stab Yourself"], ["reject", "Reject"]]
        },

        stab: {
            text: `You grab the serrated dirk from your bag and kneel on the ground. You stab yourself in the stomach and fall to the ground. Your vision fades away as your last thoughts are of bittersweet thoughts of death for the greater good.`
        },

        reject: {
            text: `You decide that you have had enough with this world and harness your demon king powers to kill the shadowy figure. You become the demon king, plunging the land of Terrarunel into darkness for all of eternity.`
        },

        climbFaster: {
            text: `You try to climb the mountain faster in a hurry. You dodge multiple attacks from the Griffin, but you fall and die due to losing your footing.`
        },

        home: {
            text: `This hero stuff, you know, you don’t feel you’re all that cut out for it. With all of your resolve, you pack your bags and leave the city of Aicamed, back to your hometown of Lydia.`,
            options: [["home2", "Travel Back Home"]]
        },

        home2: {
            text: "After several days of travel, you finally reach Lydia. Home at last. Perhaps, for an occupation, you’d instead start a farm. \n\nOn your way back to your parents’ house, you browse through the farmer’s market; pondering on seeds to plant for your farm. A posted flyer on a nearby stall catches your eye.\n\n“Help Wanted! Brave Men and Women Needed to Fight the Demon King!” A flyer for the local guild hall.\n\nDemon King this, Demon King that, the name sounds like an urban myth at this point. A conspiracy: to keep the common folk in check. No one has ever personally seen the Demon King and his army—all of the stories were tales of a tale, she said or he said. \n\nStill, the towns the Demon King has “conquered”, you’ve seen those names on the maps. You’ve seen the smoke, rising in the distance. Perhaps it was time to finally do something.",
            options: [["homeGuild", "Go to the Guild Meeting"], ["homeParent1", "Go Home"]]
        },

        homeGuild: {
            text: `You can’t ignore a calling. Making your way to the guild hall, you push the thoughts of your newly decided radish farm to the back of your mind.`,
            options: [["homeGuildMeeting", "Enter the Guild Hall"]]
        },

        homeGuildMeeting: {
            text: "As you swing the door open to the guild hall, dust flies into the air and makes you sneeze. It's basically empty, save for a few chairs and tables. You walk up to the receptionist who is dozing off behind the counter.",
            options: [["homeGuildMeetingNext", "Wake Up the Receptionist"]]
        },

        homeGuildMeetingNext: {
            text: `You loudly clear your throat. The receptionist jumps awake. "Wha- oh! Welcome to the Hero's Guild! How can I help?" You explain you want to become a hero and fight the demon king. "Actually, we're not really looking for heroes right now, but we are hiring for a mailman. What do you say?"`,
            options: [["declineMailNoTimepiece", "Decline"], ["acceptMail", "Accept"]]
        },

        acceptMainTime: {
            text: `Whatever, sure. Delivering mail sounds more fun than radish farming. You begin training as a mailman. One day while running errands, you help an old lady with her cat. She rewards you with a small and intricate hourglass that you shove in your pocket for later.`,
            options: [["acceptMainTime2", "Continue Training"]]
        },

        acceptMainTime2: {
            text: `Training isn't hard, but it does require a supervisor. The guild assigns you a mailmentor.\n\n“Heya kid, nice to meet you.” A man dressed in a mailman getup greets you. His name tag reads Norman. \n\n“We’ve got an assignment to take care of. Goes to a house near the base of Mount Ecathia,” he reads off of a sheet of paper. “Here, why don’t you carry this since it’s your first full day?” he says, handing you the package. \n\nYou gather everything you need and make your way to the destination.\n\nOn the way, you come across a river blocking your path. What do you do?`,
            options: [["runRiver", "Book it Across the River"], ["searchRiver", "Search Along the River for a Way Across"], ["askRiver", "Ask Norman for Help"]]
        },

        homeParent1: {
            text: `No, you made that choice when you left Aicamed. This wasn’t your fight, nor will it ever be. You don’t give the flyer any more thought as you head straight for your parent’s house.\n\nYou make it to the house as the sun sets. It doesn’t look a day older than when you left it. Before you can even walk up to the door, it swings open to reveal your mother and father.\n\nYou spend the night catching up and eating a home-cooked meal, laughing and enjoying the festivities with your parents. Eventually, you retire for bed to get an early start tomorrow.`,
            options: [["homeParent2", "Dream Big"]]
        },

        homeParent2: {
            text: `As you dream about the future of your life in the sands of your unconscious dream world, darkness begins to take root. It manifests itself into a shadowy figure that stands before you.\n\n“Defeat the Demon King. Mount Ecathia awaits you. Take hold of the future.” The shadow holds out its hand. Instinctively, you grab it. \n\nYou wake up in a cold sweat. What was that? You look down at your hand. Nothing out of the ordinary. As you sit there, thinking about the meaning of your dream, the distant sounds of fire and screaming pull you back to reality.\n\nBefore you can even process this, fire engulfs your house. You run outside, searching for your parents. They are nowhere to be found. Then you see him in the distance. \n\nThe Demon King and his army.`,
            options: [["homeParent3", "..."]]
        },

        homeParent3: {
            text: `Your city has been reduced to ashes. Everything you loved. Your new life. Burnt to the ground. It all happened too fast.\n\nThe Demon King turns to face you. You can’t see his eyes, but you can feel his piercing glare. Your knees give out under the weight of his pressure. \n\nHe stares at you for what feels like an eternity. Mist rises out of the ground, enveloping everything in sight. You quickly blink and rub your eyes, trying to see something. The mist instantly clears, leaving only you and the ruins of Lydia. \n\nYou close your eyes and pound your fist into the ground, rage replacing your fear. All you ever did was run away from your problems, and look where that got you. You remember what the shadow said. Mount Ecathia.\n\nDark energy emanates from your limbs into the ground. With so much as just a thought, you are instantly transported from what was left of Lydia to the base of Mount Ecathia. `,
            options: [["trail", "Take the Trail"], ["climbMountain", "Scale the Mountain"], ["cave", "Enter the Cave"]]
        },

        helpWoman: {
            text: `Guild meetings can wait, this is what being a true hero is about!\n\nAfter a bit of searching, you come across an old woman.\n\n“Oh, please help me! My cat is stuck in that tree!” She points to a nearby tree. You see the cat. Not that bad of a climb.\n\nYou had the snarling cat back to the thankful old lady.\n\n“Thank you dear. I’m very sorry for wasting your time. Here, take this at least.” She hands you a small and intricate hourglass. Hey! That reminds you that you’re late to the guild meeting. You take off again, towards the meeting.`,
            options: [["helpWoman2", "Run Faster"]]
        },

        helpWoman2: {
            text: `Out of breath, you stumble into the guild hall. The tables are empty, save for a few empty bottles and plates. It seems that the guild meeting is already over. A recruiter, cleaning the tables, walks by and notices you.\n\n“Oh! Hi, how can I help you?"\n\nYou explain to her you want to join the guild to be a hero. \n\n“I’m really sorry, but we filled up on heroes during the guild meeting. We are looking for people to deliver the guild’s mail though, maybe you’d be interested?”\n\nYou came here to become a hero, not a mailman! But, maybe people can become heroes in their own way?`,
            options: [["declineMailTimepiece", "Decline"], ["acceptMail", "Accept"]]
        },

        declineMailTimepiece: {
            text: `You decided to leave empty handed. A mailman can’t be a hero, just a mailman.\n\nYou make your way back to your house. Lying down on your bed, you play with the hourglass the lady gave you. The sands glow with imperceptible distinction. The hourglass slips out of your hands, falling onto the ground and shattering.\n\nThe world goes black and white. Time stops.`
        },

        declineMailNoTimepiece: {
            text: `You decided to leave empty handed. A mailman can’t be a hero, just a mailman.\n\nYou make your way back to your house. Lying down on your bed, you decide to take a nap.\n\nGuess it's time to start on that radish farm.`
        },

        acceptMail: {
            text: `Alright then. Might as well become an unspoken hero. It’s probably more fulfilling this way.\n\nYou begin training as a mailman. Not much training to do, delivering packages isn’t hard. But you do require a bit of supervision. The recruiter assigns you a mailmentor.\n\n“Heya kid, nice to meet you.” A man dressed in a mailman getup greets you. His name tag reads Norman. \n\n“We’ve got an assignment to take care of. Goes to a house near the base of Mount Ecathia,” he reads off of a sheet of paper. “Here, why don’t you carry this since it’s your first full day?” he says, handing you the package. \n\nYou gather everything you need and make your way to the destination.\n\nOn the way, you come across a river blocking your path. What do you do?`,
            options: [["runRiver", "Book it Across the River"], ["searchRiver", "Search Along the River for a Way Across"], ["askRiver", "Ask Norman for Help"]]
        },

        runRiver: {
            text: `Putting one leg in front of the other, you book it across the river, package in hand. You fight the river with all the power in your legs. However, you skipped leg day. The river sweeps you away as Norman watches.`
        },

        searchRiver: {
            text: `You begin following the river back upstream, looking for a way over. A large log laying across the river presents itself, and you and Norman use it to cross the river. \n\n“Nice thinking kid! You’re gonna go far at this rate.” Norman heartily pats you on the back.`,
            options: [["continueWalking", "Walk On"]]
        },

        continueWalking: {
            text: `You begin to approach the destination. The surrounding forest begins to wither away, leaving dead trees. In the distance looms an ominous mansion. The box says this is the location.`,
            options: [["walkDoor", "Walk Right Up to the Front Door"], ["labelDoor", "Turn the Label Upside Down"], ["notDoor", "Decide This Isn't the Right Place"], ["askDoor", "Ask Norman if This is the Place"]]
        },

        askRiver: {
            text: `Asking for help when you’re stuck isn’t bad. You ask Norman if he can think of a way to get over the river. He thinks for a second before motioning for you to stand back.\n\nHe kneels down and puts his right palm on the ground. A portion of the river he was facing suddenly freezes, allowing you to cross the now icy river. \n\n“Don’t be afraid to ask for help when you need it. You can’t always rely on only yourself,” he advises.`,
            options: [["continueWalking", "Walk On"]]
        },

        walkDoor: {
            text: `You walk right up to the front door. It’s double the size of a regular door. You stare at it, and the door seemingly stares back. What do you do?`,
            options: [["atDoorRing", "Ring the Doorbell"], ["atDoorWalk", "Enter the Door"]]
        },

        askDoor: {
            text: `You ask Norman if this is the right place.\n\n“The labels are all magically applied with the right destination. But it doesn’t hurt to go up and ask yourself.” He winks at you.\n\nYou walk right up to the door. It’s double the size of a regular door. You stare at it, and the door seemingly stares back. What do you do?`,
            options: [["atDoorRing", "Ring the Doorbell"], ["atDoorWalk", "Enter the Door"]]
        },

        labelDoor: {
            text: `You turn the label of the package over. Perhaps you read it wrong? The letters on the label seem to agree, moving around until they formed a destination.\n\n“Been a while since it’s done that,” Norman remarks.\n\nBoth of you head to the new destination. After several hours, you arrive at the quiet village of Kerning. A quaint village house, the destination for the package.`,
            options: [["nextDoor", "Knock on the Door"]]
        },

        nextDoor: {
            text: `You knock on the door. A burly man wearing an eyepatch answers.\n\n“Hello?”\n\nYou hand him the package. He opens it and stares at the contents. A minute goes by. Then another. It feels like eternity passes before he reacts. \n\nHe drops the package and falls onto his knees, bursting into tears. Slowly, he stops crying. He steadies himself, and apologizes.\n\n“Sorry you had to see that. I have something I need to do.” He steps out of his house and punches into the ground, pulling out a shimmering blade. Steeled with determination, he heads off to Mount Ecathia.`,
            options: [["nextDoor2", "Head Back"]]
        },

        nextDoor2: {
            text: `You return to the guild hall with Norman. A week passes before you hear any interesting news; the Demon King was defeated by the Twilight Sword of Khan’ria. \n\nThe world is saved. You played your part, but you wish you did a bit more.`
        },

        notDoor: {
            text: `No way this is the right place. This is getting wayyyy too creepy for you. You signed up to be a mailman, not to kill yourself. \n\nNorman looks at you disapprovingly, and you die of shame.`
        },

        atDoorRing: {
            text: `Since this is a house, then it has a doorbell. You look around for a bit before spotting it and ringing it. \n\nThe door creaks open slowly. It eventually opens to reveal a towering knight covered in black armor. The helmet the knight wears obfuscates all of his facial features, and would also obfuscate his eyes if they did not glow.`,
            options: [["skele1", "That's a Big Boy"]]
        },

        atDoorKnock: {
            text: `The mansion rumbles. You hear some thudding behind the door. The door slowly opens, and an eye covered in shadow stares at you.`,
            options: [["eyeSpeak", `"Package Delivery!"`], ["eyeStare", "Stare at the Eye"]]
        },

        eyeStare: {
            text: `You and the eye have a staring contest. Before long, you can feel yourself disintegrate into ash. \n\nGuess you lost that one.`,
        },

        atDoorWalk: {
            text: `You walk through the door. Before Norman can stop you, a bolt of lightning erupts from inside the house and strikes you, killing you instantly.\n\nDidn’t anybody teach you about manners?`,
        },

        atDoorSpeak: {
            text: `You call out, hoping for an answer. The mansion begins to rumble, before the door slams down onto you. Ouch.`,
        },

        eyeSpeak: {
            text: `You speak, oozing confidence. The eye looks surprised.\n\nThe door opens fully to reveal a towering knight covered in black armor. The helmet the knight wears obfuscates all of his facial features, and would also obfuscate his eyes if they did not glow.`,
            options: [["skele1", "Emphasize the Package"]]
        },

        skele1: {
            text: `“I forgot we were receiving a package today.” The knight motions for you and Norman to come inside. You both oblige.\n\nYou are led down a labyrinth of hallways, rooms, and corridors, before finally reaching a massive room. \n\nA skeleton wrapped in red and black robes sits on a throne before you. The Demon King’s general. Its dusty hand reaches towards you.`,
            options: [["skele2", "Hand Over the Package"]]
        },

        skele2: {
            text: `You walk up and give the skeleton the package.\n\nThe skeleton slowly opens the box. Its bones grind against one another, in a slow, monotonous motion. Once the box is fully opened, the skull of the skeleton stares at its contents. \n\nIt feels like an eternity before something happens. The skeleton looks back up to a nearby knight.\n\n“Disband the army,” it speaks. “We’re done.”`,
            options: [["skele3", "Brace"]]
        },

        skele3: {
            text: `At the skeleton’s word, the mansion rumbles once more. The walls of the mansion sink into the ground, the furnishings turning back to bone and tombstone. Eventually, only you and Norman are left, standing in the center of the graveyard.\n\nNorman puts his hand on your shoulder. “We’re all heroes, kid. From protecting others to delivering packages, heroism lies in the heart.”\n\nYou take his words to your own heart.`,
            options: [["skele4", "Head Home"]]
        },

        skele4: {
            text: `As you walk out of the graveyard, a piercing scream is heard off in the distance. A large winged figure covered in tattered scraps and wielding a massive sword flies overhead, landing in front of the pair of you. The Demon King.\n\n“YOU! YOU DID THIS!” He points his sword at both of you and charges.`,
            options: [["runDemon", "Book It"]]
        },

        hourglass: {
            text: `You pull out and throw the hourglass at the Demon King in one swift motion. \n\nThe Demon King writhes around in agony, aging rapidly before melding into a pile of ashes.\n\nAfter the battle, Norman looks at you inquisitively. “That hourglass… Who gave it to you?”`,
            options: [["hourglass2", "Tell Him"]]
        },

        hourglass2: {
            text: `You start to tell him before he puts his hand up to stop you. “Wait. I don’t need to know. Whoever gave it to you trusted you.”\n\n“Well,” he says, whistling. “Guess we should get back to work, eh? Got a lot to do ahead of us.” He begins to walk back in the direction of Aicamed.\n\nYou smile.`
        },

        runDemon: {
            text: `You and Norman book it, dodging his initial swing. You run in a direction together, the Demon King hot on your trail. Now what?`,
            options: [["useHourglass", "Use the Hourglass"], ["askNorman", "Ask Norman For Help"]]
        },

        useHourglass: {
            text: "Sure, the hourglass. But how?",
            options: [["hourglass", "Throw the Hourglass at the Demon King"], ["turnHourglass", "Turn the Hourglass"]]
        },

        askNorman: {
            text: `You ask what you and Norman could possibly do to get out of this situation.\n\n“What I should’ve done a long time ago.”\n\nHe turns to face the threat. Snowflakes emit from his hands, pulling a blade of ice from the palm of his left hand. Before you can even comprehend what happens, a flash of cold light knocks you out.`,
            options: [["askNorman2", "Wake Up"]]
        },

        askNorman2: {
            text: `You wake up on the ground. Nothing but empty plains that stretch across your view appear for miles. His satchel lies in your lap. A message, cold to the touch, is burnt onto the side.\n\n“Anybody can be a hero.” \n\nYou head home, changed forever.`
        },

        turnHourglass: {
            text: `You fumble in your pockets, looking for the hourglass. Once you pull it out, you pray and turn the hourglass over. The sands of time slip beneath your feet.`,
            options: [["opener", "Rewind"]]
        }
    };

    var playerChoices = ["opener"];//array containing variables


    var x = document.getElementById("beeg");//start button
    var restart = document.getElementById("restart");//restart button
    var playArea = document.getElementById("playArea");//refers to play area
    var buttonArea = document.getElementById("buttonArea");//refers to button area

    function createButton(btnText, choice) {
        var button = document.createElement("button"); //creates button
        button.innerHTML = btnText;//changes button text according to "options" in array
        buttonArea.appendChild(button);//adds button that has changed name

        button.addEventListener("click", function () {//when button that is generated is clicked, add choice to playerChoices and run createStory
            playerChoices.push(choice);
            createStory();
            window.scrollTo({ top: 0, behavior: 'smooth' });//shamelessly stolen from stackOverflow, scrolls to top smoothly on button press
        });
    }

    function addStory(text) {//changes playArea text to choice
        playArea.innerHTML = text;
    }

    function createStory(text) {
        let pageNow = playerChoices[playerChoices.length - 1];
        playArea.innerHTML = "";//empties play area
        buttonArea.innerHTML = "";//empties button area
        for (let idea of playerChoices) {//creates variable idea and uses with array playerChoices
            addStory(story[idea].text)//based on button clicked, run addStory with text
        }
        for (let idea of story[pageNow].options) {//creates variable idea and used with story.options
            createButton(idea[1], idea[0]);//creates buttons using options text
        }

    }

    restart.addEventListener("click", function () {
        location.reload();//reloads page on click, resetting game
    });

    restart.style.display = 'none';//hides restart button

    x.addEventListener("click", function () {//on start button click
        createStory(story.opener.text);//run createStory
        restart.style.display = '';//unhide restart button
    });

}//end of window.onload, do NOT put any JS after this    