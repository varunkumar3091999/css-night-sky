const appendStars = () => {
  const sky = document.getElementById("night-sky");

  for (var i = 0; i < 100; i++) {
    const topPosition = Math.floor(Math.random() * 100);
    const leftPosition = Math.floor(Math.random() * 100);

    const starElement = document.createElement("div");
    starElement.classList.add("star-first-layer", "star-1");
    starElement.style.cssText = `position:absolute;top:${topPosition}%;left:${leftPosition}%`;
    sky.appendChild(starElement);
  }

  for (var i = 0; i < 20; i++) {
    const topPosition = Math.floor(Math.random() * 100);
    const leftPosition = Math.floor(Math.random() * 100);

    const starElement = document.createElement("div");
    starElement.classList.add("star-second-layer", "star-1");
    starElement.style.cssText = `position:absolute;top:${topPosition}%;left:${leftPosition}%`;
    sky.appendChild(starElement);
  }

  for (var i = 0; i < 22; i++) {
    const topPosition = Math.floor(Math.random() * 100);
    const leftPosition = Math.floor(Math.random() * 100);

    const starElement = document.createElement("div");
    starElement.classList.add("star-third-layer", "star-1");
    starElement.style.cssText = `position:absolute;top:${topPosition}%;left:${leftPosition}%`;
    sky.appendChild(starElement);
  }

  for (var i = 0; i < 20; i++) {
    const topPosition = Math.floor(Math.random() * 100);
    const leftPosition = Math.floor(Math.random() * 100);

    const starElement = document.createElement("div");
    starElement.classList.add("star-forth-layer", "star-1");
    starElement.style.cssText = `position:absolute;top:${topPosition}%;left:${leftPosition}%`;
    sky.appendChild(starElement);
  }
};

const appendShootingStars = () => {
  const shootingStarElement = document.createElement("div");
};

window.addEventListener("load", appendStars);
