function template() {
  return `
        <a href="mailto:samuelmenecucci@gmail.com" target="_blank">
            <img src="../../assets/gmail.svg" />
        </a>


        <a href="https://linkedin.com/in/samuelmenecucci" target="_blank">
            <img src="../../assets/linkedin.svg" />
        </a>

        <a href="https://github.com/samuelmenecucci" target="_blank">
            <img src="../../assets/github.svg" />
        </a>

        <a href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5519994382900&text=Olá! Peguei seu contato no site do seu portifólio"target="_blank">
            <img src="../../assets/whatsapp.svg" />
        </a>
    `;
}

export function renderContact(main, style) {
  main.innerHTML = "";

  style.href = "./js/contact/styles.css";

  const images = document.createElement("div");
  images.className = "imagens";

  images.innerHTML = template();

  const h1 = document.createElement("h1");
  h1.innerText = "Meus Contatos";

  main.appendChild(images);
  images.before(h1);

  //   main.innerHTML = template();
}
