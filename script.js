
//событие на клавиши
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.key-w')
const blackKeys = document.querySelectorAll('.key.key-b')


//событие на клик
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})



function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
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

