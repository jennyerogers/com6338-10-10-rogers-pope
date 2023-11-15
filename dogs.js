   //set const
    const apiKey = 'live_DLh34byWpBPIVNy6t1iKA8y8PnnTEPHm2gY3fZotnK1OHTSmnZyT0myqfUhH6YR3';
    const dogImageElement = document.getElementById("dogImage");

    getRandomDog()
    const generateDogButton = document.querySelector("button");
    generateDogButton.onclick = getRandomDog

    function getRandomDog() {
        // Fetch random dog image from dog API
        fetch(`https://api.thedogapi.com/v1/images/search?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // XX
                dogImageElement.src = data[0].url;
            })
            .catch(error => {
                console.error("Error fetching random dog image:", error);
            });
    }

    // XX
 
