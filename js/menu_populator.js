$(() => $.ajax({
  url: "https://opensheet.vercel.app/1QSijisVkoCAbl1Q475p8eNTbyRHfZ2tNRZIQ0nZbIK4/Sheet1",
  success: result => {
    const categories = arrangeCategories(result)
    
    categories.forEach(category => {
      const categoryDiv = document.createElement("div")
      categoryDiv.classList.add("menu-category")
      const categoryHeader = document.createElement("h4")
      categoryDiv.appendChild(categoryHeader)
      categoryHeader.textContent = category.title
      categoryHeader.classList.add("category-header")
      document.getElementById("lower-container").appendChild(categoryDiv)

      category.items.forEach(item => {
        const menuItem = document.createElement("p")
        menuItem.classList.add("menu-item")
        menuItem.textContent = item.ItemName

        const price = document.createElement("p")
        price.classList.add("price")
        price.textContent = item.Price

        const itemDiv = document.createElement("div")
        itemDiv.append(menuItem, price)

        categoryDiv.append(itemDiv)
      })
    })

  }
}))

const arrangeCategories = categoryData => {
  const categories = categoryData.reduce((acc, menuItem) => {
    const category = acc[menuItem.Category] || []
    category.push(menuItem)
    acc[menuItem.Category] = category
    return acc
  }, {})

  const categoryArr = []
  for (categoryTitle in categories) {
    categoryArr.push({ 
      title: categoryTitle, 
      items: categories[categoryTitle]
    })
  }

  return categoryArr
}