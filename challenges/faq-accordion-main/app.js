document.addEventListener("DOMContentLoaded", () => {
  const accordionBtn = document.querySelectorAll(".accordion-btn");

  accordionBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const accordionDescription = this.nextElementSibling;

      const plus = this.querySelector(".plus-icon");
      const minus = this.querySelector(".minus-icon");

      if (accordionDescription.style.maxHeight) {
        accordionDescription.style.maxHeight = null;
        plus.style.display = "block";
        minus.style.display = "none";
      } else {
        accordionDescription.style.maxHeight =
          accordionDescription.scrollHeight + "px";
        plus.style.display = "none";
        minus.style.display = "block";
      }
    });
  });
});
