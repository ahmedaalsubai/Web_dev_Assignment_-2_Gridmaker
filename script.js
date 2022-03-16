let colorSelected;
let numRows = 0;
let numColumns = 0;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    //Creates Elements
    let row = document.createElement("tr");
    let col = document.createElement("td");
    col.onclick = function (){
        this.style.backgroundColor = colorSelected;
    };
    
    //Empty case will also increase numColumns
    if (rows.length === 0) {
        //let col = document.createElement("td");
        row.appendChild(col);
        grid.appendChild(row);
        numRows++;
        numColumns++;
    }else {
        for(let i = 0; i < numColumns; i++){
            let col = document.createElement("td");
            col.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    console.log(rows.length);
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let rows = document.getElementsByTagName("tr");
    let newcol = document.createElement("td");
    let row = document.createElement("tr");
    newcol.onclick = function (){
        this.style.backgroundColor = colorSelected;
    }
    if(rows.length == 0){
        row.appendChild(newcol);
        grid.appendChild(row);
        numRows++;
        numColumns++;
    }else {
        for(let row of rows){
            let newcol = document.createElement("td");
            newcol.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(newcol);
        }
        numColumns++;
    }
    console.log(numColumns); 
}

//Removes a row
function removeR() {
    let rows = document.getElementsByTagName("tr");
    rows[rows.length-1].remove();
    numRows--;
    if(numRows == 0)
        numColumns = 0;
}
//Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    numColumns--;
    if(numColumns == 0){
        while(grid.hasChildNodes())
            grid.removeChild(grid.lastChild);
        numRows = 0;
    }
    else{
        for(let row of rows){
            row.removeChild(row.lastChild);
        }
    }


}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
    let rows = document.getElementsByTagName("tr");
    for(let row of rows){
        let columns = row.childNodes;
        for(column of columns){
            column.style.backgroundColor = colorSelected;
        }
    }
    


}

function clearAll(){
    alert("Clicked Clear All")
    let rows = document.getElementsByTagName("tr");
    for(let row of rows){
        let columns = row.childNodes;
        for(column of columns){
            column.style.backgroundColor = "";
        }
    }
}

function fillU(){
    alert("Clicked Fill All Uncolored")
    let rows = document.getElementsByTagName("tr");
    for(let row of rows){
        let columns = row.childNodes;
        for(column of columns){
            if(column.style.backgroundColor === "")
                column.style.backgroundColor = colorSelected;
        }
    }
}