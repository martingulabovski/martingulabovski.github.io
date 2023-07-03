function copyText(text) {
  var tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var clickedElement = event.target.closest("a");
  showNotification(clickedElement, 'Text copied');
}

function showNotification(element, message) {
  var notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = message;
  element.parentElement.insertBefore(notification, element.parentElement.firstChild);

  setTimeout(function () {
    notification.remove();
  }, 2000);
}

function openProjectsLink() {
  window.open('https://github.com/martingulabovski/Projects', '_blank');
}