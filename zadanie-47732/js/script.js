console.log('Hello Maciek');


document.getElementById('get-btn').addEventListener('click', function getData() {

    fetch('https://akademia108.pl/api/ajax/get-post.php', {
        method: 'GET'
    })

    .then(response => response.json())
    .then( responseJSON => {
        console.log(responseJSON);
        document.getElementById('userId').innerText = responseJSON.userId;
        document.getElementById('id').innerText = responseJSON.id;
        document.getElementById('title').innerText = responseJSON.title;
        document.getElementById('body').innerText = responseJSON.body;
    })

});

