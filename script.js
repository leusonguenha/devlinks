function toggleMode() {
  const html = document.documentElement;

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  html.classList.toggle("light");

  //   pegar a tag imagem

  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver com o  light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "profile picture light mode");
  } else {
    // se tiver com o dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "profile picture dark mode");
  }
}
