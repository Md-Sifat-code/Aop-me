const loadpetapotion = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res)=> res.json())
        .then((data)=>addadoption_on_modal(data.petData))
        .catch((error) => console.log(error))
}

const addadoption_on_modal= (petData)=>{
    const modal1 = document.getElementById("dialog")
    modal1.innerHTML =`
    
    <div class="flex flex-col items-center">
        <img class="text-center" width="50" height="50" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-handshake-achievements-flaticons-lineal-color-flat-icons-2.png" alt="external-handshake-achievements-flaticons-lineal-color-flat-icons-2"/>
    <h1 class ="text-center text-black text-xl font-black">Congrates</h1>
    <div>
    <p class="text-center"> <span  class="countdown font-mono text-6xl" id="countdown">3</span></p>
</div>

    </div>
    <div class="modal-action">
    <form class="w-full" method="dialog">
        <button type="button" onclick="startCountdown()" class="btn bg-[#0E7A811A] text-[#0E7A81] font-bold w-full">
            Close
        </button>
    </form>
</div>
    `
}

// let countdownValue = 3;
// let countdownInterval;

// function startCountdown() {
//     document.getElementById('countdown').innerText = countdownValue;
//     countdownInterval = setInterval(function() {
//         countdownValue--;
//         document.getElementById('countdown').innerText = countdownValue;
//         if (countdownValue === 0) {
//             clearInterval(countdownInterval);
//         }
//     }, 2000);
// }
function startCountdown() {
    const button = document.querySelector('.modal-action button');
    button.disabled = true;
    let countdownValue = 3;
    const countdownInterval = setInterval(function() {
        const countdownValue1= document.getElementById('countdown');
        countdownValue1.innerText = `${countdownValue}`;
        countdownValue--;

        if (countdownValue < 0) {
            clearInterval(countdownInterval);
            closeModal();
        }
    }, 1000);
}

function closeModal() {
    document.querySelector('dialog[open]').close();
    const button = document.querySelector('.modal-action button');
    button.innerText = 'Close';
    button.disabled = false;
}