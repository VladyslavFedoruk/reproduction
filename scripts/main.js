window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.tabs-tab'),
        tabs = document.querySelector('.reproduction_content-tabs'),
        tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabs.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('tabs-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    tab[i].classList.toggle('active');
                } else {
                    tab[i].classList.remove('active');
                }
            }
        }

    });
});