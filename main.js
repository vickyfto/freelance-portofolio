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

// start smooth scrooling 
// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });