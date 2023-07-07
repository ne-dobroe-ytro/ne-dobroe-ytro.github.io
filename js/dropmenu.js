function droop() {
    document.getElementById("dropmenu").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".but")) {
      let menu = document.getElementsByClassName("menu");
      let i;
      for (i = 0; i < menu.length; i++) {
        let open = drop[i];
        if (open.classList.contains("show")) {
          open.classList.remove("show"); 
        }
      }
    }
  };
