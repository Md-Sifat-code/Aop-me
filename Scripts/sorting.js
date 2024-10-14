document.getElementById("sorting").addEventListener("click",function(){
    const cardList = document.getElementById("cards");
    console.log(typeof(cardList))
    console.log(cardList)
    let cards = Array.from(cardList.children);
    console.log(cards)
    const takaElements = document.getElementsByClassName("taka");
    console.log(takaElements)
    const n = cards.length;
    let cardData = [];
    console.log(n)
    for( let i=0; i<n;i++){
        let x = takaElements[i].innerText;
        let y = x.split(":");
        let price = y[1];
        console.log(price);
        cardData.push({ element: cards[i], price: price });
    }
    cardData.sort((a, b) => b.price - a.price);
    cardList.innerHTML = "";
    cardData.forEach(card => {
        cardList.appendChild(card.element);
    });
    
    
    
});
//  firstly tried using fletching but not happened!!. then tried linear search DSA property