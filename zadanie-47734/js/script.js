
console.log('Hello Maciek');

let preloading = false;

let showLoader = () => {
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    preloading = true;
}

let hideLoader = () => {
    let loader = document.getElementById('loader');
    loader.style.display = 'none';
    preloading = false;
}


let getData = () => {

    if(!preloading) {
        
        showLoader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(response => response.json())
            .then(data => {

                let hr = document.createElement('hr');
                document.body.appendChild(hr);

                for (let user of data) {
                    let uId = document.createElement('p');
                    uId.innerText = `User ID: ${user.id}`
                    let uName = document.createElement('p');
                    uName.innerText = `User Name: ${user.name}`;
                    let uUrl = document.createElement('p');
                    uUrl.innerText = `User URL: ${user.website}`;
                    let line = document.createElement('p');
                    line.innerText = '--------';

                    document.body.appendChild(uId);
                    document.body.appendChild(uName);
                    document.body.appendChild(uUrl);
                    document.body.appendChild(line);
                }
                
                hideLoader();
            })
            .catch(error => {
                console.log(error);
            });

    }
    
}

let scrollToEndOfPage = () => {

    let doc = document.documentElement;
    let scrollHeight = doc.scrollHeight;
    let scrollTop = doc.scrollTop;
    let clientHeight = doc.clientHeight;

    let sumScroll = Math.ceil(scrollTop + clientHeight);

    if (sumScroll >= scrollHeight) {
        
        getData();
    }
      
}

window.addEventListener('scroll', scrollToEndOfPage);