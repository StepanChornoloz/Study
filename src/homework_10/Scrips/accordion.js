import "../styles/accordion.scss";

const TITLE_CLASS_NAME = 'accordion__btn';
const EXPAND_CLASS_NAME = 'accordion__menu_expand';


export function accordion(targetElement) {
    const controls = targetElement.querySelectorAll('.'+TITLE_CLASS_NAME);
    let expandedElement;  

    function expand(menu) {
        if (expandedElement) {
            expandedElement.classList.remove(EXPAND_CLASS_NAME);
        }
        menu.classList.add(EXPAND_CLASS_NAME);
        expandedElement = menu;
    }

    function collapse () {
        expandedElement.classList.remove(EXPAND_CLASS_NAME);
        expandedElement = undefined;
    }

    function toggle () {
        const menu = this.parentElement;
        if (menu.classList.contains(EXPAND_CLASS_NAME)) {
            collapse();
        } else {
            expand(menu);
        }
    }

    function handleEvents() {
        for(const control of controls) {
            control.addEventListener('click', toggle);
        }
    }
    
    handleEvents ();
}

