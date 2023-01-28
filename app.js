const topText = document.getElementById('toptext');
const bottomText = document.getElementById('bottomtext');
const img = document.getElementById('image');
const topVal = topText.value;
const generate = document.querySelector('#generate');
const results = document.getElementById('results');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const show = document.getElementById('show-image');

function randomRGBA(){
    const r = Math.floor(Math.random() * 100);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 150);
    const a = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},${a})`
}


//function that runs when the generate button is pressed, will save input values and then reset forms//
function handleSubmitForm(e){
    e.preventDefault();

     const newImg = document.createElement('img');
     newImg.setAttribute('src', img.value);
     const removeBtn = document.createElement('button');
     removeBtn.innerText = "Remove";
     removeBtn.setAttribute('class','remove')
     const upText = document.createElement('div');
     const downText = document.createElement('div');
     upText.setAttribute('class', 'top')
     downText.setAttribute('class', 'bottom')
     upText.append(topText.value);
     downText.append(bottomText.value);
     const newDiv = document.createElement('div');
     newDiv.setAttribute('class','memes')


    const newLi = document.createElement('li');
    show.append(newDiv);
    newDiv.append(newImg);
 
    newDiv.append(upText, downText);
    newDiv.append(removeBtn)


    topText.value = '';
    bottomText.value = '';
    img.value = '';

    removeBtn.addEventListener('click',function(event){
        event.target.parentElement.remove();

});
}


generate.addEventListener("click",handleSubmitForm);

setInterval(function(){
        document.body.style.backgroundColor = randomRGBA()
    },1200);
    