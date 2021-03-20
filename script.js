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

function toggleScreen(){
    if (document.fullscreenElement === null){
        document.documentElement.requestFullscreen(); // возращает корневой элемент
    }

    else{
        if(document.fullscreenEnabled){
            document.exitFullscreen();
        }
    }
}


//полноэкранный режим