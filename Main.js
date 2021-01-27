
window.addEventListener('load',()=>{
    
    let upSide = document.querySelector('.upSide');    
    let downSide = document.querySelector('.downSide');    
    let symbolContainer = document.querySelector('.symbols');  
    
    let symbol = document.querySelector('#symbol');
    let symbolPosition = 0;

        setTimeout(() => {


            upSide.style.top = "0";
            downSide.style.bottom   = "0";
            

        }, 500);

        setTimeout(() => {
            
            setInterval(()=>{

                symbol.style.transform = `rotate(${symbolPosition++}deg)`;

                if(symbolPosition >= 360) symbolPosition = 0;

            },25);
            
        }, 1000);


});

let locationIcon = document.querySelector('#location');
let phone = document.querySelector('#phone');
let at = document.querySelector('#at');

locationIcon.addEventListener('click', ()=>{

    window.open("https://goo.gl/maps/MfgWdGTfAfXHcnjK7");

});
phone.addEventListener('click', ()=>{

    window.open("https://wa.link/n8dkpt");

});
at.addEventListener('click', ()=>{

    window.open("mailto:ajchdelacruz@hotmail.com");

});