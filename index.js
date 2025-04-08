function copiarPix() {
    const chave = document.getElementById("pix-chave").textContent;
  
    navigator.clipboard.writeText(chave)
      .then(() => {
        alert("Chave Pix copiada com sucesso!");
      })
      .catch(err => {
        alert("Erro ao copiar a chave Pix. Tente novamente.");
        console.error("Erro ao copiar:", err);
      });
  }
  function copiarPix() {
    const chave = document.getElementById("pix-chave").textContent;
  
    navigator.clipboard.writeText(chave)
      .then(() => {
        alert("Chave Pix copiada com sucesso!");
      })
      .catch(err => {
        console.error("Erro ao copiar:", err);
        alert("Erro ao copiar a chave Pix.");
      });
  }

  function adicionarAoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  }
  