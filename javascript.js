var playerChoices = ["prolog"];

//User Interface
var start = document.getElementById("begin");
var textArea = document.getElementById("playPlace");
var buttonArea = document.getElementById("buttons");
var beanCounter = document.getElementById("beanCounter");
var graphicInventory = document.getElementById("inventory")
var inventory = { items: [], beans: 0 };

num = 1;

var story = {
    prolog: {
        text: `The year is the far distant future year of 2012. The Great Bean-pression of 1932 led to a great decline in bean sale and production that has yet to be resolved, despite countless attempts from government powers. This led President Hoover to sign an act of Bean repression. The effects of this are shown as beans now have more economical power than the dollar.
            You are a lonesome plumber, living a peaceful life, left to you and your thoughts alone, and you know nothing of violence, your brother on the other hand has realized the power of violence. You look up to him and thrive to understand and grasp the very concept of the power he wields. You've attempted several times but failed constantly. Numerous times have you tried to rob the elderly lady in apartment room 107, but in your valiant efforts you end up giving her all of your belongings. You continue to work…`,
        options: [["ditch", "Ditch the Job"], ["knock", "Knock on Door"]]
    },
    ditch: {
        text: `You leave the job site and head to town, avoiding the monotony of your work life.`,
    },

    knock: {
        text: `You are greeted by a client and she invites you to her home. She guides you to her bathroom and you start to get to work.

            “Whoa” you state “these are some dirty pipes”
            
            “You want to see something else!” she exclaims
            
            You nod with excitement
            
            “Ok close your eyes” you hear a rip and the 2 pounds of TNT strapped to her chest detonates.
            In the rubble all that remains are you and the pipes…
            
            “Oh brother” you sigh as you now know you have to get back to work.
            
            You return to the pipes. Staring down into the long abyss, before you know it, hours have passed. Amidst the silence and the constant ringing in your ears you reach down the pipe, pulling out the bloated, dead corpse of a blue rat.
            
            “Oh brother” You state as you toss aside the lifeless rat into an old rusted bucket.
             You exclaim “Kobe!”
            
            You feel the job is finished yet you feel the urge to double check on your work.`,
        options: [["finish", "Finish the Job"], ["check", "Check the Pipes Again"]],
    },

    finish: {
        text: `You pack up, exit out the front door, and head into town...`,
    },

    check: {
        text: "You reach back down the pipe and pull out a can of Bush'sⓇ Baked Beans. (+1 beans) With the pipes now clear, you pack up, exit out the front door, and head into town.",
        options: [["town", "Go back to Town"], [true, "empty"]],
    },

    town: {
        text: "As you emerge from the train station into the bustling streets of Augusta, Wisconsin, where the abandoned Chestnut Hill Bush’sⓇ Baked Beans factory overlooks the population. So many opportunities, what will you do today?",
        options: [["lake", "Go to the Lake"], ["home", "Go Home"], ["shop", "Go to Store"], ["people", "Talk to People"]],
    },

    //lake ending
    lake: {
        text: "You decide to take the rest of the day off and go to the lake…\n You spend the day fishing…\n It is peaceful…",
    },

    //home
    home: {
        text: "You make your way back to your house on the outskirts of town. “I’m home!”, you exclaim as you walk in the door, but your words fall on deaf ears as you are ignored by the other residents.",
        options: [["look", "Look out Window"], ["pantry", "Raid pantry"], ["brother", "Talk to Your Brother"], ["dweller", "Talk to Basement Dweller"], ["town", "Go Back to Town"]],
    },

    look: {
        text: "You walk over to a nearby window and look out at your yard. Among the dead shrubbery and flowers you see a platypus with the number 17 scarred into its forehead. You stare at each other for some time…his black, heartless gaze eats away at your soul…your humanity. Eventually you break your gaze leaving you to shiver. By the time you look back you notice that he is missing. “How queer…” you think.",
        options: [["pantry", "Raid Pantry"], ["brother", "Talk to Your Brother"], ["dweller", "Talk to Basement Dweller"], ["town", "Go Back to Town"]],
    },

    pantry: {
        text: "You walk into your pantry in hopes of finding something to fill the ever growing void inside…you find a can of Bush’sⓇ Baked Beans.",
        options: [["look", "Look out Window"], ["brother", "Talk to Your Brother"], ["dweller", "Talk to Basement Dweller"], ["pantryBean", "empty"], ["town", "Go Back to Town"]],
    },

    brother: {
        text: `“Hello Lui” you say to your brother, Lui G.
        He slowly turns around to acknowledge you, “I’m going to the liquor store in a little bit, would you like anything?”
        “No, I’m ok”
        He turns back around, ending the conversation…`,
        options: [["look", "Look out Window"], ["pantry", "Raid pantry"], ["dweller", "Talk to Basement Dweller"], ["town", "Go Back to Town"]],
    },

    dweller: {
        text: `You head downstairs to check on your other roommate.
        “Hey, Benjamin. How’s the business going?” you address your roommate, Benjamin Yangbert.
        “Crypto is currently down in value and the bump stocks aren’t selling as well as they were.”
        “I’m sorry to hear that.”
        Before going back upstairs, you question why you still let him live with you and your brother. He was a friend in school and having him move in was supposed to be a way to make paying rent cheaper, but all his 3D printers and crypto mining rigs are raising electricity costs too much to make it worthwhile. Maybe it’s time to kick him out.`,
        options: [["look", "Look out Window"], ["pantry", "Raid pantry"], ["brother", "Talk to Your Brother"], ["town", "Go Back to Town"]],
    },

    //shop
    shop: {
        text: `You walk into the general store. Entering the store you see an American flag spray painted over a Canadian flag.
        “Heelloooo boody” the cashier states, you can clearly tell that he is Canadian, trying desperately to mask his accent.`,
        options: [["pie", "Purchase Pie"], ["magazine", "Purchase Magazine"], ["beans", "Purcahse Beans"], ["sell", "Sell"], ["town", "Go Back to Town"]],
    },

    pie: {
        text: `You see a blueberry pie on the shelf…
        “Benjamin would enjoy this” You think to yourself picking it up off the shelf and bringing it to the counter.
        “Alrighty, bud, one blueberry pie coming up!”`,
        options: [["sell", "Sell"], ["town", "Go Back to Town"]],
    },

    magazine: {
        text: `You open up the magazine, learning from it, you are entranced by what it teaches, learning of fighting and combat, all its variations, applications, and styles. Quickly you rush it over to the counter…
        “I need this!” You shout, slamming the magazine on the counter.
        “Okay buddy, one Detroit Urban Survival Training Magazine, by Dale Brown, coming right up!”
        (You now know of violence)`,
        options: [["sell", "Sell"], ["town", "Go Back to Town"]],
    },

    beans: {
        text: `“Alright, bud, one can of Bush’sⓇ Baked Beans, coming right up! These are a hot commodity nowadays, don’tcha know.”`,
        options: [["sell", "Sell"], ["town", "Go Back to Town"], [true, "empty"]],      
    },

    sell: {
        text: `“Sorry, but this ain’t that kinda store, bud.” He says, sounding as offended as he can.`,
        options: [["pie", "Purchase Pie"], ["magazine", "Purchase Magazine"], ["beans", "Purcahse Beans"], ["town", "Go Back to Town"]],
    },

    //talk to citizens
    people: {
        text: `As you make your way through the town you find many familiar faces walking every which way. Who do you want to talk to?`,
        options: [["eren", "Eren Krueger"], ["joe", "Joe Rogan"], ["psy", "PSY"], ["kanye", "Kanye West"], ["hogan", "Hulk Hogan (homeless)"], ["mrbean", "Mr. Bean"]],
    },
        //Eren Krueger
        eren: {
            text: `As you walk down the street you come across a very rugged and unkempt looking man sitting on a bench, you notice a void space where his leg should be, he is unaffected by your presence.`,
            options: [["hello", `"Erm...hello?`], ["helium", `“Did you know that all of Earth's helium will be completely depleted within 10-20 years?”`], ["people", "Leave"]],
        },

        hello: {
            text: `“Hm? Oh…Why don't you make yourself useful and move along? I've got mail to deliver."`,
            options: [["helium", `“Did you know that all of Earth's helium will be completely depleted within 10-20 years?”`], ["people", "Leave"]],
        },

        helium: {
            text: `“Oh my god is that true?"`,
            options: [["hello", `"Erm...hello?`], ["people", "Leave"]],
        },

        //Joe Rogan
        joe: {
            text: `You approach Joe Rogan.
            “*cough cough* Hey kid, I didn’t see you there.”
            You see a tall figure to his right.
            “Who’s that?” you ask.
            “Oh, he’s a friend of mine, Jar-Jar from Jamaica.”
            Jar-Jar approaches you, “*Koff koff* Hey-sa, how-sa it going mon?”
            “Oh wow! Jar-Jar from Jamaica, born in Wyoming, moved to California circa 1849! I’m a huge fan.”- you exclaim shaking his hand`,
            options: [["autograph", `"Can I have an autograph?"`], ["people", "Leave"]],
        },

        autograph: {
            text: `	You hand a can of Bush’sⓇ Baked Beans to him.
            “Thank you-sa!” - he exclaims, handing you the autograph.
            (-1 beans, +1 autograph)`,
            options: [["people", "Leave"], ["autographExchange", "empty"]],
        },

        //PSY
        psy: {
            text: `You approach PSY and he begins to notice you approaching him.
            “Oh my brother in heaven,” you exclaim, “it be PSY the man who led the trojan horse of K-pop to the western world”
            
            “그래 나야” he states
            
            “Huh?” you question
            
            “Yes it is me” PSY countries
            
            “Oh you speak english?”
            
            “No,” he countries “I can only say that and this explanation I am giving you now.”
            
            “Oh brother” you exclaim
            
            Changing topics amidst the awkward silence following, PSY turns to you and says
            
            “Kanye 와 함께 공연할 기회가 있었으면 좋겠어요."
            (I wish I had a chance to perform with Kanye)
            
            “Hmm, I see” you “state”
            
            I get the feeling that he wants to do something with Kanye`,
            options: [["people", "Leave"]],
        },

        kanye: {
            text: `You see Kanye West standing on the corner…`,
            options: [["morning", `"Aye, good morning, Kanye"`], ["album", `"When's the Next Album"`], [""]]
        }
};

