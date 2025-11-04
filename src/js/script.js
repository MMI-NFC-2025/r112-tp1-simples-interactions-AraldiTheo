// TODO
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color="red";

const colH2 = document.querySelectorAll("h2");
colH2.forEach((h2)=>{
    h2.addEventListener("click",()=>{;
    h2.style.color="red";
    });
});

const enRougeSuiteAUnClic = document.querySelector("#en-rouge-suite-a-click");
enRougeSuiteAUnClic.addEventListener("click",(element)=>{
        enRougeSuiteAUnClic.style.color="red";
    });
