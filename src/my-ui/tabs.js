import './styles/tabs.css';

class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
        this.list = container.querySelector('ul');
    }
    init(){
        this.list.addEventListener('click', e => {
            if(e.target.tagName === 'LI'){
                console.log(e);
                this.toggleTabs(e);
                this.toggleContent(e);
            }
        });
    }
    toggleTabs(e){
        // remove active class from tabs
        this.tabs.forEach(tab => { tab.classList.remove('active') });
        // add active class to the selected tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        // remove active class from content
        this.container.querySelectorAll('.content').forEach( content => { content.classList.remove('active') });
        // add active class to the selected content
        this.container.querySelector(e.target.getAttribute('data-target')).classList.add('active');  
    }
}

export { Tabs as default };