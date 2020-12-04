// Part 1 Here I Fix Intro Game & Player Name


// Here I select Start Game Div with Some Conditions
document.querySelector('.control-buttons span').onclick = function(){

    // Prompt Windo To Ask For Name
    let yourName = prompt ("What's Your Name ?");

    // In Case There Is No Entering Name : if name is empty
    if (yourName == null || yourName == '') { // '' = empty!

    // Set Name To Unknown
        document.querySelector('.name span').innerHTML= 'Unknown';
    // In Case There Is An Entering Name
    } else {

        document.querySelector('.name span ').innerHTML= yourName;
    }

    // To remove  whole Start Game Div Once We Type The Name or AnyWay!
    // Remove Splash Screen 
    document.querySelector('.control-buttons').remove();

}



// Part 2 Here I Created The Main Variables and worked on duration of flipping

let duration = 1000; // duration variable to apply it on all blocks to have the same flipping duration

let blocksContainer =  document.querySelector('.memory-game-blocks');

// Here making an array to collect all items of blocks and having control on it

// Here All Children of 'memory-game-blocks' collected 
let blocks = Array.from(blocksContainer.children);

console.log(blocks);

// Here we give random order number for Arrays Items (Shuffle)

// To know how many item we have /children/

console.log(blocks.length); // 20 

let orderRange = [...Array(blocks.length).keys()];

console.log(orderRange);
















