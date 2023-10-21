console.log('Hello Maciek');

$( function() {
    
    $('#get-btn').click( function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            console.log(data);
            $('#imie').text(`Imię: ${data.imie}`);
            $('#nazwisko').text(`Nazwisko: ${data.nazwisko}`);
            $('#zawod').text(`Zawód: ${data.zawod}`);
            $('#firma').text(`Firma: ${data.firma}`);
        })
    });

});