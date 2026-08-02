// Gera as hastes de trigo do rodapé dinamicamente
(function buildField() {
  const container = document.getElementById("stalks");
  if (!container) return;

  const total = 46;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < total; i++) {
    const stalk = document.createElement("span");
    stalk.className = "stalk";

    const height = 34 + Math.round(Math.random() * 40); // 34–74px
    const delay = (Math.random() * 3.6).toFixed(2);

    stalk.style.setProperty("--h", height + "px");
    stalk.style.setProperty("--d", delay + "s");

    frag.appendChild(stalk);
  }

  container.appendChild(frag);
})();

// Copiar CNPJ para a área de transferência
(function copyCNPJ() {
  const button = document.getElementById("copy-btn");
  const value = document.getElementById("cnpj-value");
  const toast = document.getElementById("toast");
  if (!button || !value || !toast) return;

  let toastTimer = null;

  button.addEventListener("click", async () => {
    const text = value.textContent.trim();

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // Alternativa para navegadores sem suporte à Clipboard API
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }

    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  });
})();
