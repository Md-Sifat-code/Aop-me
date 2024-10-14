
const loading = document.getElementById("loading");
const content = document.getElementById("content");
// active button purpose

const removeactive =()=>{
    const x = document.getElementsByClassName("ctegory-btn");
    console.log(x)
    for(let y of x){
        y.classList.remove("active");
        // y.classList.add("btn",  "px-8",  "items-center", "justify-center", "text-xl", "border-[#0E7A81]",  "bg-white", "font-bold" ,"flex" ,"ctegory-btn")
        y.classList.add("btn","bg-white")

    }
}

// load button catagory

const loadData = ()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res)=> res.json())
        .then((data)=>displayMe(data.categories))
        .catch((error) => console.log(error))
};
// 
const displayMe = (categories) =>{

    categories.forEach((item) =>{

        console.log(item.category)
        const containers = document.getElementById('buttons');
        const button = document.createElement('div');
        // button.innerText = item.category
        // button.classList = "btn btn-primary bg-black text-white border border-white "
        button.innerHTML = `
    <button id="btn-${item.category}" onclick="loadoncategory('${item.category}')" class="btn  px-8  items-center justify-center text-xl border-[#0E7A81]  bg-white font-bold flex ctegory-btn">
        <img class="w-[30px] h-[30px]" src=${item.category_icon} />${item.category}
    </button>
`;

        containers.append(button)
    })
    
};
// load based on category

const loadoncategory = async (category) => {
    const xy = document.getElementById("cards")
    xy.classList.add("hidden")
    const spinner = document.getElementById("spinner");
    spinner.style.display = 'block';
    try {
        console.log(category);
        const delay = new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`);
        const data = await response.json();
        await Promise.all([delay]);
        removeactive();
        
        const activeBtn = document.getElementById(`btn-${category}`);
        console.log(activeBtn);
        activeBtn.classList.add("active");
        activeBtn.classList.remove("bg-white");
        spinner.style.display = 'none';
        xy.classList.remove("hidden")

        addinto(data.data);
    } catch (error) {
        console.log(error);
    }
};









// add catagory type into the div dynamic
const addinto = (x)=>{
    console.log(x)
    const main_palce = document.getElementById("cards")
    main_palce.innerHTML = "";
    // for the bird part
    if(x.length == 0){
        main_palce.classList.remove("grid")
        main_palce.innerHTML = `
        <div class="min-h-screen w-full flex flex-col gap-5 justify-center items-center">
        <img src="./assets/error.webp"/>
        </div>
        `
    }else{
        main_palce.classList.add("grid")
    }
    // 
    x.forEach((y)=>{
        console.log(y)

        const card1 = document.createElement("div")
        let year = new Date(y.date_of_birth).getFullYear();
        card1.innerHTML = `
        <div class="card bg-base-100 w-auto shadow-xl p-6">
  <figure class="h-[30%]">
    <img
      src=${y.image}
      alt="Shoes"
      class="rounded-xl w-full h-full" />
  </figure>
  <div class=" flex flex-col mt-4 items-start text-start lato w-full ">
    <div class="flex flex-col  gap-4 items-start text-start border-b-2 w-full">
        <h2 class="card-title font-bold">${y.pet_name}</h2>
    <p class="lato font-normal text-sm lg:text-xl text-[#131313B3] "><i class="fa-solid fa-grid-2"></i> Breed: ${y.breed}</p>
    <p class="lato font-medium flex flex-row gap-2 items-center" ><i class="fa-light fa-calendar"></i>Birth:   ${year ? `${year}`:`No Data`}</p>
    <p class="lato font-normal text-sm lg:text-xl text-[#131313B3] flex flex-row items-center gap-2" ><i class="fa-regular fa-mercury"></i>Gender:${y.gender ? `${y.gender}`: `No Informatiomn`} </p>
    <p class="lato font-normal text-sm lg:text-xl text-[#131313B3] flex flex-row items-center gap-2 taka" ><i class="fa-light fa-dollar"></i>Price: ${y.price}</p>
    </div>
    <div class="flex flex-row justify-between items-center gap-2 mt-5">
      <button onclick="loadonpetID('${y.petId}')" class="btn px-6 rounded-[12px] text-sm"><i class="fa-regular fa-thumbs-up text-stone-500"></i></button>
      <button onclick="loadpetapotion('${y.petId}'); my_modal_1.showModal();" class="btn btn-outline rounded-[12px] text-xl text-[#0E7A81] bg-white border boder-[#0E7A81]">Adopt</button>
      <button onclick="loadpetDetails('${y.petId}'); my_modal_1.showModal();" class="btn btn-outline rounded-[12px] text-xl text-[#0E7A81] bg-white border boder-[#0E7A81]">Details</button>
    </div>
  </div>
</div>
        
        `
        main_palce.append(card1)

    })

};






// To load all pets

const LoadAllpets = ()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => displayALLpets(data.pets))
        .catch((error) => console.log(error));

};
// 






const displayALLpets =(pets) =>{
    const container = document.getElementById("cards");
    pets.forEach(every => {

        const card = document.createElement("div")
        let year = new Date(every.date_of_birth).getFullYear();
        card.innerHTML = `
        <div class="card bg-base-100 w-auto shadow-xl p-6">
  <figure class="h-[30%]">
    <img
      src=${every.image}
      alt="Shoes"
      class="rounded-xl w-full h-full" />
  </figure>
  <div class=" flex flex-col mt-4 items-start text-start lato w-full ">
    <div class="flex flex-col  gap-4 items-start text-start border-b-2 w-full">
        <h2 class="card-title font-bold">${every.pet_name}</h2>
    <p class="lato font-normal text-sm lg:text-xl text-[#131313B3] "><i class="fa-solid fa-grid-2"></i> Breed: ${every.breed}</p>
    <p class="lato font-medium flex flex-row gap-2 items-center" ><i class="fa-light fa-calendar"></i>Birth:  ${year ? `${year}`:`No Data`}</p>
    <p class="lato font-normal text-sm lg:text-xl text-[#131313B3] flex flex-row items-center gap-2" ><i class="fa-regular fa-mercury"></i>Gender:${every.gender ? `${every.gender}`: `No Informatiomn`} </p>
    <p id="" class="lato font-normal text-sm lg:text-xl text-[#131313B3] flex flex-row items-center gap-2 taka" ><i class="fa-light fa-dollar"></i>Price:${every.price}</p>
    </div>
    <div class="flex flex-row justify-between items-center gap-2 mt-5">
      <button onclick="loadonpetID('${every.petId}')" class="btn px-6 rounded-[12px] text-sm"><i class="fa-regular fa-thumbs-up text-stone-500"></i></button>
      <button onclick="loadpetapotion('${every.petId}'); my_modal_1.showModal();" class="btn btn-outline rounded-[12px] text-xl text-[#0E7A81] bg-white border boder-[#0E7A81]">Adopt</button>
      <button onclick="loadpetDetails('${every.petId}'); my_modal_1.showModal();" class="btn btn-outline rounded-[12px] text-xl text-[#0E7A81] bg-white border boder-[#0E7A81]">Details</button>
    </div>
  </div>
</div>
        
        `
        container.append(card)
        
    });


}
loadData()
LoadAllpets()




// scroll related
function scrollToBest() {
    const target = document.querySelector('#best');
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
}