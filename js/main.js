var formEl=document.querySelector('.form');
var inputEl=document.querySelector('#input');
var ulElement=document.querySelector('.ulElement');
var divElement=document.querySelector('.divElement')
var reja=[ ];

console.log(reja)

formEl.addEventListener('submit', function(evt){
    evt.preventDefault()
    var obj={
        id:reja.length+1,
        title:inputEl.value ,
    }
    reja.push(obj)
        console.log(reja)
        ulElement.innerHTML=null;
        divElement.innerHTML=null;
        inputEl.value=null;
            for(let index of reja){
                let liElement=document.createElement('li')
                liElement.setAttribute('class','liElement')
                let spanEl=document.createElement('div')
                spanEl.textContent=index.id
                liElement.textContent=index.title
                divElement.appendChild(spanEl)
                ulElement.appendChild(liElement)
            }
    return
})