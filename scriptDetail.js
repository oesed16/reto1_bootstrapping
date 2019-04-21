fetch("https://rickandmortyapi.com/api/character/")
.then((response) => { return response.json()})
.then((data) => {

    const results = data.results
    console.log(results)
    // Image
    let image = document.getElementById('image');
    let imageData = results[0].image;
    image.src = imageData;
    // Name
    let name = document.getElementById('name');
    let nameData = results[0].name;
    name.innerHTML = `${nameData}`;
    // Gender
    let gender = document.getElementById('gender');
    let genderData = results[0].gender;
    gender.innerHTML = `${genderData}`;
    // Species
    let species = document.getElementById('species');
    let speciesData = results[0].species;
    species.innerHTML = `${speciesData}`;
    // Status
    let status = document.getElementById('status');
    let statusData = results[0].status;
    status.innerHTML = `${statusData}`;
});