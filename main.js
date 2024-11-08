$(document).ready(function (){

    const params = {
        q: 'javascript',
        maxResults:24,
    }
$('#Search').on('submit', function(e){

    e.preventDefault()
    let $search = $('#newSearch').val().replaceAll(' ','+')
    console.log($search)
    $.get(
        'https://itunes.apple.com/search?term=' + $search,
        params,
        function(data){
            console.log('results',data)
            console.log(data.results[0].collectionName)

            for( let item of data.results){

                $('#results').append(`
                  <div class="col">
            <div class="card">
                <img src="${item.artworkUrl100}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${item.collectionName}</h5>
                    <h6>${item.artistName}</h6>
                    <p>${item.wrapperType}</p>
                </div>
            </div>
        </div>
                `)

            }

        },
        'json'
    );

    console.log('done loading')


})


});