var bgImages = [
    "images/landscape1.jpg",
    "images/landscape2.jpg",
    "images/landscape3.jpg",
    "images/landscape4.jpg",
    "images/landscape5.jpg"
];


var i = 0;


document.getElementById('button').addEventListener('click', function () {
  if(i<=bgImages.length-2){
    i= ++i;
  }
  else{
    i=0;
  }

  document.getElementsByClass('background').style.backgroundImage = bgImages[i];
});
