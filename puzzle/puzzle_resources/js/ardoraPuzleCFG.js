//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=36; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, eres el mejor "; messageTime="Se te acabo el tiempo "; messageError="Que mal, suerte a la proxima :("; messageAttempts="Se te acabaron los intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0","0"],["0","0","0","0","0","0"],["0","0","0","0","0","0"],["0","0","0","0","0","0"],["0","0","0","0","0","0"],["0","0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="puzzle_resources/media/original.jpg";
var board=[["puzzle_resources/media/cGllY2UxXzE=.jpg","puzzle_resources/media/cGllY2UyXzE=.jpg","puzzle_resources/media/cGllY2UzXzE=.jpg","puzzle_resources/media/cGllY2U0XzE=.jpg","puzzle_resources/media/cGllY2U1XzE=.jpg","puzzle_resources/media/cGllY2U2XzE=.jpg"],["puzzle_resources/media/cGllY2UxXzI=.jpg","puzzle_resources/media/cGllY2UyXzI=.jpg","puzzle_resources/media/cGllY2UzXzI=.jpg","puzzle_resources/media/cGllY2U0XzI=.jpg","puzzle_resources/media/cGllY2U1XzI=.jpg","puzzle_resources/media/cGllY2U2XzI=.jpg"],["puzzle_resources/media/cGllY2UxXzM=.jpg","puzzle_resources/media/cGllY2UyXzM=.jpg","puzzle_resources/media/cGllY2UzXzM=.jpg","puzzle_resources/media/cGllY2U0XzM=.jpg","puzzle_resources/media/cGllY2U1XzM=.jpg","puzzle_resources/media/cGllY2U2XzM=.jpg"],["puzzle_resources/media/cGllY2UxXzQ=.jpg","puzzle_resources/media/cGllY2UyXzQ=.jpg","puzzle_resources/media/cGllY2UzXzQ=.jpg","puzzle_resources/media/cGllY2U0XzQ=.jpg","puzzle_resources/media/cGllY2U1XzQ=.jpg","puzzle_resources/media/cGllY2U2XzQ=.jpg"],["puzzle_resources/media/cGllY2UxXzU=.jpg","puzzle_resources/media/cGllY2UyXzU=.jpg","puzzle_resources/media/cGllY2UzXzU=.jpg","puzzle_resources/media/cGllY2U0XzU=.jpg","puzzle_resources/media/cGllY2U1XzU=.jpg","puzzle_resources/media/cGllY2U2XzU=.jpg"],["puzzle_resources/media/cGllY2UxXzY=.jpg","puzzle_resources/media/cGllY2UyXzY=.jpg","puzzle_resources/media/cGllY2UzXzY=.jpg","puzzle_resources/media/cGllY2U0XzY=.jpg","puzzle_resources/media/cGllY2U1XzY=.jpg","puzzle_resources/media/cGllY2U2XzY=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="cHV6emxl"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
