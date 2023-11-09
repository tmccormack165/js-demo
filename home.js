const containers = document.getElementsByClassName('container');
containers[2].classList.add('d-none');
console.log(containers);

// Event Listener
const review_btn = document.getElementById('seereview');

review_btn.addEventListener('click', function(){
    console.log('click');
    const review = document.getElementById('review');
    //toggle review
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        review_btn.textContent = 'CLOSE REVIEW'
    }
    else{
        review.classList.add('d-none');
        review_btn.textContent = 'SEE REVIEW'
    }
    
}); 
