function darkMode() {
    document.body.classList.toggle('bg-dark');
    document.body.style.transition = '0.8s';

    if( document.body.classList.contains('bg-dark') == true) {
        document.querySelector('.btn-bg').innerHTML = 'white mode';
        const colorText = document.querySelectorAll('div,h2,a');
        for(let i = 0; i < colorText.length; i++)
            colorText[i].style.color = 'white';
        // console.log(colorText)
    }
    else {
        // let bool = Boolean
        document.querySelector('.btn-bg').innerHTML = 'dark mode';
        const colorText = document.querySelectorAll('div,h2,a');
        for(let i = 0; i < colorText.length; i++)
            colorText[i].style.color = 'black';
        // console.log(colorText)
    }
}