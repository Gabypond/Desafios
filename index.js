const $namelist = document.querySelector('.name-list')

const nameList = ['Marcos', 'Vinicius', 'Gaby', 'Jonathan', 'Rafael', 'Eric', 'Cadu']

for (const name of nameList) {
    $namelist.innerHTML += `<li>${name}</li>`
    console.log(name)
}

function removeName(name) {
    const lilist = $namelist.querySelectorAll('li')

    for (const li of lilist) {
        if (li.textContent == name) {
            li.remove()

        }

    }
}
removeName('')