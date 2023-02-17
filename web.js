function download() {
  var button = document.getElementById("downloadButton");
  button.innerHTML = "Downloading...";
  button.style.backgroundColor = "#008CBA"; // Blue
  button.style.boxShadow = "0px 0px 0px 0px rgba(0, 140, 186, 1)";
  setTimeout(function(){
    button.innerHTML = "Download";
    button.style.backgroundColor = "#4CAF50"; // Green
    button.style.boxShadow = "4px 4px 8px 0px rgba(0,0,0,0.2)";
  }, 3000);
}



