const btns = document.querySelectorAll('button')

btns.forEach(btn => btn.addEventListener('click', function(e){
    console.log(this.textContent);
    console.log('----------------');
    console.log(e.target.textContent);
}))