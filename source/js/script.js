let inputFile = document.querySelector('.form-order__input--file');

if (inputFile) {
    inputFile.addEventListener('change', function (e) {

        let inputFileSpan = document.querySelector('.form-order__input--file + span');
        let inputFileName = document.querySelector('.file-name');
        inputFileSpan.innerHTML = 'Файл добавлен: ';
        inputFileName.innerHTML = inputFile.files[0].name;

    });
};

function rangeValueChange() {
    let inputRange = document.querySelector('.form-order__input--range').value;

    document.querySelector('#range-value').innerHTML = inputRange + ' %'
}

document.querySelector('.form-order__input--range').oninput = rangeValueChange;

let mblBtn = document.querySelector('.nav__btn-mobile');
let navList = document.querySelector('.nav-list');

if(mblBtn) {
    mblBtn.addEventListener('click', function(e) {
        mblBtn.classList.toggle('active');
        navList.classList.toggle('active');
    });
};