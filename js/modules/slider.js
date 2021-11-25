function slider ({slide, leftButton, rightButton, total, current}) {
    const photos = document.querySelectorAll(slide),
        left = document.querySelector(leftButton),
        right = document.querySelector(rightButton),
        totalNumber = document.querySelector(total),
        counterNumber = document.querySelector(current);
    
    let start = 1;

        showSlider(start);
            if (photos.length < 10){
                totalNumber.textContent =`0${photos.length}`
            } else {
                totalNumber.textContent =`${photos.length}`
            }
        
        function showSlider (i){
            if ( i > photos.length){
                start = 1;
            } 

            if (i < 1) {
                start = photos.length;
            }
            photos.forEach((item)=> {
                item.classList.add('hide');
                item.classList.remove('show');
            // item.style.display ='none';
            })

            photos[start-1].classList.add('show');
            photos[start-1].classList.remove('hide');
            //[start-1].style.display = 'block';

            if (photos.length < 10){
                counterNumber.textContent =`0${start}`
            } else {
                counterNumber.textContent =`${start}`
            }
        }

        function plusPhoto (i) {
            showSlider(start += i );
        }

        left.addEventListener('click', (e)=>{
            plusPhoto(-1);
        // console.log(counterNumber);
                
        });

        right.addEventListener('click', (e) => {
            plusPhoto(1);
        
        });
}

export default slider;