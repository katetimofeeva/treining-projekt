import tabs from './modules/tabs';
import forms from './modules/forms';
import modal from './modules/modal_window';
import timer from './modules/timer';
import calc from './modules/calc';
import slider from './modules/slider';
import cards from './modules/cards';
import {openModal} from './modules/modal_window';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal(modalSelector, modalTimerId), 30000);
    
    tabs('.tabheader__item', '.tabcontent ','.tabheader__items', 'tabheader__item_active' );
    forms(modalTimerId);
    modal('[data-modal]', '.modal',   modalTimerId);
    timer('.timer',  '2021-12-11');
    calc();
    slider({
        slide:'.offer__slide',
        leftButton: '.offer__slider-prev',
        rightButton: '.offer__slider-next', 
        total:'#total', 
        current:'#current',
    });
    cards();
});



