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
/* expanssion */

const textLorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati eligendi dolor molestias vel, cum error nesciunt, magni eius necessitatibus quidem ea sint at maxime deleniti debitis facilis! Blanditiis, non.";

const buttons = Array.from(document.getElementsByClassName("button-box"));
const h1Box = Array.from(document.getElementsByClassName("h1-box"));
const pBox = Array.from(document.getElementsByClassName("p-box"));

const suportBox = Array.from(document.getElementsByClassName("suport-box"));
const imgBox = Array.from(document.getElementsByClassName("img-box"));

const buttonsExpansion = (i) => {
  if (buttons[i].innerText === "Show more") {
    setTimeout(() => {
      h1Box[i].innerText = "The examplification of the example examplificated";
      buttons[i].innerText = "Show less";
      pBox[i].innerText = textLorem + textLorem + textLorem;
      h1Box[i].style.opacity = "1";
      h1Box[i].style.transition = "0.5s ease";
      pBox[i].style.opacity = "1";
      pBox[i].style.transition = "0.5s ease";
      buttons[i].innerText = "Show less";
      buttons[i].style.opacity = "1";
      buttons[i].style.transition = "0.5s ease";
      buttons[i].style.transform = "translatey(20dvh)";
      buttons[i].style.backgroundColor = "rgb(255, 235, 235)";
      buttons[i].style.color = "rgb(255, 0, 0)";
    }, 500);

    h1Box[i].style.opacity = "0";
    h1Box[i].style.transition = "0.5s ease";
    pBox[i].style.opacity = "0";
    pBox[i].style.transition = "0.5s ease";
    buttons[i].style.opacity = "0";
    buttons[i].style.transition = "0.5s ease";
    pBox[i].innerText = textLorem + textLorem + textLorem;
    suportBox[i].style.width = "12vw";
    suportBox[i].style.height = "12vw";
    suportBox[i].style.transition =
      "width 1s ease-in-out, height 1s ease-in-out";

    console.log(h1Box);
    console.log("yeeeee");
  } else {
    // Retração
    setTimeout(() => {
      h1Box[i].innerText = "Title example exemplificting the example";
      buttons[i].innerText = "Show more";
      pBox[i].innerText =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus numquam esse doloribus veritatis et laborum similique, reprehenderit error inventore iusto unde.";
      h1Box[i].style.opacity = "1";
      h1Box[i].style.transition = "0.5s ease";
      pBox[i].style.opacity = "1";
      pBox[i].style.transition = "0.5s ease";
      buttons[i].style.opacity = "1";
      buttons[i].style.transition = "0.5s ease";
      buttons[i].style.transform = "translatey(200%)";
      buttons[i].style.backgroundColor = "";
      buttons[i].style.color = "";
    }, 500);

    h1Box[i].style.opacity = "0";
    h1Box[i].style.transition = "0.5s ease";
    pBox[i].style.opacity = "0";
    pBox[i].style.transition = "0.5s ease";
    buttons[i].style.opacity = "0";
    buttons[i].style.transition = "0.5s ease";
    suportBox[i].style.width = "";
    suportBox[i].style.height = "";
    suportBox[i].style.transition =
      "width 1s ease-in-out, height 1s ease-in-out";
  }
};
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => buttonsExpansion(`${i}`);
}
/* expanssion */
