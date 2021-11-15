export function copyToClipboard(element){
  if (element.textContent.startsWith("$ ")) {
    var textToCopy = element.textContent.substr(2)
  } else {
    var textToCopy = element.textContent
  }
  navigator.clipboard.writeText(textToCopy.substr(0, textToCopy.length - 1))
}