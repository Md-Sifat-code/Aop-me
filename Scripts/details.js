const loadpetDetails = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res)=> res.json())
        .then((data)=>addDetails_on_modal(data.petData))
        .catch((error) => console.log(error))
}

const addDetails_on_modal= (petData)=>{
    const modal1 = document.getElementById("dialog")
    modal1.innerHTML =`
    <img class="w-full p-4" src=${petData.image} />
    <h1 class="font-bold text-xl text-black test-start px-4">${petData.pet_name}</h1>
    <p class="lato px-4 font-normal text-sm lg:text-xl text-[#131313B3] "><i class="fa-solid fa-grid-2"></i> Breed: ${petData.breed}</p>
    <p class="lato px-4 font-medium flex flex-row gap-2 items-center" ><i class="fa-light fa-calendar"></i>Birth:  ${petData.date_of_birth}</p>
    <p class="lato px-4 font-normal text-sm lg:text-xl text-[#131313B3] flex flex-row items-center gap-2" ><i class="fa-regular fa-mercury"></i>Gender:${petData.gender} </p>
    <p class="lato px-4 font-normal text-sm lg:text-xl text-[#131313B3] flex flex-row items-center gap-2" ><i class="fa-light fa-dollar"></i>Price: ${petData.price}</p>
    <h1 class="text-black font-extrabold text-start text-xl px-4">Details Information</h1>
    <p class="px-4 text-start w-[90%] text-stone-400 text-sm ">${petData.pet_details}</p>
    <div class="modal-action">
            <form class="w-full" method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn bg-[#0E7A811A] text-[#0E7A81] font-bold w-full">Close</button>
            </form>
          </div>
    `
}
