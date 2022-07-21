// selectionne les buttons 
let boldBTN = document.querySelector("#bold")
let italicBTN = document.querySelector("#italic")
let underlineBTN = document.querySelector("#underline")
let rightBTN = document.querySelector("#right")
let leftBTN = document.querySelector("#left")
let centerBTN = document.querySelector("#center")

let colorSelect = document.querySelector("#color")
let sizeSelect = document.querySelector("#size")

leftBTN.classList.add("active")
// selectionne les inputs

// selections txt area
let text = document.querySelector("#text")


function bold(){
    if(text.style.fontWeight == "bold"){
        text.style.fontWeight = "normal"
        boldBTN.classList.remove("active")
    }else{
        text.style.fontWeight = "bold"
        boldBTN.classList.add("active")
        
    }
}


function underline(){
    if(text.style.textDecoration == "underline"){
        // text rahou el textarea
        text.style.textDecoration = "none"
        //style mtaaa el button bidou
        underlineBTN.classList.remove("active")
        
    }else{
        text.style.textDecoration = "underline"
        underlineBTN.classList.add("active")
    }
}
function left(){
    text.style.textAlign ="left"
    leftBTN.classList.add("active")
    rightBTN.classList.remove("active")
    centerBTN.classList.remove("active")
}

function center(){
    if(text.style.textAlign=="center"){
        leftBTN.classList.add("active")
        centerBTN.classList.remove("active")
        text.style.textAlign ="left"
    }else{
        text.style.textAlign ="center"
        leftBTN.classList.remove("active")
        rightBTN.classList.remove("active")
        centerBTN.classList.add("active")
    }
 
}
function right(){
    text.style.textAlign ="right"
    leftBTN.classList.remove("active")
    rightBTN.classList.add("active")
    centerBTN.classList.remove("active")
}


function size(){
    let s = sizeSelect.value
    text.style.fontSize = s
}



sizeSelect.onclick=size
underlineBTN.onclick= underline
boldBTN.onclick = bold

leftBTN.onclick=left
rightBTN.onclick=right
centerBTN.onclick=center