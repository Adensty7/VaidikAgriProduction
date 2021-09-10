function changeBg(bg) {

    var bgimg = document.getElementById("farmbook-bg");
    var searchbar = document.getElementById("sbar");
    if (bg === "videos") {
      bgimg.style.backgroundImage = "url(/farmbook/assets/img/farmbook-bg2.png)";
      searchbar.placeholder = "Search Videos";
    } 
    else if (bg === "img") {
      bgimg.style.backgroundImage = "url(/farmbook/assets/img/farmbook-bg.png)";
      searchbar.placeholder = "Search Images";
    }
    else {
      bgimg.style.backgroundImage = "url(/farmbook/assets/img/farmbook-bg.png)";
      searchbar.placeholder = "Search Blogs";
    }
  }