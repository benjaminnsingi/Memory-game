/**
 * Je lui indexe un zero pour récupèrer tous mes éléments dans le tableau
 * @type {Element}
 */
const ul = document.getElementsByClassName("cards-container")[0];
console.log(ul);

let cards = [
    '<i class="fa fa-diamond"></i>',
    '<i class="fa fa-horse-head"></i>',
    '<i class="fa fa-otter"></i>',
    '<i class="fa fa-face-grin-tears"></i>',
    '<i class="fa fa-apple-whole"></i>',
    '<i class="fa fa-ban"></i>',
    '<i class="fa fa-cannabis"></i>',
    '<i class="fa fa-bug"></i>',
    '<i class="fa fa-anchor"></i>',
    '<i class="fa fa-bolt"></i>',
    '<i class="fa fa-cube"></i>',
    '<i class="fa fa-leaf"></i>',
    '<i class="fa fa-anchor"></i>',
    '<i class="fa fa-bicycle"></i>',
    '<i class="fa fa-diamond"></i>',
    '<i class="fa fa-bomb"></i>',
    '<i class="fa fa-leaf"></i>',
    '<i class="fa fa-bomb"></i>',
    '<i class="fa fa-bolt"></i>',
    '<i class="fa fa-bug"></i>',
    '<i class="fa fa-bicycle"></i>',
    '<i class="fa fa-otter"></i>',
    '<i class="fa fa-face-grin-tears"></i>',
    '<i class="fa fa-ban"></i>',
    '<i class="fa fa-cube"></i>',
    '<i class="fa fa-cannabis"></i>',
    '<i class="fa fa-horse-head"></i>',
    '<i class="fa fa-apple-whole"></i>',
];
console.log(cards);
let openCards = [];
let matchedCards = [];

const shuffleArray = (arrayToShuffle) => {

    let currentIndex = arrayToShuffle.length, temporaryValue, randomIndex;
    console.log(currentIndex);

    /**
     * prendre une image aléatoire du tableau et la retirer du tableau d'origine
     */
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        //console.log(randomIndex);
        currentIndex -= 1;
        temporaryValue = arrayToShuffle[currentIndex];
        console.log(temporaryValue);
        arrayToShuffle[currentIndex] = arrayToShuffle[randomIndex];
        console.log(arrayToShuffle);
        arrayToShuffle[randomIndex] = temporaryValue;
    }

    return arrayToShuffle;
}

/**
 * Lorsqu'on selectionne une image et qu'elle n'est pas identique à l'autre image selectionné precedemment on reset notre card
 * @param element
 */
const resetCard = (element) => {
    element.classList.remove("show");
    element.classList.remove("open");
    element.classList.add("error");

    setTimeout(function() {
        element.classList.remove("error");
    }, 1000);
}

/**
 *
 * @param element
 */
function lockCard(element) {
    element.classList.add("match");
    matchedCards.push(element);
}


/**
 * Lorsque j'ouvre une image je vérfie si elle est identique à l'autre image et je valide
 * si c'est le cas alors je valide et dans le cas contraitre je vide et je ferme les deux images non identiques
 */
const showCard = (e) => {
    e.target.classList.add("show");
    e.target.classList.add("open");
    openCards.push(e.target);

    console.log(e.target.firstChild.className);
    if (openCards.length === 2) {

        if (e.target.firstChild.className === openCards[0].firstChild.className) {
            lockCard(e.target);
            lockCard(openCards[0]);
        } else {
            /**
             *  Remise à zéro
             */
            resetCard(e.target);
            resetCard(openCards[0]);
        }
        openCards.length = 0;
    }

    /**
     * Lorsque je finis de trouver toutes mes cartes alors je declenche un message d'alert
     */
    if (matchedCards.length === 28) {
        setTimeout(function() {
            alert("Félicitations ! Tu as gagné !");
        }, 700);
    }
}

/**
 * Je cree mon element cards
 */
const appendCards = () => {
    /**
     * Je fais une boucle en recuperant mon tableau cards je boucle sur ça ensuite je lui ajoute une class card
     */
    for (card of cards) {
        let cardElement = document.createElement('li');
        cardElement.classList.add("card");
        cardElement.innerHTML = card;


        ul.appendChild(cardElement);
        cardElement.addEventListener("click", showCard);
    }
}

shuffleArray(cards);
appendCards();