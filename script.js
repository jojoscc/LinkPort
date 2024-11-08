function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /* eu tbm poderia ter feito isso pq ficaria mais facil, mas é bom aprender o jeito certo primeiro:

  html.classList.toggle("light")

  */
}
