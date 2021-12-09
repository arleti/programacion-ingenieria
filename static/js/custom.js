window.onload = () => {
    var textarea = document.getElementById("Plan de trabajo")
    textarea.classList.add('is-danger')
    textarea.oninput=(e) =>{
        if (e.target.value){ 
            textarea.classList.remove('is-danger')
        }
        else{
            textarea.classList.add('is-danger')
        }
    }
}