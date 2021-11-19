document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'https://www.pngall.com/wp-content/uploads/4/Fries-PNG-Free-Download-300x225.png'
        },
        {
            name: 'cheeseburger',
            img: 'https://www.pngall.com/wp-content/uploads/5/Sandwich-Hamburger-PNG-300x225.png'
        },
        {
            name: 'ice-cream',
            img: 'https://www.pngall.com/wp-content/uploads/8/Sweet-Ice-Pop-300x225.png'
        },
        {
            name: 'pizza',
            img: 'https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-Free-Download-300x225.png'
        },
        {
            name: 'milkshake',
            img: 'https://www.pngall.com/wp-content/uploads/5/Strawberry-Milkshake-Transparent-300x225.png'
        },
        {
            name: 'cake',
            img: 'https://www.pngall.com/wp-content/uploads/8/Chocolate-Cake-PNG-Clipart-300x225.png'
        },
        {
            name: 'fries',
            img: 'https://www.pngall.com/wp-content/uploads/4/Fries-PNG-Free-Download-300x225.png'
        },
        {
            name: 'cheeseburger',
            img: 'https://www.pngall.com/wp-content/uploads/5/Sandwich-Hamburger-PNG-300x225.png'
        },
        {
            name: 'ice-cream',
            img: 'https://www.pngall.com/wp-content/uploads/8/Sweet-Ice-Pop-300x225.png'
        },
        {
            name: 'pizza',
            img: 'https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-Free-Download-300x225.png'
        },
        {
            name: 'milkshake',
            img: 'https://www.pngall.com/wp-content/uploads/5/Strawberry-Milkshake-Transparent-300x225.png'
        },
        {
            name: 'cake',
            img: 'https://www.pngall.com/wp-content/uploads/8/Chocolate-Cake-PNG-Clipart-300x225.png'
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWzGxo0Nk9zAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWzGxo0Nk9zAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC')
            cards[optionTwoId].setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWzGxo0Nk9zAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/768px-Solid_white.svg.png')
            cards[optionTwoId].setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/768px-Solid_white.svg.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})