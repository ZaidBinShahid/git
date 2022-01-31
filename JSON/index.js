
function getData() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "latestMeals.json");
    xhr.onload = function () {
        // console.log(xhr.responseText);

        const datax = JSON.parse(xhr.responseText);
        var data = datax.latestMeals;
        var outPut = '';
        for (let i in data) {
            outPut += `
             <div class="col-lg-3" >
                <img src="${data[i].Image}" alt=""> <br>
                <p class = "color">${data[i].Name}</p>
            </div>`
        }
        document.getElementById("row").innerHTML = outPut;

    }

    xhr.send();
}
getData();


// Popular Ingrediants

function sunnyDay() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Popular.json");
    xhr.onload = function () {
        // console.log(xhr.responseText);

        const datax = JSON.parse(xhr.responseText);
        var data = datax.PopularIngredients;
        var outPut = '';
        for (let i in data) {
            outPut += `
            
            `
        }
        document.getElementById("row2").innerHTML = outPut;

    }

    xhr.send();
}
sunnyDay();


// Random Meals

function badDay() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Random.json");
    xhr.onload = function () {
        // console.log(xhr.responseText);

        const datax = JSON.parse(xhr.responseText);
        var data = datax.Random;
        var outPut = '';
        for (let i in data) {
            outPut += `
             <div class="col-lg-3" >
                <img src="${data[i].Image}" alt=""> <br>
                <p class = "color">${data[i].Name}</p>
            </div>`
        }
        document.getElementById("row3").innerHTML = outPut;

    }

    xhr.send();
}
badDay();


// Random Ingrediants

function deliciousMeal() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Random.json");
    xhr.onload = function () {
        // console.log(xhr.responseText);

        const datax = JSON.parse(xhr.responseText);
        var data = datax.Random;
        var outPut = '';
        for (let i in data) {
            outPut += `
             <div class="col-lg-3" >
                <img src="${data[i].Image}" alt=""> <br>
                <p class = "color">${data[i].Name}</p>
            </div>`
        }
        document.getElementById("row4").innerHTML = outPut;

    }

    xhr.send();
}
deliciousMeal();













































// function getData(){
//     const studio = new XMLHttpRequest();
//     studio.open = ("GET", "https://www.themealdb.com/api/json/v1/1/categories.php");
//     studio.onload = function() {

//         const sunny = JSON.parse(studio.responseText);
//         var coke = sunny.categories;
//         var outPut = '';
//         for (let i in coke){
//         outPut += `div class="col-lg-3" >
//                          <img src="${coke[i].strCategoryThumb}" alt="">
//                      </div>`;
//     }
//     document.getElementById("row").innerHTML = outPut;
// }

// studio.send();
// }

// getData();