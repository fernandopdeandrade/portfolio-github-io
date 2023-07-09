window.onload = function () {
  const botao_pesquisa = document.getElementById("pesquisa");
  const menu_li_a = document.querySelectorAll('.menu li a');
  const menu = document.getElementById("menu");
  const input_pesquisa = document.querySelector("#input_pesquisa");

  input_pesquisa.addEventListener("mouseover", function (e) {
    e.preventDefault();
    menu.style.display = "block";
  });

  document.addEventListener("click", function (e) {
    if (e.target.id != "menu") {
      menu.style.display = "none";
    }
  });

  for (let i = 0; i < menu_li_a.length; i++) {
    menu_li_a[i].addEventListener("click", function (e) {
      e.preventDefault();
      input_pesquisa.value = this.innerHTML;
      menu.style.display = "none";
    });
  }

  botao_pesquisa.addEventListener("click", function (e) {
    e.preventDefault();
    const elemento = document.getElementById(input_pesquisa.value);

    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      alert("Ops! Não encontramos o que você procura :(");
    }
  })

  btn.onclick = function () {
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const cidade = document.querySelector("#cidade").value;
    const mensagem = document.querySelector("#mensagem").value;

    if (nome.length < 3) {
      alert("Nome precisa ter mais de 3 caracteres!");
      return false;
    }

    if (!emailRegex.test(email)) {
      alert("Email precisa ter esse formato = user@email.com");
      return false;
    }

    if (cidade.length < 3) {
      alert("Cidade precisa ter mais de 3 caracteres!");
      return false;
    }

    if (mensagem.length < 10) {
      alert("Mensagem precisa ter mais de 10 caracteres!");
      return false;
    }

    setTimeout(function () {
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#cidade").value = "";
    document.querySelector("#mensagem").value = "";
    }, 500);
  }
}
