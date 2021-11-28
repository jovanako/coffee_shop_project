$(() => $.ajax({
    url: 'https://randomuser.me/api/?results=4',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      
      $.each(data.results, function(index, person) {
        
        let number = Math.floor(Math.random() * (6 - 1) + 1)
        let stars = ""
        for (i = 0; i <= number; i++) {
          stars += <i class="fas fa-star stars"></i>
        }

        const reviewHtml =
          `<div class="reviews">
            <img class="random-person-image" src="${person.picture.medium}" alt=""></img>
            <h1>${`${person.name.first} ${person.name.last}`}</h1>
            <p>${stars}</p>
          </div>`

        $("#reviews-div").append(reviewHtml)
      })
    }
  })

)