$( function() {
    $('#data-btn').click( function() {

        // 1. Przy użyciu $.get

        $.get('https://akademia108.pl/api/ajax/get-post.php', function(data) {
            console.log(data);
            $('#data-btn').after('<hr></hr>');
            $('#data-btn').after(`<p id="body">Body: ${data.body}</p>`);
            $('#data-btn').after(`<p id="title">Title: ${data.title}</p>`);
            $('#data-btn').after(`<p id="id">ID: ${data.id}</p>`);
            $('#data-btn').after(`<p id="user-id">User-ID: ${data.userId}</p>`);
        })
        .fail( function(error) {
            console.error(error);
        })

        // 2. Przy użyciu $.getJSON

        // $.getJSON('https://akademia108.pl/api/ajax/get-post.php', function(data) {
        //     console.log(data);
        //     $('#data-btn').after('<hr></hr>');
        //     $('#data-btn').after(`<p id="body">Body: ${data.body}</p>`);
        //     $('#data-btn').after(`<p id="title">Title: ${data.title}</p>`);
        //     $('#data-btn').after(`<p id="id">ID: ${data.id}</p>`);
        //     $('#data-btn').after(`<p id="user-id">User-ID: ${data.userId}</p>`);
        // })
        // .fail( function(error) {
        //     console.error(error);
        // })

    })
});