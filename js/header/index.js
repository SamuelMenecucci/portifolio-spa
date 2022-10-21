import { renderRepo } from "../repo/index.js";
import { renderHome } from "../home/index.js";
import { renderContact } from "../contact/index.js";
import { renderFooter } from "../footer/index.js";

function navTemplate() {
  return `
          <nav>
              <a id="home"> Home </a>
              <a id="repo"> Repositórios </a>
              <a id="contact"> Contato </a>        
          </nav>
      `;
}

const header = document.createElement("header");

header.innerHTML = navTemplate();

document.body.appendChild(header);

const main = document.createElement("main");

document.body.appendChild(main);

const nav = document.getElementsByTagName("nav");

let head = document.getElementsByTagName("head");

const style = document.createElement("link");

style.id = "dinamicStyle";

style.rel = "stylesheet";

head[0].appendChild(style);

const { home, contact, history, repo } = nav[0].children;

renderHome(main, style);
adicionarSelecionado(home);

renderFooter(main);

const actionsButtons = document.getElementsByTagName("button");

const { top, dark } = actionsButtons;

top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

dark.addEventListener("click", () => {
  nav[0].classList.toggle("dark");
  main.classList.toggle("dark");
  document.body.classList.toggle("dark");
});

function removerSelecionado() {
  home.classList.remove("selected");
  contact.classList.remove("selected");
  repo.classList.remove("selected");
}

function adicionarSelecionado(element) {
  removerSelecionado();
  element.classList.add("selected");
}

home.addEventListener("click", () => {
  renderHome(main, style);
  adicionarSelecionado(home);
});

repo.addEventListener("click", () => {
  renderRepo(main, style);
  adicionarSelecionado(repo);
});

contact.addEventListener("click", () => {
  renderContact(main, style);
  adicionarSelecionado(contact);
});
