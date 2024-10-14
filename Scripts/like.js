const loadonpetID = (id)=>{
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res)=> res.json())
        .then((data)=>addimagetolikeSection(data.petData))
        .catch((error) => console.log(error))
}

const addimagetolikeSection =(petData)=>{
    const likeContainer = document.getElementById("likes")
    const element = document.createElement("div")
    element.innerHTML = `
        <div class="w-fit">
            <img class= "px-4 border rounded-[18px]" src = ${petData.image}/>
        </div>

    `
    likeContainer.appendChild(element)

}