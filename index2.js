
function getEndPointData(endPointURL, callBackFunction,rowid){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
         
        const newData = Object.keys(data);

        const xyz = data[newData]
        
        callBackFunction(xyz,rowid);
  
    }
    xhr.send();
  }
 
function generateCell(title, img) {
  return ` <div class="col-lg-3" >
  <img src="${img}" alt=""> <br>
  <a class = "color">${title}</a>
</div>`;
}


function bindingData(xyz,rowid) {
    
    for(let i in xyz) {
        var title = xyz[i].Name;
        var img = xyz[i].Image;
        document.getElementById(`${rowid}`).innerHTML += generateCell(title, img);
     
    }
   
}
getEndPointData("latestMeals.json", bindingData,"row");
getEndPointData("Popular.json", bindingData,"row2");
getEndPointData("Random.json", bindingData, "row3");
getEndPointData("Ingrediants.json", bindingData, "row4");



// const PopularIngredients = getEndPointData("Popular.json",bindingData1);
// function bindingData1(data) {
// for(let i in data.PopularIngredients) {
//     var title = data.PopularIngredients[i].Name;
//     var img = data.PopularIngredients[i].Image;
//     document.getElementById("row2").innerHTML+=generateCell(title,img);
// }
// }


// const Random =getEndPointData("Random.json", bindingData2);
// function bindingData2(data) {
//     for(let i in data.Random){
//         var title = data.Random[i].Name;
//         var img = data.Random[i].Image;
//         document.getElementById("row3").innerHTML+=generateCell(title, img);
//     }
// }

// const RandomIngredients =getEndPointData("Ingrediants.json", bindingData3);
// function bindingData3(data) {
// for(let i in data.RandomIngredients){
//     var title=data.RandomIngredients[i].Name;
//     var img = data.RandomIngredients[i].Image;
//     document.getElementById("row4").innerHTML+=generateCell(title, img);
// }
// }

// function generateCell(title,img) {

//     let check = $.get("templete.html", (data) => {
//         let newData = data.replace("##IMG##", img);
//         newData = newData.replace("##TITLE##", title);
//         console.log(newData);
//     });
// }