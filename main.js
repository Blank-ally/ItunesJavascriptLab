$(document).ready(function (){

    let params = {
        term: 'a',
        limit:24,
    }
    let  $search = $('#newSearch').val().replaceAll(' ','+')

    GetResults()
 $('#Search').on('submit', function(e){

        e.preventDefault()

 $search = $('#newSearch').val().replaceAll(' ','+')
        console.log($search)
        $('#results').empty()
       params =  {
           term: $search,
           limit:24,
       }

        GetResults()

    })

    function GetResults (){
        $.get(
            'https://itunes.apple.com/search?',
            params,
            function(data){
                console.log('results',data)
                console.log(data.results[0].collectionName)

                for( let item of data.results){

                    $('#results').append(`
                  <div class="col col-sm-4 col-md-3">
            <div class="card"  style="max-height: 100%; max-width: 100%" >
                <img src="${item.artworkUrl100}" class="card-img-top" style="max-height: 75%; max-width: 100%" >
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