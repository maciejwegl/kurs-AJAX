$( function() {

    $.ajax({
        url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        statusCode: {
            200: function() {
                console.log('wszystko gra');
            }
        },
        
    })
    .done( function(data) {
        console.log(data);
        let person = JSON.parse(data);
        console.log(person.imie);

    })

});