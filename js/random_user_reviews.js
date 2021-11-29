$(() => $.ajax({
    url: 'https://randomuser.me/api/?results=4',
    dataType: 'json',
    success: function(userData) {

      $.ajax({
        url: 'https://opensheet.vercel.app/1gDEZwxw64n-jEWVBSXneFmAubQ7nVZ9rDbTDpSZVrAw/Sheet1',
        dataType: 'json',
        success: function(comments) {
          
          userData.results.forEach(function(person, index) {
            let number = Math.floor(Math.random() * (6 - 4) + 4)
            let stars = ""
            for (i = 0; i < number; i++) {
              stars += '<i class="fas fa-star stars"></i>'
            }            
    
            const reviewHtml =
              `<div class="reviews">
                <img class="random-person-image" src="${person.picture.large}" alt=""></img>
                <h1 class="person-name">${`${person.name.first} ${person.name.last}`}</h1>
                <p class="comments">${comments[index].Review}</p>
                <p>${stars}</p>
              </div>`
    
            $("#reviews-div").append(reviewHtml)
          })

        }
      })
    }
  })

)