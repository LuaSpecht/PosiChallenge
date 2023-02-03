
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
    document.getElementById("defaultOpen").click();
  
  const container = document.querySelector('#tabela');
  let colorIndicator = document.getElementById('color-indicator');
  let tabela = document.getElementById('tabela');
  let divHeader = document.getElementById('div-header');
  let colorPicker = new iro.ColorPicker("#color-picker", {
    width: 80,
    color: "#0F9AB9",
    borderWidth: 0.5,
    borderColor: "#fff",
    });

    colorPicker.on("color:change", function (color) {
    divHeader.style.boxShadow = "0px 0px 2px" + color.hexString;
    });

    colorPicker.on("color:change", function (color) {
    principal.style.boxShadow = "0px 0px 5px" + color.hexString;
    });

    colorPicker.on("color:change", function (color) {
        tabela.style.boxShadow = "0px 0px 5px" + color.hexString;
        });
