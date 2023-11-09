function print_message(msg){
    const center_msg = document.getElementById('msg')
    center_msg.textContent = msg;
    center_msg.style.color = 'green';
}

/* Update the discount in index.html
Parameters:
    discount (int): the discount being offered ex. 20 => 20% off
Return:
    void
*/
function updateDiscount(discount){
    document.getElementById('discount_tag').textContent = `${discount} % OFF`;
}
