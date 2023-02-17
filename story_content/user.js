function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eqKaAg803c":
        Script1();
        break;
      case "6jCwJiKZyej":
        Script2();
        break;
      case "6ijEpp3Kv6L":
        Script3();
        break;
      case "653J71TvAq2":
        Script4();
        break;
      case "6P2ftoQIR92":
        Script5();
        break;
      case "6VCmELMIkNQ":
        Script6();
        break;
      case "6EC2UuJ40ql":
        Script7();
        break;
      case "6bkM1NhvIJZ":
        Script8();
        break;
      case "5nNjJiieRpA":
        Script9();
        break;
      case "5ppMgSwy380":
        Script10();
        break;
      case "6f40jgxZuAW":
        Script11();
        break;
      case "6WIw6NdHTET":
        Script12();
        break;
      case "601ym9Co5oA":
        Script13();
        break;
      case "6A5q9so01cW":
        Script14();
        break;
      case "5e7kDY18cG1":
        Script15();
        break;
      case "6fdQutepLWV":
        Script16();
        break;
      case "6JPlSevS2Xb":
        Script17();
        break;
      case "5cohFglMuWF":
        Script18();
        break;
      case "5u8iwoHBhA1":
        Script19();
        break;
  }
}

function Script1()
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

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Cheerful.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Cheerful.MP3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Dance.MP3";
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Relax.MP3";
audio.load();
audio.play();
}

function Script6()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + ".mp3";
audio.load();
audio.play();
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script13()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Sydney City with ocean view']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

function Script14()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of buddha point in Bhutan']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: 0, duration: 30, ease:"power1.inout"})
}

function Script15()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Hindu temple in India']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

function Script16()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of night view of London city']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

function Script17()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of houses in greenland covered with snow']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

function Script18()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Toroto City']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: -5, duration: 30, ease:"power1.inout"})
}

function Script19()
{
  //Reference the object
var theObject = document.querySelectorAll("[data-acc-text='Photo of Brazil city']");
            
//Animate in GSAP
gsap.to(theObject, { scale: 1.2, rotation: 0, duration: 30, ease:"power1.inout"})
}

