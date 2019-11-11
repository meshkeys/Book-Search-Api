function bookSearch(){
  var search = document.getElementById('Search').value
  document.getElementById('results').innerHTML = ""

  $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
  
      success: function(response) {
          for (i = 0; i < response.items.length; i++){
            title=$('<h5>' + response.items[i].volumeInfo.title + '</h5>');
            img = $('<img class="">`<br><a href="' + response.items[i].volumeInfo.infoLink + '"><button id="imagebutton" class="btn red aligning">Read More</button></a>');
            results.innerHTML += `<h5>` + response.items[i].volumeInfo.publisher + `</h5>`
            results.innerHTML += `<h5>` + response.items[i].volumeInfo.publishedDate +`</h5>`
            
            if(response.items[i].volumeInfo == undefined){
              } 
              url= response.items[i].volumeInfo.imageLinks.thumbnail;
              title.appendTo("#results");
              img.attr('src', url);
              img.appendTo("#results");

            if(response.items[i].volumeInfo != undefined){

            }
        }
  },
      type: 'GET'
  });
}
  document.getElementById('searchbtn').addEventListener('click', bookSearch, false);