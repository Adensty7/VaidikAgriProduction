function playVideo(e) {
    var video = e.target.parentElement.parentElement.parentElement.children[0];
    if (video.paused || video.ended) {
    video.play();
    e.target.innerText  = "Pause";
  } else {
    video.pause();
    e.target.innerText = "Play";
  }
  }

  function playVideoBlog(e) {
    var video = e.target.parentElement.children[0];
    if (video.paused || video.ended) {
    video.play();
    e.target.innerText  = "Pause";
  } else {
    video.pause();
    e.target.innerText = "Play";
  }
  }