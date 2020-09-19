const cards = document.querySelectorAll(".cards > .card");

cards.forEach((card) =>
  card.addEventListener("click", (event) => {
    const desired = "[object HTMLParagraphElement]";
    const target = event.target.toString();
    if (target === desired) {
      //target paragraph
      const p = event.target;
      //target poster image
      const poster = card.querySelector(".poster > img");
      //apply necessary stylings
      poster.style.position =
        poster.style.position === "relative" ? "absolute" : "relative";
      card.style.height = card.style.height === "auto" ? "150px" : "auto";
      p.classList.toggle("active");
    }
  })
);
