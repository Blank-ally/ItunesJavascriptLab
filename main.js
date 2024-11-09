$(document).ready(function (){

    const params = {
        q: 'javascript',
        maxResults:24,
    }

    let $search = $('#newSearch').val().replaceAll(' ','+');
    let limit = '&limit=25.';
    entity = '&entity=collectionName'
    GetResults ($search)
$('#Search').on('submit', function(e){

    e.preventDefault()
    $('#results').empty()
    GetResults ($search)
    //console.log($search)


})


    function GetResults (search) {
        $.get(
            'https://itunes.apple.com/search?term=' + search + limit,
            params,
            function(data){
                console.log('results',data)


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

    }

});