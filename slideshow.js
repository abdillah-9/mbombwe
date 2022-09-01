/* Find all slideshow containers*/
var slideshowContainers = document.getElementsByClassName("slideshow-container");
/*For each container get starting variables*/
for(var s = 0; s < slideshowContainers.length; s++){
    /*Read the new data attribute*/
    var cycle = slideshowContainers[s].dataset.cycle;
    /*Find all the Child nodes with the name slides*/
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    /*Now we can cycle slides, but this recursive function must have parameters*/
    /*Slides and cycles never change,those are unic for each slide-comtainer*/
    /*Slide index will increase during each iteration*/
    showSlides(slides,slideIndex,cycle);
}
/*Function is almost the same but now it uses 3 Parameters*/
function showSlides(slides,slideIndex,cycle){
    /*step one hiding all slides*/
 for(i = 0; i < slides.length; i++){
     slides[i].style.display = "none";
 }
 /* Allowing non stop iteration of slides/images */
 slideIndex++;
 if(slideIndex > slides.length){
     slideIndex = 1;
 }
 /* displaying one slide per time interval */
 slides[slideIndex - 1].style.display = "block";
 /*Calling same function but with new parameters and cycle time*/
 setTimeout(function(){
     showSlides(slides,slideIndex,cycle)},cycle);   
}