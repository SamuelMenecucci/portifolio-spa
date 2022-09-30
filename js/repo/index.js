export async function template() {
  let data = await fetch("https://api.github.com/users/samuelmenecucci/repos");

  let repositorios = await data.json();

  return `
${repositorios
  .map((element) => {
    return `
  <div class="card repo">
    <h2>${element.name}</h2>

    <p>${
      element.description
        ? element.description.length > 100
          ? element.description?.substring(0, 100) + "..."
          : element.description
        : "Sem descrição"
    }</p>

    <a href=${element.html_url} target="blank">Acessar Repositório</a>
    
  </div>  
  `;
  })
  .join("")}
  
    `;
}

export async function renderRepo(main, style) {
  main.innerHTML = "";

  style.href = "./js/repo/styles.css";

  let h1 = document.createElement("h1");

  h1.innerText = "Meus Repositórios";

  const cards = document.createElement("div");

  cards.className = "cards";

  cards.innerHTML = await template();

  main.appendChild(cards);

  cards.before(h1);
}
