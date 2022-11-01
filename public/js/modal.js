let $btnOpenModal = document.querySelector('.btn-open-modal');
    $modal = document.querySelector('.modal');
    $btnCloseModal = document.querySelector('.modal-btn');

$btnOpenModal.addEventListener('click', (e)=> {
            console.log();
    $modal.classList.add('modal-show')
});


$btnCloseModal.addEventListener('click', ()=> {
$modal.classList.remove('modal-show')
})