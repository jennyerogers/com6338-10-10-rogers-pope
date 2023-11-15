/*
and we have to use localstore somewhere (going to have to relearn that one!)
*/

const form = document.querySelector('form')
const animalSec = document.getElementById('animals')

form.onsubmit = async function(e) {
    e.preventDefault()
    const userSearch = form.search.value.trim()
    animalSec.innerHTML = ''
    this.search.value = ''
    try {
        const res = await fetch(`https://api.api-ninjas.com/v1/animals?name=${userSearch}`, {
            headers: { 'X-Api-Key': 'OZQk/6ir9ftXppmlpBoUOg==QVzAM3ILCSMgMnNz'}
        })
        if (res.status === 404) throw new Error('Zip code not found') //maybe update the error message so that if the animal isn't found, it says so
        const animalData = await res.json()
        console.log(animalData)
        renderAnimal(animalData)
    } catch (err) {
        animalSec.innerHTML = err.message
    }
}

const renderAnimal = ({
    0: {
        name,
        taxonomy: {
            scientific_name
        },
        characteristics: {
            estimated_population_size,
            most_distinctive_feature,
            habitat,
            diet,
             location,
            slogan,
            lifespan
        }
    }    
}) => {
    animalSec.innerHTML = `<h2>${name}</h2>
    <p>Scientific Name: ${scientific_name}</p>
    <p>Distinctive Feature: ${most_distinctive_feature}</p>
    <p>Location: ${location}</p>
    <p>Habitat: ${habitat}</p>
    <p>Diet: ${diet}</p>
    <p>Lifespan: ${lifespan}</p>
    <p>Population: ${estimated_population_size}</p>
    <p>${slogan}</p>`
}
