fetch("https://rickandmortyapi.com/api/character/")
.then((response) => { return response.json()})
.then((data) => {

    const results = data.results
    console.log(results)

    // Images 
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let image3 = document.getElementById('image3');
    let maxIndex = results.length - 1
    let random1 = Math.floor(Math.random() * maxIndex);
    let image1Data = results[random1].image;
    image1.src = image1Data;
    let random2 = Math.floor(Math.random() * maxIndex);
    let image2Data = results[random2].image;
    image2.src = image2Data;
    let random3 = Math.floor(Math.random() * maxIndex);
    let image3Data = results[random3].image;
    image3.src = image3Data;

    // Names
    let name1 = document.getElementById('name1');
    let name2 = document.getElementById('name2');
    let name3 = document.getElementById('name3');
    let name1Data = results[random1].name;
    name1.innerHTML = `${name1Data}`;
    let name2Data = results[random2].name;
    name2.innerHTML = `${name2Data}`;
    let name3Data = results[random3].name;
    name3.innerHTML = `${name3Data}`;

});