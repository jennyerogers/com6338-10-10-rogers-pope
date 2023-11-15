    // set const
    const apiKey = 'live_DLh34byWpBPIVNy6t1iKA8y8PnnTEPHm2gY3fZotnK1OHTSmnZyT0myqfUhH6YR3';
    const catImageElement = document.getElementById("catImage");

    getRandomCat()
    const generateDogButton = document.querySelector("button");
    generateDogButton.onclick = getRandomCat

    function getRandomCat() {
        // Fetch a cat image from cat API
        fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // XX
                catImageElement.src = data[0].url;
            })
            .catch(error => {
                console.error("Error fetching random dog image:", error);
            });
    }