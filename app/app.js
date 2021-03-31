console.log('app.js is alive!');

let toggleMenu = () => {
    let menuContent = document.getElementsByClassName('menuContent')[0];
    if(!menuContent) {
        console.log('enuContent was falsey');
    }
    let isCurrentlyHidden = menuContent.classList.contains('hidden');

    if(isCurrentlyHidden) {
        console.log('The menu content is currently hidden, should reveal it');
        menuContent.classList.remove('hidden');
    } else {
        console.log('The menu content is not hidden, should hide it');
        menuContent.classList.add('hidden');
    }

    console.log('this is a problem');

}