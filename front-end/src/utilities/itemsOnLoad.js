async function showAll(){
    const result = document.getElementById('result');
      result.innerHTML = ''
      try {
          const response = await fetch(`http://localhost:8080/items`);

          response.json().then(function(data) {
              for (let item of data) {
                  result.innerHTML += `
                  <div>
                      <img src="${item.image}" alt="Foto produto"/>
                      <p>${item.product_name}</p><br>
                      <p>${item.price}</p><br>
                      <p>${item.quantity}</p>
                  </div>
                  `
              }
          });
      } catch (error) {
          console.log(error);
      }
}