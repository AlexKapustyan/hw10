//==========================================================//
//switch tabs and hide blocks



let buttonActive = document.getElementsByClassName('tablinks')
let tabcontentActive = document.getElementsByClassName('tabcontent')

buttonActive[0].onclick = function (event) {
	buttonActive[0].classList.add('active')
	buttonActive[1].classList.remove('active')
	buttonActive[2].classList.remove('active')

	tabcontentActive[0].classList.add('active-tab')
	tabcontentActive[1].classList.remove('active-tab')
	tabcontentActive[2].classList.remove('active-tab')
}

buttonActive[1].onclick = function (event) {
	buttonActive[1].classList.add('active')
	buttonActive[0].classList.remove('active')
	buttonActive[2].classList.remove('active')

	tabcontentActive[1].classList.add('active-tab')
	tabcontentActive[0].classList.remove('active-tab')
	tabcontentActive[2].classList.remove('active-tab')
}

buttonActive[2].onclick = function (event) {
	buttonActive[2].classList.add('active')
	buttonActive[0].classList.remove('active')
	buttonActive[1].classList.remove('active')

	tabcontentActive[2].classList.add('active-tab')
	tabcontentActive[0].classList.remove('active-tab')
	tabcontentActive[1].classList.remove('active-tab')

	let infoName = document.getElementById('info_name')
	infoName.innerText = userName.value

	let infoSurname = document.getElementById('info_Sname')
	infoSurname.innerText = userLastName.value

	let infoEmail = document.getElementById('info_email')
	infoEmail.innerText = userEmail.value

	let infoPhone = document.getElementById('info_phone')
	infoPhone.innerText = userPhone.value

	let infoAddress = document.getElementById('info_addres')
	infoAddress.innerText = userAddress.value
}
//====================================================//
//add and remove Product

let addProduct = document.getElementById('plus-btn')
let removeProduct = document.getElementById('minus-btn')
let numberOfProducts = document.getElementById('number_products')
let PriceOfProduct = document.getElementById('price')
let totalPrice = document.getElementById('total-price')

addProduct.onclick = function (event) {
	++numberOfProducts.value
	totalPrice.innerText = PriceOfProduct.innerText * numberOfProducts.value

	let infoQuantity = document.getElementById('quantity')
	infoQuantity.innerText = numberOfProducts.value

	let purchaseAmount = document.getElementById('purchase_amount')
	purchaseAmount.innerText = totalPrice.innerText
}

removeProduct.onclick = function (event) {
	--numberOfProducts.value
	if (numberOfProducts.value <= 0) {
		numberOfProducts.value = 0
	}
	totalPrice.innerText = PriceOfProduct.innerText * numberOfProducts.value

	//add to info Name, Quantity, Purchase amount

	let infoQuantity = document.getElementById('quantity')
	infoQuantity.innerText = numberOfProducts.value

	let purchaseAmount = document.getElementById('purchase_amount')
	purchaseAmount.innerText = totalPrice.innerText
}

//===========================================================//
//save contacts and transfer to the information section

let productName = document.getElementById('name_product')
let userName = document.getElementById('name')
let userLastName = document.getElementById('surname')
let userEmail = document.getElementById('mail')
let userPhone = document.getElementById('phon')
let userAddress = document.getElementById('adr')

let infoProductName = document.getElementById('info_prod')
infoProductName.innerText = productName.innerText




