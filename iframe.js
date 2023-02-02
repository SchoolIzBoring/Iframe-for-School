var website = localStorage.getItem("website");
var hideKey = localStorage.getItem("hideKey");
var unhideKey = localStorage.getItem("unhideKey");

if (!website || !hideKey || !unhideKey) {
  website = prompt("What Website?");
  hideKey = prompt("Hide Key?");
  unhideKey = prompt("Unhide Key?");
  localStorage.setItem("website", website);
  localStorage.setItem("hideKey", hideKey);
  localStorage.setItem("unhideKey", unhideKey);
} else {
  website = prompt("What Website?");
  var change = confirm("Do you want to change the hotkeys?");
  if (change) {
    hideKey = prompt("Hide Key?");
    unhideKey = prompt("Unhide Key?");
    localStorage.setItem("hideKey", hideKey);
    localStorage.setItem("unhideKey", unhideKey);
  }
}

var iframe = document.createElement("iframe");
iframe.src = website;
document.body.appendChild(iframe);

if (hideKey && unhideKey) {
  iframe.style.display = "none";

  document.addEventListener("keydown", function(event) {
    if (event.key === hideKey) {
      iframe.style.display = "none";
    } else if (event.key === unhideKey) {
      iframe.style.display = "block";
    }
  });
}
