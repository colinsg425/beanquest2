var playerChoices = ["prolog"];

//User Interface
var start = document.getElementById("begin");
var textArea = document.getElementById("playPlace");
var buttonArea = document.getElementById("buttons");
var beanCounter = document.getElementById("beanCounter");
var inventory = {items: [], beans: 0};

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
        options: [["town", "Go back to Town"]],
    },
};

function displayBean(){
    beanCounter.innerHTML = (inventory.beans + 1);
}

if(story.check.text === true){
    displayBean();
}

function createButton(btnText, choice) {
    var button = document.createElement("button");
    button.innerHTML = btnText;
    buttonArea.appendChild(button);

    button.addEventListener("click", function () {
        playerChoices.push(choice);
        createStory();
    });
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
    }
}

start.addEventListener("click", function () {
    createStory(story.prolog.text);
});