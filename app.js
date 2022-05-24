// დავალება
// წინა დავალებებში დაწერილი რექვესთები გადაწერეთ async - await, try - catch და axios ის გამოყენებით.
// მინიმუმ 2 რექვესთი გეწეროთ ამ დავალებაში

//async - await,
// function nsullPromise(url = 'https://fakerapi.it/api/v1/books?_quantity=100') {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => response.json())
//             .then(finalData => {
//                 if (finalData.code === 200) {
//                     resolve(finalData);
//                 }
//                 reject('Status Code ' + finalData.code);
//             })
//     })
// }




// async function nullFunc() {
//     const result = await nsullPromise('https://fakerapi.it/api/v1/books?_quantity=100');
//     console.log(result);
//     const ul = document.querySelector('ul');
//     result.data.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item.title;
//         ul.appendChild(li);
//     })
// }

// nullFunc();

//try - catch

// async function nsullTry() {
//     try {
//         const response = await fetch('https://fakerapi.it/api/v1/books?_quantity=100');
//         const result = await response.json();
//         console.log(result);
//         const ul = document.querySelector('ul');
//         result.data.forEach(item => {
//             const li = document.createElement('li');
//             li.textContent = item.title;
//             ul.appendChild(li);
//         })
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log('Heloo');
//     }
// }


// nsullTry();

//axios

function nullAxios() {
    console.log(document.querySelector('#ul').value)
    axios.get("https://fakerapi.it/api/v1/books?_quantity=100").then(function (response) {
            console.log(response);
            const ul = document.querySelector('#ul');
            response.data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.title;
                ul.appendChild(li);
            })
        })
        .catch(function (err) {
            console.log(err);
        });
}

nullAxios();