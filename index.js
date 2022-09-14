
let numberofDrumlLength= document.querySelectorAll(".drum").length;
for (let i=0;i<numberofDrumlLength;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    buttonHtml=this.innerHTML;
    makeSound(buttonHtml);
    animation(buttonHtml);
    
});
document.addEventListener('keydown',function (Event){
    
    makeSound(Event.key);
    animation(Event.key);

})


}
function animation(e){
    classname='.'+e;
    document.querySelector(classname).classList.add('pressed');
    setTimeout(function () {
        document.querySelector(classname).classList.remove('pressed')},100);
}
function makeSound(buttonHtml){
 switch(buttonHtml) {
    case "w":
        tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
        tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
        tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j":
        crash=new Audio("sounds/crash.mp3");
        crash.play();
    break;
    case "k":
        kissbass=new Audio("sounds/kick-bass.mp3");
        kissbass.play();
    break;
    case "l":
        snare=new Audio("sounds/snare.mp3");
        snare.play();
    break;
    default:
        console.log('Error');



 }
    

}