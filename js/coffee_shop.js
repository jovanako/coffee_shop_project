const addElement = () => {
  const navbar = document.createElement("div")
  navbar.id = "nav-bar"

  const firstLink = document.createElement("a")
  const homeText = document.createTextNode("Home")
  firstLink.appendChild(homeText)
  firstLink.title = "Homepage"
  firstLink.href = "index.html"
  navbar.appendChild(firstLink)

  const secondLink = document.createElement("a")
  const aboutText = document.createTextNode("About Us")
  secondLink.appendChild(aboutText)
  secondLink.title = "About us"
  secondLink.href = "about.html"
  navbar.appendChild(secondLink)

  const thirdLink = document.createElement("a")
  const menuText = document.createTextNode("Menu")
  thirdLink.appendChild(menuText)
  thirdLink.title = "Menu"
  thirdLink.href = "menu.html"
  navbar.appendChild(thirdLink)

  const fourthLink = document.createElement("a")
  const teamText = document.createTextNode("Our Team")
  fourthLink.appendChild(teamText)
  fourthLink.title = "Meet our team"
  fourthLink.href = "team.html"
  navbar.appendChild(fourthLink)

  const fifthLink = document.createElement("a")
  const contactText = document.createTextNode("Contact")
  fifthLink.appendChild(contactText)
  fifthLink.title = "Contact"
  fifthLink.href = "contact.html"
  navbar.appendChild(fifthLink)

  document.body.prepend(navbar)
}

document.body.onload = addElement;