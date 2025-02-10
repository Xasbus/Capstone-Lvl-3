export function output(
  message = "",
  outputTag = "outputTag",
  shouldAppend = true
) {
  const myElement = document.getElementById("myTag");
  if (shouldAppend) myElement.innerHTML += message;
  else myElement.innerHTML = message;
}
