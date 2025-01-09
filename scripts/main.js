var filter = document.getElementById('filter');
var itemList = document.querySelectorAll('button');

var buttons = document.querySelectorAll('.btn');
var dexcards = document.querySelectorAll('.dexcard');

filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    //convert input to lowercase
    var text = e.target.value.toLowerCase();
    
    //loop through each button
    itemList.forEach(function(item) {
        //use alt text of images on buttons to find matching Pokémon
        var itemName = item.querySelector('img').alt.toLowerCase();
        
        //match against input text
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex'; //show matching button
        } else {
            item.style.display = 'none'; //hide non-matching button
        }
    });
}


// Add event listeners to each button
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        
        var dexcard = dexcards[index];
        
        //hide all other dexcards
        dexcards.forEach(function(card) {
            if (card !== dexcard) {
                card.classList.remove('active');
            }
        });
        
        //toggle vis of card clicked/remove vis of current card
        if (dexcard.classList.contains('active')) {
            dexcard.classList.remove('active');
        } else {
            dexcard.classList.add('active');
        }
    });
});

//hide all dexcards when clicked outside of dexcard
document.addEventListener('click', function(e) {
    if (!e.target.closest('.btn') && !e.target.closest('.dexcard')) {
        dexcards.forEach(function(card) {
            card.classList.remove('active');
        });
    }
});