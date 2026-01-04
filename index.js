function switchTheme() {
  const body = document.documentElement
  body.classList.toggle("light")
}

function changeProfilePic() {
  const profilePic = document.getElementById("profilePic")
  const currentSrc = profilePic.getAttribute("src")
  const newSrc =
    currentSrc === "assets/profile-dark.png"
      ? "assets/profilepic.png"
      : "assets/profile-dark.png"
  profilePic.setAttribute("src", newSrc)
}
