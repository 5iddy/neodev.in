function copyToClipboard(element){
  if (element.textContent.startsWith("$ ")) {
    var textToCopy = element.textContent.substr(2)
  } else {
    var textToCopy = element.textContent
  }
  navigator.clipboard.writeText(textToCopy.substr(0, textToCopy.length - 1))
}

export function addCopyButtonsToCodeBlocks(){
    // get Codeblocks array by selecting all pre elements with highlight class
  let codeBlocks = document.querySelectorAll("pre.highlight")
  let button = document.createElement('button')
  button.classList.add('button', 'is-small', 'is-primary', 'bd-copy')
  button.type = 'button'
  button.innerText = 'Copy'

  // let icon_span = document.createElement("span")
  // let icon = document.createElement("i")
  // icon.classList.add("fas", "fa-clipboard")
  // icon_span.classList.add("icon")
  // button.appendChild(icon_span.appendChild(icon))

  button.addEventListener('click', () => {
    copyToClipboard(el)
    button.blur()
    button.innerText = "Copied!"
    button.disabled = true
    setTimeout(() => {
      button.innerText = "Copy"
      button.disabled = false
    }, 3000)
  })
  codeBlocks.forEach(el => {
    el.parentNode.appendChild(button)
    // console.log(el.childNodes)
    // console.log(el.textContent)
  })
}