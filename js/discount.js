document.getElementById('btn-apply').addEventListener('click',function(){
   const priceTotal = getElementTextById ('price-total');
//    discount calculation
   const discount = priceTotal*(100-30)/100;

   setInnerTextByID ("discount-price",discount);
   
   
})

function getElementTextById (elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setInnerTextByID(elementId,value){
    const text = document.getElementById(elementId);
    text.innerText = value;
}