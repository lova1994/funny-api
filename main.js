// async function chuckMe() {
//     const url = 'https://api.chucknorris.io/jokes';
//     const endpoint = 'random';

//     try {
//         let resp = await fetch(`${url}/${endpoint}`);
//         let joke = await resp.json();
//         document.write(joke.value)

//         console.log(joke);
//     } catch (err) {
//         console.log(err)
//     }
// }

// chuckMe();

async function chuckMeAgain() {
    const baseUrl = 'https://api.chucknorris.io/jokes';
    const endpoint = 'random';
    const query = 'category';
    const category = 'dev';
    let URL = `${baseUrl}/${endpoint}?${query}/${category}`

    try {
        let resp = await fetch(URL);
        let joke = await resp.json();
        updateUI(joke);
    } catch (err) {
        console.log(err)
    }
}

function updateUI(data) {
    let el = document.createElement('article');
    el.innerHTML =
        `<h1>${data.value}</h1>
    <img src="${data.icon_url}" alt="chuck it" />`
    document.querySelector('body').appendChild(el);
}

chuckMeAgain();


// LOCAL STORAGE //

// sessionStorage.set

// sessionStorage.get

// sessionStorage.clear


// sessionStorage.setItem('name', 'Lova');

// sessionStorage.setItem('name', 'Pikachu');

// let name = sessionStorage.getItem('name');

// console.log(name)

let user = {
    name: 'Lova',
    email: 'lova@hey.se'
};

localStorage.setItem('user', JSON.stringify(user));

let person = localStorage.getItem('user')
console.log(JSON.parse(person).name)