function createButton(btnText, choice) {
    var button = document.createElement("button");
    button.innerHTML = btnText;
    buttonArea.appendChild(button);

    button.addEventListener("click", function () {
        playerChoices.push(choice);
        createStory();
    });

    if (btnText == "empty") {
        button.style.display = "none";
    }
}

function addStory(text) {
    textArea.innerHTML = text;
}

function createStory() {
    let pageUpdate = playerChoices[playerChoices.length - 1];
    buttonArea.innerHTML = "";
    buttonArea.innerHTML = "";
    for (let idea of playerChoices) {
        addStory(story[idea].text)
    }
    for (let choices of story[pageUpdate].options) {
        createButton(choices[1], choices[0]);
        if (choices[0] == true) {
            beanCounter.innerHTML = (inventory.beans += 1);
        }
        if (choices[0] == "pantryBean") {
            pantryBean = 1;
            beanCounter.innerHTML = (inventory.beans + pantryBean);
            console.log("pantry bean got");
        }
        if (choices[0] == "autographExchange"){
            beanCounter.innerHTML = (inventory.beans - 1);
            inventory.items.push("jjAutograph");
            checkInventory();
        }
    }
}

function checkInventory(){
    graphicInventory.innerHTML = (inventory.items);
}

start.addEventListener("click", function () {
    createStory(story.prolog.text);
});