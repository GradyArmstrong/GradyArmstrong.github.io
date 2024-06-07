const cards = document.getElementsByClassName("memory-card");

let selectedCard = null;
let matchedPairs = 0;

for (const card of cards){
  card.addEventListener("click",()=>{
    card.getElementsByClassName("back")[0].hidden = true;
    if (selectedCard == null){
      selectedCard = card;
    } else if (selectedCard.getAttribute("data-framework") != card.getAttribute("data-framework")){
      setTimeout(() => {
        card.getElementsByClassName("back")[0].hidden = false;
        selectedCard.getElementsByClassName("back")[0].hidden = false;
        selectedCard = null;
      }, 1000);
    } else {
      selectedCard = null;
      matchedPairs++;
      if (matchedPairs === cards.length / 2) {
      }
    }
  });
}