/*window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Muda a cor de fundo ao rolar 300 pixels
    if (scrollPosition > 300) {
        Array.from(document.getElementsByClassName('number-whoWeAre')).forEach(element => {
            element.style.color = '#2b2b31';
        });
    } else {
        document.getElementById('change-on-scroll').style.backgroundColor = '#4CAF50';
    }
});
*/

let eventTriggered = false;

window.addEventListener('scroll', function() {
    if (window.scrollY > 700 && !eventTriggered) {
      // Ação desejada ao passar de 500px

const targetValue = [12, 214, 1236, 3475]; // Valor final desejado
const delay = [100, 10, 1, 1]; // Duração do intervalo em milissegundos
let counterElements = Array.from(document.getElementsByClassName('number-whoWeAre'));
let counter = [0, 0, 0, 0];

counterElements.forEach((element, index) => {
    const interval = setInterval(() => {
        if (counter[index] <= targetValue[index]) {
            element.innerHTML = counter[index];
            counter[index]++;
        } else {
            clearInterval(interval); // Interrompe o intervalo quando o valor alvo é atingido
        }
    }, delay[index]); // Configura o intervalo com o atraso correspondente
});
      
      console.log('Você passou dos 500px de rolagem!');
      
      eventTriggered = true; // Define como verdadeiro para não ativar novamente
    }
  });


   
