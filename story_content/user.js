function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62pPbBU3PeA":
        Script1();
        break;
      case "6bQqrrFZX6s":
        Script2();
        break;
      case "5V87iDIyxfK":
        Script3();
        break;
      case "6l0G1oWKD9F":
        Script4();
        break;
      case "6OmSqzTxX33":
        Script5();
        break;
      case "6BX67pMFxuq":
        Script6();
        break;
      case "6TJdI2JHr4p":
        Script7();
        break;
      case "6FxMqvtbCIs":
        Script8();
        break;
      case "6GgiDpkfChY":
        Script9();
        break;
      case "6oLB1dWowPu":
        Script10();
        break;
      case "6V0M8O3XCFa":
        Script11();
        break;
      case "6ChDAjWJVQZ":
        Script12();
        break;
      case "5tc7hafhcpu":
        Script13();
        break;
      case "6JfwBCOSrzf":
        Script14();
        break;
      case "6lcT6tA0ZFE":
        Script15();
        break;
      case "5rMagsHOhnL":
        Script16();
        break;
      case "6FaL8SJ89mf":
        Script17();
        break;
      case "66lCqgzYyhn":
        Script18();
        break;
      case "6TLgh5RDri0":
        Script19();
        break;
      case "6dPZS9Pq7Hg":
        Script20();
        break;
      case "6nf8uDmgEMo":
        Script21();
        break;
      case "5pQBoTBXGw6":
        Script22();
        break;
      case "6oR043y8iA2":
        Script23();
        break;
      case "63UuOSup7vt":
        Script24();
        break;
      case "6gdwPmJUiG5":
        Script25();
        break;
      case "5wbMz2kf5l0":
        Script26();
        break;
      case "6jTf1rJcQkd":
        Script27();
        break;
      case "6Dx6oq3OKJq":
        Script28();
        break;
      case "67ECNPXLB8l":
        Script29();
        break;
      case "5wFqbHHAwlD":
        Script30();
        break;
      case "6jgto99lY7R":
        Script31();
        break;
      case "695dTkiPG6B":
        Script32();
        break;
      case "6TSOWxq6Rx7":
        Script33();
        break;
      case "61yn2vFg4vu":
        Script34();
        break;
      case "6o3QvuzZZ45":
        Script35();
        break;
      case "5qWdLhyEyOc":
        Script36();
        break;
      case "5pCsFUyalbd":
        Script37();
        break;
      case "5bnMzpfTrmI":
        Script38();
        break;
      case "6aX2Hfch6I9":
        Script39();
        break;
      case "6rEX23HLlbU":
        Script40();
        break;
      case "6LlDQVh3635":
        Script41();
        break;
      case "6P4bVZTerwW":
        Script42();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

}

window.Script2 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Cheerful.mp3";
audio.load();
audio.play();
}

window.Script3 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Cheerful.MP3";
audio.load();
audio.play();
}

window.Script4 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Dance.MP3";
audio.load();
audio.play();
}

window.Script5 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Relax.MP3";
audio.load();
audio.play();
}

window.Script6 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + ".mp3";
audio.load();
audio.play();
}

window.Script7 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script8 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

window.Script9 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

window.Script10 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

window.Script11 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

window.Script12 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

window.Script13 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Sydney City with ocean view']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

window.Script14 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script15 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script16 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script17 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of buddha point in Bhutan']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: 0, duration: 30, ease:"power1.inout"})
}

window.Script18 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script19 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script20 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script21 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Hindu temple in India']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

window.Script22 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script23 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script24 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script25 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of night view of London city']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

window.Script26 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script27 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script28 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script29 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of houses in greenland covered with snow']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

window.Script30 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script31 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script32 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script33 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Toroto City']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

window.Script34 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script35 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script36 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script37 = function()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Brazil city']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: 0, duration: 30, ease:"power1.inout"})
}

window.Script38 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
bgAudio.volume = 0.003; // Adjust the target volume level (0.2 represents 20% volume)
}

window.Script39 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effect
}

window.Script40 = function()
{
  var bgAudio = parent.document.getElementById('bgSong'); // Replace 'audioID' with the actual ID of your background audio element
var startVolume = 0.009; // Adjust the starting volume (e.g., 0.1 for 10% volume)
var fadeDuration = 1000; // Adjust the duration of the fade-in in milliseconds (e.g., 5000 for 5 seconds)

bgAudio.volume = startVolume; // Set the starting volume

function fadeIn() {
    var currentTime = 0;
    var increment = 0.05; // Adjust the increment (e.g., 0.01 for a smoother fade)

    var fadeInterval = setInterval(function () {
        if (currentTime < fadeDuration) {
            bgAudio.volume += increment;
            currentTime += 100; // Increase by 100ms (adjust as needed)
        } else {
            clearInterval(fadeInterval);
        }
    }, 200); // Adjust the interval as needed (100ms in this example)
}

fadeIn(); // Start the fade-in effecte fade-in effect
}

window.Script41 = function()
{
  GetPlayer().GetVar("Nametxt");

GetPlayer().SetVar("Nametxt",GetStudentName());
var arrayname= GetPlayer().GetVar("Nametxt").split(",");
var finalname=arrayname[1] + ", " +arrayname[0];
GetPlayer().SetVar("Nametxt",finalname.trim());
}

window.Script42 = function()
{
  localStorage.setItem("Nametxt",GetPlayer().GetVar("Nametxt"));
window.open('story_content/certificate/certificate.html');
}

};
