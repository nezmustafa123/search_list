'use strict';

//select elements chuck them in variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//have to use querySelectorAll to get node list similar to an array
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

//close modalfunction for duplicate code
const closeModal = function(){
      //javscript enginen will run this function as soon as click event happens on this element
     //do the opposite and add class this time 
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function(){
     //use the classlist property
        //remove class hidden don't use dot just normal string dot is only for selector
       modal.classList.remove('hidden');
        //show overlay dark background buy removing hiddden(display none) class
        //aggregate all properties in single class then manipulate class
       overlay.classList.remove('hidden');
    };



//loop through the nodelist 
//attach event handler to eah button

for(let i = 0; i< btnsOpenModal.length; i++) {
    //attach event listener to all three ubbons in the loop
    //define function open modal whenever click happens call function
    btnsOpenModal[i].addEventListener('click', openModal);
}


 btnCloseModal.addEventListener('click', closeModal);
//use function in click event, not calling function immediately
//execute as soon as click event executes on cloase modal button


//add eventlistener to overlay
overlay.addEventListener('click', closeModal);


//keypress events global events, listen whole document
//key up 
//key press
//key down
//key info will be stored in event object
//everytime event happens javascript generates object
//access information about event
//javascript will call function with event object
document.addEventListener('keydown', function(e){
//    console.log('Key was pressed');
//    console.log(e.key);
    //check key property in event object
    if(e.key === 'Escape') {
        //check if modal  does not contain hidden class and close modal
       if(!modal.classList.contains('hidden')) {
           closeModal();
           //call close modal function
           
       }
    }
});