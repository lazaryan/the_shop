// Your code here...

const form = document.querySelector('.js-product-form');

form.addEventListener('click' , (event) => {

	const target = event.target;
	if(target.classList.contains('js-product-details__size')){
		console.log(document.getElementsByClassName('js-product-details__size-active'));
		
		target.classList.remove("js-product-details__size");
		target.classList.add("js-product-details__size-active")
	}
});