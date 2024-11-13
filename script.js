
const now = new Date(); 
const YES_BUTTON = document.getElementById('yes');
const NO_BUTTON = document.getElementById('no');
const container = document.getElementById('button-container');

var no_counter = 0;
var yes_counter = 0;


let rect = container.getBoundingClientRect();
let height = rect.height;
let width = rect.width;



NO_BUTTON.addEventListener("mouseover", () => {
    no_counter++;
    if(yes_counter == 1) {
        MOVE_NO_BUTTON();
    }
});
NO_BUTTON.addEventListener("click", () => {
    no_counter++;
    if(yes_counter < 1) {
        const h1 = document.querySelector('h1');
        h1.innerHTML = "Just answer my questions😢";
    } else {
        MOVE_NO_BUTTON();
    }
});

YES_BUTTON.addEventListener("click", () => {

    const h1 = document.querySelector('h1');
    if(yes_counter !=2) {
        h1.innerHTML = "I've developed feelings for you😳 <br> Can I be your lover?";
        yes_counter++;

        if(yes_counter == 2) {
            
            var templateParams = {
                no_counter: no_counter,
                date:now,
            }
            sendMail(templateParams);
            window.location.href = "referral_page.html";
        }
    }
});



function MOVE_NO_BUTTON(){
    const elementWidth = NO_BUTTON.clientWidth;
    const elementHeight = NO_BUTTON.clientHeight;
    

    no.style.transform = `translate(${height / 2}px, ${width / 2}px)`;
    // Generate random positions within the container bounds
    const randomX = Math.floor(Math.random() * (width - elementWidth));
    const randomY = Math.floor(Math.random() * (height - elementHeight));
    no.style.position = "fixed";

    no.style.transition = "0.5s";
    no.style.transform = `translate(${randomX}px, ${randomY}px)`;
}


function sendMail(templateParams) {
    emailjs.init("qdgMdvi_O2FqLjFWl");
    emailjs.send("service_e32ozyg","template_48vtsef",templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}