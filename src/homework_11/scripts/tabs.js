import '../styles/tabs.scss';

export function tabs() {
    const buttons = Array.from (document.querySelectorAll('.tabs__button'));
    const contentItem = Array.from (document.querySelectorAll('.tabs__content-item'));
    let selectedItem = {
        button: document.querySelector('.tabs__button_active'),
        content: document.querySelector('.tabs__content-item_active')
    }

    function clickHandler() {
        const selectedContentItem = contentItem.filter((contentItem) => {
            return contentItem.getAttribute('data-content-id') === this.getAttribute('data-control-for');
        })[0];
        console.log(selectedContentItem);
        selectedItem.content.classList.remove('tabs__content-item_active');
        selectedItem.button.classList.remove('tabs__button_active');

        selectedContentItem.classList.add('tabs__content-item_active');
        this.classList.add('tabs__button_active');
        selectedItem = {
            control: this,
            button: selectedContentItem,
        };
    }
    

    for (const button of buttons) {
        button.addEventListener('click', clickHandler);
    }
}