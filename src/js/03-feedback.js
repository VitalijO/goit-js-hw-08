import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const textEmail = document.querySelector('.feedback-form input');
const STORAGE_KEY = "feedback-form-state";
 

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input',throttle(onInput, 500))


toFillTextarea()


function onInput(e) {   
    const formData = { email: `${textEmail.value}`, message:`${textArea.value}` }
    formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function onFormSubmit(e){
    e.preventDefault()
    if (textEmail.value !== null && textArea.value !== null) {
     const consoleObj={ email: textEmail.value, input: textArea.value} 
    console.log(consoleObj)
    e.currentTarget.reset()    
    localStorage.removeItem(STORAGE_KEY) 
    }
    
   
}

function toFillTextarea(e) {
    const savedData = localStorage.getItem(STORAGE_KEY)
    const parseData = JSON.parse(savedData)

    if (parseData) {
        textArea.value = parseData.message;
         textEmail.value = parseData.email;
    }
}

