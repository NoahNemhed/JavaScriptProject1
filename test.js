for(let i = 0; i<5; i++){
    const row = document.createElement("p");
    const node = document.createTextNode("Rad " + (i+1));
    row.appendChild(node);
    row.style.Color = "purple";
    
    switch(i){
        case 0:
            row.style.fontSize = "15px";
            row.style.backgroundColor = "blue"
            break
        case 1:
            row.style.fontSize = "25px";
            row.style.backgroundColor = "green"
            break
        case 2:
            row.style.fontSize = "35px";
            row.style.backgroundColor = "red"
            break
        case 3:
            row.style.fontSize = "45px";   
            row.style.backgroundColor = "orange"
            break  

            case 4:
                row.style.fontSize = "45px";   
                row.style.backgroundColor = "pink"
                break         
                  
    }
    document.body.appendChild(row);
    
}

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
        row.style.backgroundColor = "purple";
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
        row.style.backgroundColor = "purple";
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

function letterToString(i){
    switch(i){
            case 1:
            return "ett"
            
            
            case 2:
            return "två"
        
            case 3:
            return "tre"
            
            case 4:
            return "fyra"

            case 5:
            return "fem"

            case 6:
            return "sex"

            case 7:
            return "sju"

            case 8:
            return "åtta"
            
            case 9:
            return "nio"

            case 10:
            return "tio"


    }
}

for(let i = 1; i<10; i++){
    let nr = letterToString(i)
    if(nr != "sex"){

   

    if(i % 2 == 0){
        const row = document.createElement("p");
        const node = document.createTextNode(nr);
        row.appendChild(node); 
        row.style.backgroundColor = "black";
        row.style.color = "white";
        document.getElementById("div3").appendChild(row);
          
    }else{
        const row = document.createElement("p");
        const node = document.createTextNode(nr);
        row.appendChild(node);
        row.style.backgroundColor = "white";
        row.style.color = "black";
        document.getElementById("div3").appendChild(row);
    }

}else{

    const row = document.createElement("p");
    const node = document.createTextNode(nr);
    row.appendChild(node); 
    row.style.backgroundColor = "purple";
    row.style.color = "white";
    document.getElementById("div3").appendChild(row);

}

}

document.getElementById("masterDiv").style.justifyContent = "space-between"
document.getElementById("masterDiv").style.border = "solid 1px black";
document.getElementById("masterDiv").style.fontSize = "20px";
document.getElementById("div1").style.border = "solid 3px purple";
document.getElementById("div2").style.border = "solid 3px purple";
document.getElementById("div3").style.border = "solid 3px purple";
document.getElementById("div1").style.width = "33%";
document.getElementById("div2").style.width = "33%";
document.getElementById("div3").style.width = "33%";



