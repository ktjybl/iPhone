const scrollFunc=()=>{
const links = document.querySelectorAll('.header-menu__item a');
const allCharater = document.querySelector('.card-details__link-characteristics');
seamless.polyfill();
const newArr=[...links, allCharater]

newArr.forEach(elem=>{
    elem.addEventListener('click', (evt)=>{
       evt.preventDefault();

       const id=elem.getAttribute('href').substring(1);
       const section = document.getElementById(id);
       if(section){
          seamless.elementScrollIntoView(section,{
               behavior:'smooth',
               block:'start'
          });
       }else{
          seamless.elementScrollIntoView(document.querySelector('#characteristics'),{
               behavior:'smooth',
               block:'start',
               inline:'center' 
               }); 
           }
    });

allCharater.addEventListener('click', (event) => {
    event.preventDefault();

    const allCharaterId = allCharater.getAttribute('href').substring(1);
    const allCharaterSection = document.getElementById(allCharaterId);

    seamless.elementScrollIntoView(allCharaterSection, {
        behavior: "smooth",
        block: "start"
    })
})
});
}
scrollFunc();