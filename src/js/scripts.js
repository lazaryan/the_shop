const form = document.querySelector('.js-product-form');
form.addEventListener('click' , (event) => {
    const target = event.target;
    if(target.classList.contains('js-product-details__size')){
        const active = document.querySelector('.js-product-details__size-active');
        ChangeBorder(active ,'size', false);
        ChangeBorder(target ,'size', true);
    }
    if(target.classList.contains('js-product-details__color')){
        const active = document.querySelector('.js-product-details__color-active');
        ChangeBorder(active ,'color', false);
        ChangeBorder(target ,'color', true);
        const color = target.dataset.value;
        const image = 'img/tshirts/tshirt_' + color + '.jpg';
        document.getElementById('tshirt').src = image;
    }
});
function ChangeBorder(element , type , value){
    if (type === 'size'){
        if(value === false){
            element.classList.remove('js-product-details__size-active');
            element.classList.add('js-product-details__size');
        }else{
            element.classList.remove('js-product-details__size');
            element.classList.add('js-product-details__size-active');
        }
    }
    if (type === 'color'){
        if(value === false){
            element.classList.remove('js-product-details__color-active');
            element.classList.add('js-product-details__color');
        }else{
            element.classList.remove('js-product-details__color');
            element.classList.add('js-product-details__color-active');
        }
    }
}
