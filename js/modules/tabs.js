function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, classActive) {
    //tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
        
    hideTabsContent();
    showTabContent();

    

    function hideTabsContent () {
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'frame');
        });

        tabs.forEach(tab => {
            tab.classList.remove(classActive);
        })
    }
//і назначаем дефолтное значение
    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show', 'frame');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(classActive);
        }
    
    

    tabsParent.addEventListener('click', (event) => {
        const  target = event.target;
        console.log(target);
        if (target && target.classList.contains(tabsSelector.slice(1))) {
// перебираем наши табы и ищем совпадения события и таба, если совпало то определяется индекс, который передается в функцию шоу
            tabs.forEach((tab, i) => {
                if (target == tab){
                    hideTabsContent();
                    showTabContent(i);
                    
                }
            });
        }
    });  
}

export default tabs;
    
