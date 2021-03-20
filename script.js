let keys = document.querySelectorAll('.key')

keys.forEach(key =>{

  key.addEventListener('click', playNote);


});


function playNote(e){
    let key =e.target;

    let note = document.getElementById(key.dataset.note);
    key.classList.add('active');
    note.currentTime=0;
    note.play();
    note.addEventListener('ended', ()=>{
        key.classList.remove('active');
    })
}


//полноэкранный режим


document.querySelector('.btn').addEventListener('click',toggleScreen);


const btn = document.querySelectorAll('button');
console.log(btn[0].classList.length);

function toggleScreen(){
    if (document.fullscreenElement === null){
        document.documentElement.requestFullscreen(); // возращает корневой элемент
        btn[0].classList.add('normalScreen'); // смена иконки

    }

    else{
        if(document.fullscreenEnabled){
            document.exitFullscreen();
            btn[0].classList.remove('normalScreen');// смена иконки
            btn[0].classList.add('fullscreen');// смена иконки


        }
    }
}


//полноэкранный режим

//событие при нажатии на клавиши