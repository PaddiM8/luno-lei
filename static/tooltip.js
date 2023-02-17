document.addEventListener("mouseover", e => {
    let target = e.target;
    if (target.parentElement &&
        target.parentElement.classList.contains("hoverable")) {
        target = target.parentElement;
    }

    if (target.classList.contains("hoverable")) {
        target.querySelector(".tooltip").classList.add("visible");

        target.onmouseleave = () => {
            target.querySelector(".tooltip").classList.remove("visible");
        }
    }
});