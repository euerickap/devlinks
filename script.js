function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  // if (html.classList.contains("light")) {
  // se tiver light mode, adicionar a imagem light
  //  img.setAttribute("src", "./assets/avatar-light.png")
  // } else {
  // se tive sem light mode, manter a imagem normal
  //  img.setAttribute("src", "./assets/avatar.png")
  // }

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    onclick = img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      "alt",
      "Foto de Erick Almeida de lado com capuz."
    )
  } else {
    // se tive sem light mode, manter a imagem normal
    onclick = img.setAttribute(
      "src",
      "./assets/avatar.png",
      "alt",
      "Foto de Erick Almeida de lado com capuz."
    )
  }
}
