function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gjdLnYIEVq":
        Script1();
        break;
      case "6ZoUohNjneX":
        Script2();
        break;
      case "5nCFzx6CQ9P":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume=0.2;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume=0.0;
}

