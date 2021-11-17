import { copyToClipboard } from "./utils"

// Get all "navbar-burger" elements
const navbarBurgers = document.querySelectorAll('.navbar-burger');

// Add a click event on each of them
navbarBurgers.forEach( el => {
  el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = document.getElementById(el.dataset.target)

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active')
    target.classList.toggle('is-active')
  })
})

const codeBlocks = document.querySelectorAll("pre.highlight")

codeBlocks.forEach(el => {
  const button = document.createElement('button')
  button.classList.add('button', 'is-info', 'is-outlined','is-small', 'bd-copy')
  button.type = 'button'
  // button.innerText = 'Copy'

  const span = document.createElement("span")
  const icon = document.createElement("i")
  icon.classList.add("fas", "fa-clipboard")
  span.classList.add("icon")
  span.appendChild(icon)
  button.appendChild(span)

  button.addEventListener('click', () => {
    copyToClipboard(el)
    button.blur()
    button.innerText = 'Copied!'
    button.disabled = true
    button.classList.add('is-success')
    setTimeout(() => {
      button.innerText = ''
      button.appendChild(span)
      button.disabled = false
      button.classList.remove('is-success')
    }, 2000)
  }) // end of addEventListener
  el.parentElement.appendChild(button)
})