"use strict"

window.addEventListener("load", windowLoad)
function windowLoad() {
  document.body.classList.add("loaded")
}

// ----- on-scroll-animation --------------
const items = document.querySelectorAll("[data-animated]")

const appearThreshold = 0.3

const appearOptions = {
  threshold: appearThreshold,
}

const appearCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= appearThreshold) {
      entry.target.classList.add("active")
    } else {
      entry.target.classList.remove("active")
    }
  })
}

const appearObserver = new IntersectionObserver(appearCallback, appearOptions)

items.forEach((item) => {
  appearObserver.observe(item)
})

const animateOnScroll = () => {
  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (itemTop - windowHeight <= 0) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)
// ----- END OF on-scroll-animation --------------
