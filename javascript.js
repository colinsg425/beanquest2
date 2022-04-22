var playerChoices = ["prolog"];

//User Interface
var start = document.getElementById("begin");
var textArea = document.getElementById("playPlace");
var buttonArea = document.getElementById("buttons");
var beanCounter = document.getElementById("beanCounter");
var inventory = { items: [], beans: 0};

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
        options: [["lake", "Go to the Lake"], ["home", "Go Home"], ["store", "Go to Store"], ["people", "Talk to People"]], 
    },

    //lake ending
    lake: {
        text: "You decide to take the rest of the day off and go to the lake…\n You spend the day fishing…\n It is peaceful…",
    },

    //home
    home:{
        text: "You make your way back to your house on the outskirts of town. “I’m home!”, you exclaim as you walk in the door, but your words fall on deaf ears as you are ignored by the other residents.",
        options: [["look", "Look out Window"], ["pantry", "Raid pantry"], ["brother", "Talk to Your Brother"], ["Dweller", "Talk to Basement Dweller"]],
    },

    look:{
        text: "You walk over to a nearby window and look out at your yard. Among the dead shrubbery and flowers you see a platypus with the number 17 scarred into its forehead. You stare at each other for some time…his black, heartless gaze eats away at your soul…your humanity. Eventually you break your gaze leaving you to shiver. By the time you look back you notice that he is missing. “How queer…” you think.",
        options: [["pantry", "Raid Pantry"], ["brother", "Talk to Your Brother"], ["Dweller", "Talk to Basement Dweller"]],
    },

    pantry:{
      text: "You walk into your pantry in hopes of finding something to fill the ever growing void inside…you find a can of Bush’sⓇ Baked Beans.",
      options: [["look", "Look out Window"], ["brother", "Talk to Your Brother"], ["Dweller", "Talk to Basement Dweller"], [true, "empty"]],
    },

    
    
};
// function displayBean() {
//     beanCounter.innerHTML = (inventory.beans + 1);
//     console.log("worked");
// }

function createButton(btnText, choice) {
    var button = document.createElement("button");
    button.innerHTML = btnText;
    buttonArea.appendChild(button);

    button.addEventListener("click", function () {
        playerChoices.push(choice);
        createStory();
    });

    if(btnText == "empty") {
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
        if(choices[0] == true) {
            beanCounter.innerHTML = (inventory.beans += 1);
        }
        if(choices[0] == "pantry"){
            console.log("yuayuieiuhsurhuidshfusdfe");
        }

    }
}

start.addEventListener("click", function () {
    createStory(story.prolog.text);
});