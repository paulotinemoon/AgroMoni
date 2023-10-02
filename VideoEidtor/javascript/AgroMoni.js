
let itemsArray=[];

let heroArray =[
{   id:0,
    src:"./images/bitter_kola.jpg",
    h1:"Bitter Kola Uses",
    href:"./category/Bitter_Kola_Uses.html"
},
{   id:1,
    src:"./images/Garlic.jpg",
    h1:"Garlic Medic Uses",
    href:"./category/Garlic_medic.html"
},
{   id:2,
    src:"./images/ginger.jpg",
    h1:"Ginger Medical Uses",
    href:"./category/Ginger.html"
},
{   id:3,
    src:"./images/TigerNut.jpg",
    h1:"Tiger Nut Medical Uses",
    href:"./category/Tiger.html"
},
{   id:4,
    src:"./images/Tumeric.jpg",
    h1:"Tumeric Medical Uses",
    href:"./category/Tumeric.html"
},
{   id:5,
    src:"./images/stoneBreaker.jpg",
    h1:"Stone Breaker Medical Uses",
    href:"./category/Stone.html"
},
{   id:6,
    src:"./images/Scent leave.jpg",
    h1:"Scent leave Medical Uses",
    href:"./category/Scentleave.html"
},
{   id:7,
    src:"./images/morigna leave.jpg",
    h1:"Morigna leave Medical Uses",
    href:"./category/morigna.html"
},
]

heroArrayItem(heroArray);

function heroArrayItem(eachItem){
    document.getElementById("sub-hero-card").innerText="";

    for(let i=0; i<heroArray.length;i++){
        let subHero =document.querySelector("#sub-hero-card")
        subHero.innerHTML+=`
        <div class="col-md-4 mt-3 mr-3">
        <div class="card p-3 ps-5 pe-5">
            <a href="${eachItem[i].href}"><img src="${eachItem[i].src}"
                width="100%" height="320px" /></a>
            <p> ${eachItem[i].h1}</p>
            <a href="${eachItem[i].href}" class="btn btn-success">Read More</a>
        </div>
        </div>
       `
    
    }
}

let searchInput=document.getElementById("search")
searchInput.addEventListener("keyup",()=>{
    let textInput=document.getElementById("search")
     textInput.value

    itemsArray=heroArray.filter((a)=>{
        if(a.h1.includes(textInput)){
            return a.h1
        }
    })
    if(this.value==""){
        showGallery(heroArray)
    }
    else{
        if(itemsArray==""){
            document.getElementById("header").style.display="block";
            document.getElementById("sub-hero-card").innerHTML="";
        }
        else{
            showGallery(itemsArray);
            document.getElementById("header").style.display="none";
        }
    }

})



