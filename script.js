function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // modo claro: foto "images"
    img.setAttribute("src", "./assets/images.jpg")
  } else {
    // modo escuro: foto "angry teto"
    img.setAttribute("src", "./assets/angry-teto.jpg")
  }
}