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
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.zIndex = "9999";
document.body.appendChild(iframe);

iframe.addEventListener("load", function () {
  iframe.style.display = "block";

  if (hideKey && unhideKey) {
    document.addEventListener("keydown", function(event) {
      if (event.key === hideKey) {
        iframe.style.display = "none";
      } else if (event.key === unhideKey) {
        iframe.style.display = "block";
      }
    });
  }
});
