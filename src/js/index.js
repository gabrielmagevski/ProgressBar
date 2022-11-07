const url = window.location.href;

function getUrl() {
	const itemCart = document.querySelector(".checkout-steps_item_cart");
	const itemUser = document.querySelector(
		".checkout-steps_item_identification"
	);
	const itemShipping = document.querySelector(".checkout-steps_item_payment");
	const itemPayment = document.querySelector(
		".checkout-steps_item_confirmation"
	);

	if (url === "https://yy439k.csb.app/email") {
		return itemCart.classList.add("item-active");
	}
	if (url === "https://yy439k.csb.app/user") {
		itemCart.classList.add("item-active");
		itemUser.classList.add("item-active");
	}
	if (url === "https://yy439k.csb.app/shipping") {
		itemCart.classList.add("item-active");
		itemUser.classList.add("item-active");
		itemShipping.classList.add("item-active");
	}
	if (url === "https://yy439k.csb.app/payment") {
		itemCart.classList.add("item-active");
		itemUser.classList.add("item-active");
		itemShipping.classList.add("item-active");
		itemPayment.classList.add("item-active");
	}
}

function sizeProgressBar() {
	const barActive = document.querySelector(".bar-active-progress");
	const firstText = document.querySelector(".text-first");
	const secondText = document.querySelector(".text-secondary");
	const tertiaryText = document.querySelector(".text-tertiary");
	const fourthText = document.querySelector(".text-fourth");

	if (url === "https://yy439k.csb.app/email" || "https://yy439k.csb.app/") {
		barActive.style.width = "0%";
		firstText.classList.add("text-active");
	}
	if (url === "https://yy439k.csb.app/user") {
		barActive.style.width = "35.33%";
		firstText.classList.add("text-active");
		secondText.classList.add("text-active");
	}
	if (url === "https://yy439k.csb.app/shipping") {
		barActive.style.width = "62.33%";
		firstText.classList.add("text-active");
		secondText.classList.add("text-active");
		tertiaryText.classList.add("text-active");
	}
	if (url === "https://yy439k.csb.app/payment") {
		barActive.style.width = "100%";
		firstText.classList.add("text-active");
		secondText.classList.add("text-active");
		tertiaryText.classList.add("text-active");
		fourthText.classList.add("text-active");
	}
}

sizeProgressBar();
getUrl();
