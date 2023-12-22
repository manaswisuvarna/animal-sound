


document.getElementById('someimage').classList.add("display_none");

let h1 = document.querySelector("h1");


function pressed() {
    document.querySelector("button").classList.add("display_none");
    document.getElementById('someimage').classList.remove("display_none");

    h1.classList.add("bg_opacity");

    h1.innerHTML = "Names & Sounds";
    h1.style.fontSize = "100px";
}




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

    showSlides(slideIndex += n);

}

function currentkey(n) {

    showSlides(slideIndex = n);
}



function showSlides(n) {

    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("item");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace("active", "");

    }

    slides[slideIndex - 1].style.display = "inline-block";
    dots[slideIndex - 1].className += " active";


}

function blinking(n, seconds) {
    document.getElementsByClassName("item")[n].classList.add("blink");
    setTimeout(() => {
        document.getElementsByClassName("item")[n].classList.remove("blink");

    }, seconds);


    document.querySelectorAll(".inner_div")[n].classList.add("blink");
    setTimeout(() => {
        document.querySelectorAll(".inner_div")[n].classList.remove("blink");

    }, seconds);
}


// function audio_pause(i,audio)
// {
//     let state=0;
//     let stop = document.querySelectorAll(".close")[i];
//     stop.addEventListener("dblclick", (e) => {
//         state=1;
//     });

//     if(state==1)
//     {
//         audio.pause();
//     }
//     else{
//         audio.play();
//     }

// }





let no_Of_images = document.querySelectorAll(".inner_div").length;
for (let i = 0; i < no_Of_images; i++) {
    let innerdiv = document.querySelectorAll(".inner_div")[i];

    innerdiv.addEventListener("click", function myfunction() {




        switch (i) {
            case 0:

                var audio = new Audio('sounds/dog.mp3');
                audio.play();
                blinking(i, 10000);
                // audio_pause(i,audio);
                break;

            case 1:
                var audio = new Audio('sounds/cat.mp3');
                audio.play();
                blinking(i, 10000);
                break;

            case 2:
                var audio = new Audio('sounds/cow.mp3');
                audio.play();
                blinking(i, 10000);
                break;
            case 3:
                var audio = new Audio('sounds/sheep.mp3');
                audio.play();
                blinking(i, 10000);
                break;
            case 4:
                var audio = new Audio('sounds/pig.mp3');
                audio.play();
                blinking(i, 10000);
                break;
            case 5:
                var audio = new Audio('sounds/horse.mp3');
                audio.play();
                blinking(i, 10000);
                break;
            case 6:
                var audio = new Audio('sounds/goat.mp3');
                audio.play();
                blinking(i, 10000);
                break;
            case 7:
                var audio = new Audio('sounds/donkey.mp3');
                audio.play();
                blinking(i, 10000);
                break;

            case 8:

                var audio = new Audio('sounds/lion.mp3');
                audio.play();
                blinking(i, 16000);
                // audio_pause(i,audio);
                break;

            case 9:
                var audio = new Audio('sounds/chimpanzee.mp3');
                audio.play();
                blinking(i, 14000);
                break;

            case 10:
                var audio = new Audio('sounds/tiger.mp3');
                audio.play();
                blinking(i, 17000);
                break;
            case 11:
                var audio = new Audio('sounds/rino.mp3');
                audio.play();
                blinking(i, 17000);
                break;
            case 12:
                var audio = new Audio('sounds/leopard.mp3');
                audio.play();
                blinking(i, 17000);
                break;
            case 13:
                var audio = new Audio('sounds/elephant.mp3');
                audio.play();
                blinking(i, 17000);
                break;
            case 14:
                var audio = new Audio('sounds/bear.mp3');
                audio.play();
                blinking(i, 17000);
                break;
            case 15:
                var audio = new Audio('sounds/kangaroo.mp3');
                audio.play();
                blinking(i, 18000);
                break;

        }

    });

}

