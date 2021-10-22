const createNavbarItem = (linkData) => {
  const link = document.createElement("a")
  const text = document.createTextNode(linkData.name)
  link.appendChild(text)
  link.href = linkData.page
  return link
}

const addNavbar = () => {
  const navbar = document.createElement("div")
  navbar.id = "nav-bar"

  const navbarItemData = [{
    name: "Home", 
    page: "index.html"
  }, {
    name: "About Us", 
    page: "about.html"
  }, {
    name: "Menu",
    page: "menu.html"
  }, {
    name: "Our Team",
    page: "team.html"
  }, {
    name: "Contact",
    page: "contact.html"
  }]

  navbarItemData.forEach(linkData => navbar.appendChild(createNavbarItem(linkData)))

  document.body.prepend(navbar)
}

document.body.onload = addNavbar;