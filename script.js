const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

items.forEach(item => {
    observer.observe(item);
});

let lastScroll = 0; // Última posição de rolagem
const header = document.querySelector('.custom-header'); // Seleciona o header

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Posição atual de rolagem

    if (currentScroll > lastScroll) {
        // Usuário está rolando para baixo
        header.classList.add('hidden');
    } else {
        // Usuário está rolando para cima
        header.classList.remove('hidden');
    }

    lastScroll = currentScroll; // Atualiza a última posição de rolagem
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Posição atual da rolagem
    const body = document.body;
    const scrollBarTrack = document.querySelector('::-webkit-scrollbar-track');

    // Defina a cor do fundo com base na posição da rolagem
    let bgColor = '#ffffff00'; // Cor transparente como padrão

    if (scrollPosition < 500) {
        bgColor = '#f4f4f4'; // Cor clara para a parte superior da página
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        bgColor = '#dcdcdc'; // Cor intermediária
    } else {
        bgColor = '#2c3e50'; // Cor escura para o fundo da página
    }

    // Atualiza o fundo da trilha da barra de rolagem
    document.documentElement.style.setProperty('--scroll-track-color', bgColor);
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const devices = document.querySelectorAll(".device");
    devices.forEach((device, index) => {
      setTimeout(() => {
        device.classList.add("visible");
      }, index * 300); // Delay gradual para cada dispositivo
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const inputs = form.querySelectorAll("input, textarea");
  
    // Impede a validação padrão do navegador
    form.setAttribute("novalidate", true);
  
    form.addEventListener("submit", function (event) {
      let isValid = true;
  
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      });
  
      // Impede o envio do formulário se houver campos inválidos
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    // Remove o estilo de erro quando o usuário começa a digitar
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (input.value.trim()) {
          input.classList.remove("invalid");
        }
      });
    });
  });
  