const viewMoreBtn = document.getElementById("view-more")
const viewMoreArticles = document.getElementsByClassName("view-more-articles")

let isExpanded = false

viewMoreBtn.addEventListener("click", () => {
    for (let i = 0; i < viewMoreArticles.length; i++) {
        viewMoreArticles[i].style.display = isExpanded ? "none" : "block"
    }

    viewMoreBtn.textContent = isExpanded ? "View more" : "View less"
    isExpanded = !isExpanded
})