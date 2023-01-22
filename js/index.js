let sections = document.querySelectorAll('section');
let navA = document.querySelectorAll('nav .contanier ul li a');
let arrow = document.querySelector('.arrow');
let Bar = document.querySelector('.bar')
let Links = document.querySelector('nav ul')


Bar.onclick = function(){
    Links.classList.toggle('show-ul');
}




window.onscroll = function(){
    let current = '';
    
    // console.log(scrollY);

    sections.forEach(section => {
    let sectionTop = section.offsetTop - 300;
        // console.log(sectionTop);
        
        if(scrollY >= sectionTop) {
            current = section.getAttribute('id') ;
        }

    })   
    // console.log(current);




    navA.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
             a.classList.add('active')
        }
        
    });
}

window.onscroll = function () {
    if (scrollY > 300) {
 
       arrow.style.opacity = 1
 
    }
    else {
       arrow.style.opacity = 0
    }
 }
 
 arrow.onclick = function () {
    window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth"
    })
 }




window.onscroll = function(){
    let current = '';
    
    // console.log(scrollY);

    sections.forEach(section => {
    let sectionTop = section.offsetTop;
        // console.log(sectionTop);
        if(scrollY >= sectionTop - 500) {
            // current = section.getAttribute('id') 
            navA.forEach( a => {
                a.classList.remove('active');
                if(a.classList.contains(section.getAttribute('id'))){
                     a.classList.add('active')
                }
                
            });
        }
    })   
    // console.log(current);
    
}