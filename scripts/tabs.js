const tabsFunc=()=>{
const tabs=document.querySelectorAll('.card-detail__change');
const tabsTitle=document.querySelectorAll('.card-details__title');
const tabsPrice=document.querySelectorAll('.card-details__price');
const tabsImage=document.querySelectorAll('.card__image_item');

const tabsOptions=[
    {
       name:"Graphite",
       memory:'128',
       price:60000,
       image:'img/iPhone-graphite.webp'
    },
     {
       name:"Silver",
       memory:'256',
       price:65000,
       image:'img/iPhone-silver.webp'
    },
     {
       name:"Sierra Blue",
       memory:'512',
       price:70000,
       image:'img/iPhone-sierra_blue.webp'
    }
];

const changeContent=(index)=>{
     tabsTitle.innerHTML=`Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
     tabsPrice.innerHTML=`${tabsOptions[index].price}₽`;
     tabsImage.setAttribute('src', tabsOptions[index].image);
      document.title = `iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
}

const changeActiveTabs=(indexClickedTab)=>{
     tabs.forEach((tab, index)=>{
        tab.classList.remove('active');

        if(index===indexClickedTab){
            tab.classList.add('active');
         }
     });

     changeContent(indexClickedTab);
};

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        changeActiveTabs(index);
    });
});

changeContent(0);
}
tabsFunc();