document.addEventListener('DOMContentLoaded', function () {
    const productList = document.querySelector('.product-list');
    const productDetails = document.querySelector('.description-details');
    const productImage = document.querySelector('.description-details_image');
    const productAuthor = document.querySelector('.description-details_author');
    const productName = document.querySelector('.description-details_name');
    const productSize = document.querySelector('.description-details_size');
    const productPrice = document.querySelector('.description-details_price');

    const productsByCategory = {
        'Франція': [{
                image: 'marsel.jpg',
                author: "Марсель Русо",
                name: 'Охота Амура',
                size: "Холст, масло (50х80) ",
                price: "3 500 грн",

            },

            {
                image: 'women.jpg',
                author: "Анрі Селін",
                name: 'Дама с собачкой',
                size: "Акрил, папер (50х80) ",
                price: "4 540 грн",

            },

            {
                image: 'procedure.jpg',
                author: "Процедура",
                name: 'Дама с собачкой',
                size: "Кольорова літографія (40х60) ",
                price: "7 000 грн",

            },

            {
                image: 'rose.jpg',
                author: "Луi Детуш",
                name: 'Троянда',
                size: "Папір, акрил (50х80) ",
                price: "1 300грн",

            },

            {
                image: 'birds.jpg',
                author: "Франсуа Дюпон",
                name: 'Пташина трапеза',
                size: "Кольорова літографія (40х60) ",
                price: "10 300грн",

            },

            {
                image: 'fish.jpg',
                author: "П`єр Моранж",
                name: 'Пейзаж та риба',
                size: "Кольорова літографія (40х60) ",
                price: "8 000грн",

            },
        ],

        'Германія': [{
                image: 'fish.jpg',
                author: "П`єр Моранж",
                name: 'Пейзаж та риба',
                size: "Кольорова літографія (40х60) ",
                price: "8 000грн",

            },

        ],

        'Англія': [{
                image: 'fish.jpg',
                author: "П`єр Моранж",
                name: 'Пейзаж та риба',
                size: "Кольорова літографія (40х60) ",
                price: "8 000грн",

            },

        ],
    };

    const tabs = document.querySelectorAll('.tabs-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const categoryName = tab.getAttribute('data-category');
            const products = productsByCategory[categoryName];

            productList.innerHTML = '';

            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.dataset.image = product.image || '';
                listItem.textContent = `${product.author}, ${product.name}, ${product.size}`;
                listItem.dataset.price = product.price;

                productList.appendChild(listItem);

                listItem.addEventListener('click', () => {
                    productImage.src = `../images/${product.image || ''}`;
                    productAuthor.textContent = product.author;
                    productName.textContent = product.name;
                    productSize.textContent = product.size;
                    productPrice.textContent = product.price;
                });
            });
        });
    });
});