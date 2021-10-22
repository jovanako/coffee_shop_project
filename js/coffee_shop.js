const createNavbarItem = (name, page) => {
  const link = document.createElement("a")
  const text = document.createTextNode(name)
  link.appendChild(text)
  link.href = page
  return link
}

const addNavbar = () => {
  const navbar = document.createElement("div")
  navbar.id = "nav-bar"

  navbar.appendChild(createNavbarItem("Home", "index.html"))
  navbar.appendChild(createNavbarItem("About Us", "about.html"))
  navbar.appendChild(createNavbarItem("Menu", "menu.html"))
  navbar.appendChild(createNavbarItem("Our Team", "team.html"))
  navbar.appendChild(createNavbarItem("Contact", "contact.html"))

  document.body.prepend(navbar)
}

document.body.onload = addNavbar;