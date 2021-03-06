const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const cancel = document.querySelector('.cancel');

function navbarMedia(cssProp, cssPropElse){
    if (window.matchMedia("(max-width: 768px)").matches) {
        menu.style.transform = cssProp;
    } else{
        menu.style.transform = cssPropElse;
        menu.classList.remove('menu-toggle')
    }
}
window.addEventListener('resize', function () {
    navbarMedia( 'translateX(500px)',  'translateX(0px)');
});

navbarMedia( 'translateX(500px)',  'translateX(0px)');

toggle.addEventListener('click', function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        menu.classList.add('menu-toggle')
    }
});


cancel.addEventListener('click', function () {
    menu.classList.remove('menu-toggle')
});




//Soup product page

const soupProduct = document.querySelectorAll('.soup-product-overlay-container');

let newArr = [];
for(let soup of soupProduct){
    soup.addEventListener('click', function (e) {
        const src= this.firstElementChild.getAttribute('src');

        //SWEETALERT
        Swal.fire({
            imageUrl: src,
            position: 'center',
            imageAlt: 'A tall image',
            showCloseButton: true,
            showConfirmButton: false
        });
        const sweetAlertContainer = document.querySelector( '.swal2-backdrop-show');
        sweetAlertContainer.style.background = 'rgba(255,255,255, 0.5)';
        sweetAlertContainer.classList.add('col-7');
        if (window.matchMedia("(max-width: 992px)").matches) {
            sweetAlertContainer.classList.remove('col-7');
            sweetAlertContainer.classList.add('col-12')
        }
        //END SWEET ALERT


        newArr = [];
        e.preventDefault();
        for(let item of soupProduct){
            if(this !== item){
                newArr.push(item.lastElementChild)
            }
        }
        for (let newItem of newArr){
            newItem.style.transform = 'scale(0)';

        }
        this.lastElementChild.style.transform = 'scale(1)';

    })
}

//Bag Page

const btnDecrementCount = document.querySelectorAll('.btn-decrement');
const btnIncrementCount = document.querySelectorAll('.btn-increment');
const removeBagProduct = document.querySelectorAll('.bag-cancel');


for(let btnDec of btnDecrementCount){
    btnDec.addEventListener('click', decrementCount);
}

for(let btnIncr of btnIncrementCount){
    btnIncr.addEventListener('click', incrementCount);
}

function decrementCount() {
   if (this.nextElementSibling.value > 1){
       +(this.nextElementSibling.value) --
   }
}

function incrementCount() {
    +(this.previousElementSibling.value) ++
}


for(let remove of removeBagProduct){
    remove.addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.remove()
    })
}

//address edit page

//address delete
function addressDelete(){
    const addressDeleteBtn = document.querySelectorAll('.icon-address-delete');
    for(let btn of addressDeleteBtn){
        btn.addEventListener('click', function () {
            this.parentElement.parentElement.remove()
        })
    }
}
addressDelete();
//add new address

const inputAddressAdd = document.querySelector('.add-address');
const btnAddAddress = document.querySelector('.btn-add-address');
const addressTable = document.querySelector('.table-address-edit table tbody');
const addressArr = [];


class Address {
    constructor(name) {
        this.name = name
    }
}

if (btnAddAddress !== null){
    btnAddAddress.addEventListener('click', function (e) {
        e.preventDefault();
        if(inputAddressAdd.value !== ''){
            const address = new Address(inputAddressAdd.value);
            addressArr.push(address);
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const span = document.createElement('span');
            const span2 = document.createElement('span');

            td.setAttribute('scope', 'row');
            span2.classList.add('icon-address-table');
            span2.classList.add('icon-address-delete');
            td.append(span);
            td.append(span2);
            tr.append(td);
            addressTable.append(tr);
            span.textContent = address.name;
            span2.innerHTML = '<i class="fas fa-times"></i>';
            resetInput(inputAddressAdd);
            addressDelete()
        }
    });
}

function resetInput(input) {
    input.value = ''
}