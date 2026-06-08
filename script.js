const text = "Learner • Builder • Explorer";

const typing = document.getElementById("typing");

let i = 0;

function typeEffect(){

    if(i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeEffect, 80);

    }

}

typeEffect();