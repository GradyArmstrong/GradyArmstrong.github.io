const cards = document.getElementsByClassName("memory-card");
      
let selectedCard = null;
for (const card of cards){
  card.addEventListener("click",()=>{
    card.getElementsByClassName("back")[0].hidden = true;
    if (selectedCard == null){
      selectedCard = card;
    } else if (selectedCard.getAttribute("data-framework") != card.getAttribute("data-framework")){
      card.getElementsByClassName("back")[0].hidden = false;
      selectedCard.getElementsByClassName("back")[0].hidden = false;
      selectedCard = null;
    } else {
      selectedCard = null;
    }
  })
}