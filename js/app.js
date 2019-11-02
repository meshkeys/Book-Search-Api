function bookSearch(){
  var search = document.getElementById('Search').value
  document.getElementById('results').innerHTML = ""
  console.log(search)
  $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      success: function(data) {
        console.log(data)
          for (i = 0; i < data.items.length; i++){
             title=results.innerHTML += `<h5 class="card border-success mb-3" style="max-width: 50rem;">` + data.items[i].volumeInfo.title + '</h5>'
            aurthors=results.innerHTML += `<h5>` + data.items[i].volumeInfo.authors +`</h5>`
              publisheDate=results.innerHTML += `<h5>` + data.items[i].volumeInfo.publishedDate +`</h5>`
              description=results.innerHTML += `<h5 class="card" style="width: 50rem">` + data.items[i].volumeInfo.description +`</h5>`
              url= data.items[i].volumeInfo.imageLinks.thumbnail;
  
          }
      }, 
      type: 'GET'
  });
} 
document.getElementById('searchbtn').addEventListener('click', bookSearch, false); 