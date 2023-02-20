var i=0;
var images=[];
var time=2000;
//images list
images[0]='pic1.png';
images[1]='pic2.jpg';
images[2]='pic3.jpg';
images[3]='pic4.jpg';
//change image
function changeimg(){
    document.slide.src=images[i];
    if(i< images.length-1){
    i++;
        
    }else{i=0;}
    
    setTimeout("changeimg()",time);
}
window.onload=changeimg;
