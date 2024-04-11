'use strict'

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
	return Math.random().toString(36).slice(2)
}

const initialData = [
	{
		id: uid(),
		product: 'Apple iPhone 13',
		reviews: [
			{
				id: uid(),
				text: 'Отличный телефон! Батарея держится долго.',
			},
			{
				id: uid(),
				text: 'Камера супер, фото выглядят просто потрясающе.',
			},
		],
	},
	{
		id: uid(),
		product: 'Samsung Galaxy Z Fold 3',
		reviews: [
			{
				id: uid(),
				text: 'Интересный дизайн, но дорогой.',
			},
		],
	},
	{
		id: uid(),
		product: 'Sony PlayStation 5',
		reviews: [
			{
				id: uid(),
				text: 'Люблю играть на PS5, графика на высоте.',
			},
		],
	},
]

const userInput = document.querySelector('.user_input')
const sendBtn = document.querySelector('.send_btn')
const reviews = document.querySelector('.reviews')
const divError = document.querySelector('.error_msg')

initialData.forEach((element) => {
	const productName = document.createElement('h3')
	productName.textContent = element.product
	reviews.appendChild(productName)
	element.reviews.forEach((review) => {
		const defaultReview = document.createElement('p')
		defaultReview.textContent = review.text
		reviews.appendChild(defaultReview)
	})
})

sendBtn.addEventListener('click', function () {
	try {
		if (
			userInput.value.trim().length < 20 ||
			userInput.value.trim().length > 500
		) {
			throw new Error('Несоответствующая длина текста')
		}
		const reviewElem = document.createElement('p')
		reviewElem.textContent = userInput.value
		reviews.appendChild(reviewElem)
		divError.textContent = ''
	} catch (error) {
		divError.textContent = error.message
	}
})
