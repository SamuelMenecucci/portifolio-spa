import * as texts from "../../texts/home.js";
import styles from "./styles.css" assert { type: "css" };

function template() {
  return `
    <section>   
        <h1>Samuel Menecucci Moura</h1>

            
        <p>${texts.presentation}</p>
        
        
        <h3>Missão</h3>
        
        <p>${texts.mission}</p>

        <div class="cards">
            <div class="card">

                <h4>Forças</h4>
                <ul>
                    ${texts.strength
                      .sort((a, b) => {
                        if (a.length > b.length) return 1;
                        if (a.length < b.length) return -1;

                        return 0;
                      })
                      .map((element) => {
                        return `<li>${element}</li>`;
                      })
                      .join("")}
                </ul>
            
            </div>

            <div class="card">
              <h4>Valores</h4>

                <ul>
                ${texts.values
                  .sort((a, b) => {
                    if (a.length > b.length) return 1;
                    if (a.length < b.length) return -1;

                    return 0;
                  })
                  .map((element) => {
                    return `<li>${element}</li>`;
                  })
                  .join("")}
                </ul>
            </div>
        </div>
        </section>

        <img src="../../assets/home.png" />
    
    `;
}

export function renderHome(main, style) {
  main.innerHTML = "";

  style.href = "./js/home/styles.css";

  main.innerHTML = template();
}
