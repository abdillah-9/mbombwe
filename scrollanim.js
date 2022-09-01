function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(i=0;i<reveals.length;i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisisble = 150; 
    if(elementTop < windowHeight - elementVisisble){
        reveals[i].classList.add("active");
    }
    else{
        reveals[i].classList.remove("active");
    }
  }
}
//Adding event listener "scrolling event"
window.addEventListener("scroll",reveal);