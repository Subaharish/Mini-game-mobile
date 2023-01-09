const threeWayPipe = document.querySelector('.three-pipe')
const twoWayPipe = document.querySelector('.two-pipe')
const line1 = document.querySelector('.line')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
const line4 = document.querySelector('.line-4')
const line5 = document.querySelector('.line-5')
const vline = document.querySelector('.vertical-line')
const vline1 = document.querySelector('.vline-1')
const heading = document.querySelector('.heading')
const textContent = document.querySelector('.text-content')
const game = document.querySelector('.game-container')
const congo = document.querySelector('.congrats-container')
const imgLock = document.querySelector('.img-lock')
const imgUnlock = document.querySelector('.img-unlock')
const arrow1 = document.querySelector('.arrow-1')
const arrow1Copy = document.querySelector('.arrow-1-copy')
const arrow2 = document.querySelector('.arrow-2')
const arrow2Copy = document.querySelector('.arrow-2-copy')

congo.style.display='none'
imgUnlock.style.display='none'
arrow1Copy.style.display='none'
arrow2Copy.style.display='none'

line3.classList.add('glow')
line4.classList.add('glow')
line5.classList.add('glow')
vline.classList.add('glow')

let set = 0
threeWayPipe.addEventListener('click',()=>{
    rotateone(threeWayPipe);
    set=set+1;
    if (set%2 === 0){
        line3.classList.add('glow')
        line5.classList.add('glow')
        vline.classList.add('glow')
    }else{
        line3.classList.remove('glow')
        line5.classList.remove('glow')
        vline.classList.remove('glow')
    }
})

twoWayPipe.addEventListener('click',()=>{
    rotatetwo(twoWayPipe);
    console.log('click')

})

let amountone = 90
let initialone = 0
function rotateone(variable){
    initialone += amountone
    variable.style.transform = `rotate(${initialone}deg)`;
}

let amounttwo = 90
let initialtwo = 0
function rotatetwo(variable){
    initialtwo += amounttwo
    variable.style.transform = `rotate(${initialtwo}deg)`;
}

let count = 0
let isTurn = false
function manageGlow(ele){
    const rv =  window.getComputedStyle(ele)
    const rvx =  rv.getPropertyValue('transform')
    var values = rvx.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a*a + b*b);
    var sin = b/scale;
    var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    let rotateValue = angle + 90 ;
    if (rotateValue === 0){
        count = 0
    }
    else{
        count = count+1
    }
    if (rotateValue === 90 && count === 3){
        arrow2.style.display='inline'
        arrow2Copy.style.display='none'
        threeWayPipe.style.top = '2px'
        threeWayPipe.style.left = '5px'
        vline1.classList.remove('glow')

    }else if(rotateValue === 90){
        arrow2.style.display='none'
        arrow2Copy.style.display='inline'
        threeWayPipe.style.top = '2px'
        threeWayPipe.style.left = '-7px'
        vline1.classList.add('glow')
    }else if(count===2){
        threeWayPipe.style.top = '-4px'
        threeWayPipe.style.left = '0'
        vline1.classList.add('glow')
    }else if(count===0){
        threeWayPipe.style.top = '8px'
        threeWayPipe.style.left = '0'
    }
    if (isTurn && count === 2){
        imgLock.style.display='none'
        imgUnlock.style.display='block'
        setTimeout(()=>{
            heading.style.display = 'none'
            textContent.style.display = 'none'
            game.style.display = 'none'
            congo.style.display = 'block'
        },1000)
    }
    console.log(rotateValue)
    console.log(count)

}

function firstLineGlow(){
    isTurn = !isTurn
    if (isTurn === false){
        line1.classList.remove('glow')
        line2.classList.remove('glow')
    }
    else if(isTurn === true){
        if(count === 2 || count === 0){
            arrow1.style.display='none'
            arrow1Copy.style.display='inline'
            line1.classList.add('glow')
            line2.classList.add('glow')
        }
    }
    if (isTurn && count === 2){
        imgLock.style.display='none'
        imgUnlock.style.display='block'
        setTimeout(()=>{
            heading.style.display = 'none'
            textContent.style.display = 'none'
            game.style.display = 'none'
            congo.style.display = 'block'
        },1000)
    }
}