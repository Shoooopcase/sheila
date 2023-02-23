var i=0;
var images=[];
var time=3000;
//images list
images[0]='pic6.png';
images[1]='pic5.jpg';
images[2]='pic3.jpg';
images[3]='pic4.jpg';
images[4]='pic2.png';
images[5]='pic1.png';

//change image
function changeimg(){
    document.slide.src=images[i];
    if(i< images.length-1){
    i++;
        
    }else{i=0;}
    
    setTimeout("changeimg()",time);
}
window.onload=changeimg;
