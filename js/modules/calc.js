function calc () {
 // calc
    const result = document.querySelector('.calculating__result span ');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else{
        sex =  'female';
        localStorage.setItem('sex', 'femail');

    }

    if (localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', 1.375);
    }

    function calc () {
        if(!sex || !height || !weight || !age || !ratio) {
            result.textContent = 'error';
            // console.log ('ok');
            return;
        }

        if (sex === 'female'){
            result.textContent = Math.round(( 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age))* ratio); 
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 - age) )* ratio);
        }
    }
    calc();
    getData('.calculating__choose_big', 'calculating__choose-item_active');
    getData('#gender', 'calculating__choose-item_active');
    getInputInformation ('#height');
    getInputInformation ('#weight');
    getInputInformation ('#age');
    initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');
    initLocalSettings('#gender', 'calculating__choose-item_active');

    function getData (parentSelector, classActive) {
        const element = document.querySelectorAll(`${parentSelector} div`);
            //console.log(element);     
            element.forEach((elem) => {
                elem.addEventListener('click',(e) => {
                    if ( e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio');
                        localStorage.setItem('ratio',+e.target.getAttribute('data-ratio'));
                    }else {
                        sex =  e.target.getAttribute('id');
                        localStorage.setItem('sex', e.target.getAttribute('id'));
                    }
                   // console.log(sex, ratio);
                   // console.log(typeof(ratio));
        
                    element.forEach((el) => {
                    //console.log(el);
                        el.classList.remove(classActive);
                    });
                    e.target.classList.add(classActive);
                    calc();
                });
                
            });  
    }

    function getInputInformation (selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () =>{
            if (input.value.match(/\D/g)) {
                /* const modalWindow = document.createElement('div');
                modalWindow.innerHTML = `
                    <h2 >Введено не число
                    </h2>
                `;
                
                document.querySelector('.calculating__choose_medium').append(modalWindow);
                setTimeout(() => {
                    
                    modalWindow.remove();
                }, 4000);*/
                input.style.border = '2px solid red';
            }else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    
                    break;
                case 'weight' :
                    weight = +input.value;
                    break;
                case 'age' :
                    age = +input.value;
                    break;
            }
            //console.log(height, weight, age);
            calc();
        })
    }

    function initLocalSettings (selector, classActive) {
        const elem = document.querySelectorAll(`${selector} div`);
        elem.forEach((el) => {
            el.classList.remove(classActive);
            if(el.getAttribute('id') === localStorage.getItem('sex')) {
                el.classList.add(classActive);
            }
            if(el.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                el.classList.add(classActive);
            }
            
        });
        
    }
}

export default calc;