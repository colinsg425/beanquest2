window.onload = function () {
    var story = {
        prolog: {
            text: "hello world!",
            options: [["continue", "Continue"]]
        },
        continue: {
            text: "world hello!",
            options: [["continue", "Continue"]]
        }
    };

    var playerChoices = ["prolog"];

    var start = document.getElementById("begin");
    var textArea = document.getElementById("playPlace");
    var buttonArea = document.getElementById("buttons");

    function writeStory(text){
        textArea.innerHTML = text;
    }

    start.addEventListener("click", function (){
        writeStory(story.prolog.text);
    });
}