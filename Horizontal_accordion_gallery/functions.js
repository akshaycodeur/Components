let cards = document.querySelectorAll('.card');
        console.log(cards);
        cards.forEach( card => {
            card.addEventListener('click',  () =>{
                removeActive();
                card.classList.add('active')
            });
        })

        function removeActive(){
            cards.forEach( card => {
                card.classList.remove('active');
            })
        }