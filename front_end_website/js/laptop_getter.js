const base_url = 'http://localhost:8000/api/laptops_by_price/'

function get_laptops_by_price(price){

    const laptop_view = document.getElementById('laptop_view')
	laptop_view.innerHTML = ""

    const container = document.createElement('div')
    container.setAttribute('class', 'wrapper')

    laptop_view.appendChild(container)


    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', base_url + String(price) + "/")

    request.onload = function() {
    // Begin accessing JSON data here
        var data = JSON.parse(this.response);
		console.log(data);
        if(request.status >= 200 && request.status < 400){
            // data.forEach(laptop => {
                // Log each laptop's model
                for(var i = 0; i < 3; i++){

                    console.log(data[i].lapModel)
					
					const laptop_link = document.createElement('a')
					laptop_link.setAttribute('href', data[i].url)
					laptop_link.setAttribute('style', 'color:black')
					laptop_link.setAttribute('target', '_blank')
					
					console.log(data[i].url)

                    const item = document.createElement('div')
                    item.setAttribute('class', 'item')

                    const card = document.createElement('div')
                    card.setAttribute('class', 'polaroid')

                    const card_title = document.createElement('h6')
                    card_title.textContent = data[i].lapModel
					
					const processor = document.createElement('p')
                    processor.textContent = data[i].processor
					
					const price = document.createElement('p')
                    price.textContent = "BDT " + data[i].price

                    const img = document.createElement('img')
                    img.src = data[i].image_url				

                    // Append the cards to the container element
                    container.appendChild(laptop_link)
					
					laptop_link.appendChild(item)

                    item.appendChild(card)

                    
                    card.appendChild(card_title)
					card.appendChild(processor)
					card.appendChild(price)
                    card.appendChild(img)
            // })
                }
        } else {
            console.log('error')
        }
    }

    // Send request
    request.send()

}

