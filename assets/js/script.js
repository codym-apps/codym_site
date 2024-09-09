//Appear Hidden Box
//Appear Hidden Box
//Appear Hidden Box
const navGroup = document.getElementById("container");
const hiddenBox = document.getElementsByClassName("input");
const hiddenBoxElements = document.getElementsByClassName("value");

console.log(hiddenBox[0].style.display);
const navGroupOnClick = () => {
  navGroup.onclick = null;

  if (
    hiddenBox[0].style.display === "none" ||
    hiddenBox[0].style.display === ""
  ) {
    hiddenBox[0].style.display = "flex";
    console.log("open");
  } else if (hiddenBox[0].style.display === "flex") {
    hiddenBox[0].style.display = "none";
    console.log("closed");
  }

  setTimeout(() => {
    navGroup.onclick = navGroupOnClick;
  }, 300);
};

navGroup.onclick = navGroupOnClick;

//Appear Hidden Box
//Appear Hidden Box
//Appear Hidden Box

const hiddenClick1 = () => {
  console.log("1");
  window.location = "index.html";
};
const hiddenClick2 = () => {
  console.log("2");
};
const hiddenClick3 = () => {
  console.log("3");
};
const hiddenClick4 = () => {
  console.log("4");
};
const hiddenClick5 = () => {
  console.log("5");
};

const clickFunctions = [
  hiddenClick1,
  hiddenClick2,
  hiddenClick3,
  hiddenClick4,
  hiddenClick5,
];

Array.from(hiddenBoxElements).forEach((element, index) => {
  element.onclick = clickFunctions[index];
  console.log(element);
});

const elementEl = Array.from(document.getElementsByClassName("text-balloon"));

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = ""; // Limpa o texto visível

  textArray.forEach((letter, i) => {
    setTimeout(() => {
      el.innerHTML += letter;
    }, 95 * i); // Ajuste o tempo para controlar a velocidade da digitação
  });
}

function resetText(el) {
  el.innerHTML = ""; // Limpa o texto visível
}

elementEl.forEach((el) => {
  el.dataset.fullText = el.textContent; // Armazena o texto original

  /* el.addEventListener('mouseover', () => {
                //resetText(el); // Limpa o texto visível
                typeWriter(el); // Inicia a animação de digitação

            });

            el.addEventListener('mouseout', () => {
                el.innerHTML = el.dataset.fullText; // Restaura o 
                //texto original quando o mouse sai
            });*/
  elementEl.onclick = typeWriter(el);
});

function changeSizeIframe(size) {
  console.log("foi?");
  const servicesIframe = document.getElementById("services-iframe");
  servicesIframe.style.transition =" 1s ease-in-out";

  let currentHeight = parseFloat(servicesIframe.offsetHeight);

  console.log("Altura Atual:", currentHeight);

  size = parseFloat(size);

  servicesIframe.style.height = `${currentHeight + size}px`;
  const updatedHeight = window.getComputedStyle(servicesIframe).height;

  
}
