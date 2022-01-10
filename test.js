let fontSize = 20;
let red = 50;
let green = 200;
let blue = 100;
for(let i = 0; i<5; i++){
    const row = document.createElement("p");
    const node = document.createTextNode("Rad " + (i+1));
    fontSize += 10;
    row.appendChild(node);
    row.style.fontSize =  fontSize + "px";
    blue += 35;
    let bg = ("rgb" + "(" + red + "," + green + "," + blue + ")")
    row.style.backgroundColor = bg
    row.className = "rows";
    row.style.width = "50%"
    row.style.margin = "auto"
    row.style.marginTop = "4rem"
    row.style.color = "#9370DB"
    row.style.textAlign = "center";
    document.body.appendChild(row);
    
}

const masterDiv1 = document.createElement("div");
masterDiv1.id = "masterDiv1"
document.body.appendChild(masterDiv1)



const masterDiv = document.createElement("div");
masterDiv.id = "masterDiv"
document.body.appendChild(masterDiv)





const div1 = document.createElement("div")
div1.id = "div1"

const div2 = document.createElement("div")
div2.id = "div2"

const div3 = document.createElement("div")
div3.id = "div3"


document.getElementById("masterDiv").appendChild(div1)
document.getElementById("masterDiv").appendChild(div2)
document.getElementById("masterDiv").appendChild(div3)

document.getElementById("masterDiv").style.display = "flex"




for(let i = 0; i<10; i++){
    if(i == 4){
        const row = document.createElement("p");
        const node = document.createTextNode(i);
        row.appendChild(node); 
        row.style.backgroundColor = "#9370DB";
        row.style.color = "white";
        document.getElementById("div1").appendChild(row);

    }
    if(i % 2 == 0 && i != 4){
        const row = document.createElement("p");
        const node = document.createTextNode(i);
        row.appendChild(node); 
        row.style.backgroundColor = "black";
        row.style.color = "white";
        document.getElementById("div1").appendChild(row);
          
    }if(i % 2 == 1){
        const row = document.createElement("p");
        const node = document.createTextNode(i);
        row.appendChild(node);
        row.style.backgroundColor = "white";
        row.style.color = "black";
        document.getElementById("div1").appendChild(row);
    }

}



for(let i = 10; i>0; i--){
    if(i == 8){
        const row = document.createElement("p");
        const node = document.createTextNode(i);
        row.appendChild(node); 
        row.style.backgroundColor = "#9370DB";
        row.style.color = "white";
        document.getElementById("div2").appendChild(row);
    }
    if(i % 2 == 0 && i != 8){
        const row = document.createElement("p");
        const node = document.createTextNode(i);
        row.appendChild(node); 
        row.style.backgroundColor = "black";
        row.style.color = "white";
        document.getElementById("div2").appendChild(row);
          
    }if(i % 2 == 1){
        const row = document.createElement("p");
        const node = document.createTextNode(i);
        row.appendChild(node);
        row.style.backgroundColor = "white";
        row.style.color = "black";
        document.getElementById("div2").appendChild(row);
    }

}

const nrArray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]

for(let i = 0; i<10; i++){
    
    if(i != 6){

    if(i % 2 == 0){
        const row = document.createElement("p");
        const node = document.createTextNode(nrArray[i]);
        row.appendChild(node); 
        row.style.backgroundColor = "black";
        row.style.color = "white";
        document.getElementById("div3").appendChild(row);
          
    }else{
        const row = document.createElement("p");
        const node = document.createTextNode(nrArray[i]);
        row.appendChild(node);
        row.style.backgroundColor = "white";
        row.style.color = "black";
        document.getElementById("div3").appendChild(row);
    }

}else{

    const row = document.createElement("p");
    const node = document.createTextNode(nrArray[i]);
    row.appendChild(node); 
    row.style.backgroundColor = "#9370DB";
    row.style.color = "white";
    document.getElementById("div3").appendChild(row);

}

}

document.getElementById("masterDiv").style.justifyContent = "space-around"
document.getElementById("masterDiv").style.border = "solid 1px black";
document.getElementById("masterDiv").style.fontSize = "20px";
document.getElementById("div1").style.border = "solid 10px #9370DB";
document.getElementById("div2").style.border = "solid 10px #9370DB";
document.getElementById("div3").style.border = "solid 10px #9370DB";
document.getElementById("div1").style.width = "5%";
document.getElementById("div2").style.width = "5%";
document.getElementById("div3").style.width = "5%";



document.getElementById("masterDiv1").appendChild(masterDiv);
document.getElementById("masterDiv1").style.width = "50%";
document.getElementById("masterDiv1").style.margin = "auto"
document.getElementById("masterDiv1").style.marginTop = "5rem"

