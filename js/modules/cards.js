import {getItems} from '../services/services';

function cards () {
    // делаю динамические карточки с помощью класса
   

    getItems(' http://localhost:3000/menu')
        .then((data) => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new DoCards(img, altimg, title, descr, price).createCards(); 
            });
        });

    /*axios.get(' http://localhost:3000/menu')
        .then((data) => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new DoCards(img, altimg, title, descr, price).createCards(); 
        });

    });*/


    class DoCards {
        constructor (img, alt, titel, description, price, ...classes) {
            this.img = img;
            this.alt = alt;
            this.titel = titel;
            this.description = description;
            this.price = price;
            this.classes = classes;
            this.trensfer = 26.5;
            this.doPriceInGr();
        }
        
        doPriceInGr () {
            return this.price = this.price * this.trensfer;
        }

        createCards () {
            const containerItems = document.querySelector('.menu .container');
            const card = document.createElement('div');
            if (this.classes.length === 0) {
                this.card = 'menu__item';
                card.classList.add(this.card);
            } else {
                this.classes.forEach(className=> card.classList.add(className));
            }
        
            card.innerHTML = `
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.titel}"</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        
            `;
            containerItems.append(card);
        }    
    }

    /*  new DoCards(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        //'menu__item'
    ).createCards();

    new DoCards(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        //'menu__item'
    ).createCards();

    new DoCards(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        15,
        //'menu__item'
    ).createCards();*/
}

export default cards;