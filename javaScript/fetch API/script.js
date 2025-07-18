
const todos = []

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        todos.push(...data)
        console.log(todos);

        const getTable = document.querySelector('#table');

        todos.forEach(todo => {

            const tr = document.createElement('tr')
            const userId = document.createElement('td')
            const id = document.createElement('td')
            const title = document.createElement('td')
            const completed = document.createElement('td')

            userId.innerText = todo.userId
            id.innerText = todo.id
            title.innerText = todo.title
            completed.innerText = todo.completed

            getTable.appendChild(tr)

            tr.appendChild(userId)
            tr.appendChild(id)
            tr.appendChild(title)
            tr.appendChild(completed)

        })
    }).catch(error =>console.log(error,'Failed to fetch data from API'));
    