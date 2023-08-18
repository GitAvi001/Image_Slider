//selecting all filter buttons and filterable cards

const filterButtons=document.querySelectorAll(".filter_buttons button");
const filterableCards=document.querySelectorAll(".filterable_cards .card");

//Define filterCards function

const filterCards= e =>{

    document.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    filterableCards.forEach(card=>{
        //adding hide class to hide the card initially 

        card.classList.add("hide");

        //checking if the card matches the selected filter or "all" is selected.

        if(card.dataset.name===e.target.dataset.name || e.target.dataset.name==="all"){

            card.classList.remove("hide");

        }
    })

}

//Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click",filterCards));



