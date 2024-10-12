//like
const like = document.querySelectorAll('.like');
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', () => {
        if (like[i].style.color == 'red') {
            like[i].style.color = 'gray';
        }
        else {
            like[i].style.color = 'red'
        }
    });
}

//quantity ++
const plus = document.querySelectorAll('.add-item');
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        const quantity = plus[i].previousElementSibling;
        const quantityElement = parseInt(quantity.innerText);
        const newQuantity = quantityElement + 1;
        quantity.innerText = newQuantity;
        updateprice(plus[i], newQuantity);
        updatetotal()
    });
}

//quantity --
const moins = document.querySelectorAll('.sub-item');
for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener('click', () => {
        const quantity = moins[i].nextElementSibling;
        const quantityElement = parseInt(quantity.innerText);
        const newQuantity = quantityElement - 1;
        quantity.innerText = newQuantity;
        if (newQuantity <= 1) {
            quantity.innerText = 1;
        }
        updateprice(moins[i], newQuantity);
        updatetotal()
    });
}

//delete

const remove=document.querySelectorAll('.remove');
const list=document.querySelectorAll('.list-group-item');
for(let i=0; i<remove.length; i++){
    remove[i].addEventListener('click',() => {
        list[i].remove();
        updatetotal()
    });  
}

//deleall
const removeall=document.querySelectorAll('.remove-all')
const listgroup=document.querySelector('.list-group')
for(let i=0;i<remove.length;i++){
if(removeall[i]){
    removeall[i].addEventListener('click',()=>{
        if(confirm('are you sure to remove all')){
            listgroup.remove()
        }
        updatetotal()
    })
}
}
//confirm
const confirm =document.getElementById('validate')
const boxvalidation=document.createElement('div')
const container=document.querySelector('.container')
confirm.addEventListener('click',()=>{
    container.remove()
    document.body.appendChild(boxvalidation)
    boxvalidation.classList.add('boxValidation')
    boxvalidation.innerHTML=`<h1>your order has been validated</h1>`
})

// cancel

const cancel=document.getElementById('cancel')
const boxCancel=document.createElement('div')
cancel.addEventListener('click',() => {
    if(confirm('Are you sure?')){
        container.remove()
        document.body.appendChild(boxCancel)
        boxCancel.classList.add('boxCancel')
        boxCancel.innerHTML=`<h1>Your order has been cancelled</h1>`
    }
})
//update price

function updateprice(btn, quantity){
    quantity =quantity || 1
    const items= btn.closest('.list-group-item')
    const price = items.querySelector('.price-product')
    const unitprice= parseFloat(price.dataset.unit)
    const newprice = (unitprice * quantity).toFixed(2)
    price.innerText= newprice

}


//update total
function updatetotal(){
    let totalitems =0
    let totalprice=0
    const items = document.querySelectorAll('.list-group-item')
    for(i=0;i<items.length;i++){
        const pricele=items[i].querySelector('.price-product')
        const price=parseFloat(pricele.innerText)
        totalitems += 1
        totalprice += price
    }
    const totalItemsElem = document.getElementById('total_items');
    const totalPriceElem = document.querySelector('.total_price');
    totalItemsElem.innerText = totalitems;
    totalPriceElem.innerText = totalprice.toFixed(2);
}
updatetotal()