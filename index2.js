
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
 
function generateCell(title, img, rowid) {
 
  let template = document.querySelector('#element').content.cloneNode(true);
  template.querySelector("img").setAttribute("src",img);
  template.querySelector("a").textContent=title;
  document.querySelector(`#${rowid}`).append(template);
}

function bindingData(xyz,rowid) {
    
    for(let i in xyz) {
        var title = xyz[i].Name;
        var img = xyz[i].Image;
        generateCell(title, img, rowid);
     
    }
   
}
getEndPointData("JSON/latestMeals.json", bindingData,"row");
getEndPointData("JSON/Popular.json", bindingData,"row2");
getEndPointData("JSON/Random.json", bindingData, "row3");
getEndPointData("JSON/Ingrediants.json", bindingData, "row4");