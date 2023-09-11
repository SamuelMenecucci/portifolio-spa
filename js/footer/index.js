function buttons() {
  return `
    <button id="dark">Dark Mode</button>
    <button id="top" >
      <img src="../../assets/top.png" />
    </button>
    `;
}

export function renderFooter(main) {
  const footer = document.createElement("footer");

  footer.innerHTML = buttons();

  document.body.appendChild(footer);
}
