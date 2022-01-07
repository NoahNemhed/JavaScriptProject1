for(let i = 0; i<5; i++){
    const row = document.createElement("p");
    const node = document.createTextNode("Rad " + (i+1));
    
    row.appendChild(node);
    row.style.Color = "#9370DB";
    
    
    switch(i){
        case 0:
            row.style.fontSize = "15px";
            row.style.backgroundColor = "#90fc03"
            row.className = "rows";
            row.style.width = "50%"
            row.style.margin = "auto"
            row.style.color = "#9370DB"
            row.style.textAlign = "center";
            
            break
        case 1:
            row.style.fontSize = "25px";
            row.style.backgroundColor = "#77fc03"
            row.className = "rows";
            row.style.width = "50%"
            row.style.margin = "auto"
            row.style.marginTop = "1rem"
            row.style.color = "#9370DB"
            row.style.textAlign = "center";
            
            break
        case 2:
            row.style.fontSize = "35px";
            row.style.backgroundColor = "#03fc88"
            row.className = "rows";
            row.style.width = "50%"
            row.style.margin = "auto"
            row.style.marginTop = "2rem"
            row.style.color = "#9370DB"
            row.style.textAlign = "center";
            break
        case 3:
            row.style.fontSize = "45px";   
            row.style.backgroundColor = "#03fce3"
            row.className = "rows";
            row.style.width = "50%"
            row.style.margin = "auto"
            row.style.marginTop = "3rem"
            row.style.color = "#9370DB"
            row.style.textAlign = "center";
            break  

            case 4:
                row.style.fontSize = "55px";   
                row.style.backgroundColor = "#03b5fc"
                row.className = "rows";
                row.style.width = "50%"
                row.style.margin = "auto"
                row.style.marginTop = "4rem"
                row.style.color = "#9370DB"
                row.style.textAlign = "center";
                break         
                  
    }
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


