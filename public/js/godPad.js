const $capa = document.querySelectorAll('.capa');
const $logo = document.querySelector('.img-logo-universe');
const $title = document.querySelector('.pad-title');
const $deleteChar= document.querySelector('#delete-char');
const $deleteUniverse= document.querySelector('#delete-universe');
const $count= document.querySelector('.triangulo');

const $charName = document.querySelectorAll('.char-name');

const $charContainer = document.querySelectorAll('.char-content')
const $countCircles = document.querySelectorAll('.circle')



var contador = 0;

$capa.forEach(element => {
    element.addEventListener('click', () => {
        contador++;

        if (contador === 10) {
            $charName.forEach(element => {
                element.classList.add('click-off')
                $logo.classList.add('click-off')
                $deleteUniverse.innerHTML =  '<audio src="/sounds/delete-universe.mp3" autoplay></audio>'
            });
            
            
            const intermitenteOff = setInterval(() => {
                $title.classList.toggle('off') 
                $logo.classList.toggle('off') 
                $count.classList.toggle('count-off')
            }, 500);
            setTimeout(() => {
                clearInterval(intermitenteOff)
            }, 4500);

        }

    })
});
/* for (let capa = 0; capa < $capa.length; capa++) {
    $capa[capa].addEventListener('click', (event) => {
        $capa[capa].classList.add('click-off')
        $charContainer[capa].classList.add('off')
        $countCircles[capa].classList.add('off')
        $charContainer[capa].classList.add('click-off')
        
    })
} */
for (let capa = 0; capa < $capa.length; capa++) {
    $capa[capa].addEventListener('click', (event) => {
        
        $capa[capa].classList.add('click-off')
        $charContainer[capa].classList.add('off')
        $countCircles[capa].classList.add('off')
        $charContainer[capa].classList.add('click-off')

        $deleteChar.innerHTML =  '<audio src="/sounds/delete-char.mp3" autoplay></audio>'
    })
}