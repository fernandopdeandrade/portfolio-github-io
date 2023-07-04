window.onload = function () {

  const botao_pesquisa = document.getElementById("pesquisa");
  const menu_li_a = document.querySelectorAll('.menu li a');
  const menu = document.getElementById("menu");
  const input_pesquisa = document.querySelector("#input_pesquisa");
  const modal = document.querySelector('#modal');
  const btn = document.querySelector("#btn");
  const closed = document.querySelector("#close");
  const email = document.querySelector("#email");


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

  function validaEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  closed.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "none";
  }
}
