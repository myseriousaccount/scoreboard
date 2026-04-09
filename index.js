let homeCountEl = document.getElementById("home-count")
let guestCountEl = document.getElementById("guest-count")
let homeCount = 0
let guestCount = 0
function add1Home()
{
  homeCount += 1
  homeCountEl.textContent = homeCount
}
function add1Guest()
{
  guestCount += 1
  guestCountEl.textContent = guestCount
}
function reset()
{
  homeCount = 0
  guestCount = 0
  homeCountEl.textContent = 0
  guestCountEl.textContent = 0
}