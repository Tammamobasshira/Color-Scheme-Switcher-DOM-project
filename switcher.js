const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id
         h1.style.color = 'black'
         h2.style.color = 'yellow'
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'red'
            h2.style.color = 'grey'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'black'
            h2.style.color = 'white'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'red'
            h2.style.color = 'blue'
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'purple'
            h2.style.color = 'orange'
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'pink'
            h2.style.color = 'orange'
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'pink'
            h2.style.color = 'white'
        }
        if(e.target.id === 'skyblue'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'yellow'
            h2.style.color = 'purple'
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'yellow'
            h2.style.color = 'purple'
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
            h1.style.color = 'black'
            h2.style.color = 'purple'
        }
    })
});
