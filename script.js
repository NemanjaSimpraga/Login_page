    
            let username=document.getElementById('username');
            let email=document.getElementById('email');
            let password=document.getElementById('password');
            let password2=document.getElementById('password2');
            let form=document.getElementById('form');

     //FUNKCIJE


     function showError(input,message){

        let formControl = input.parentElement;
        formControl.className = 'form-control error';
        let small = formControl.querySelector('small');
        small.innerText=message;
     }
     function showSuccess(input){
        let formControl = input.parentElement;
        formControl.className = 'form-control success';  
     }

     function isValidEmail(email){

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());

     }



    //EVENT LISTENER       

    form.addEventListener("submit",function(e){
    e.preventDefault();// ne flesuje formu nego je submituje

    if(username.value === ''){
        showError(username,'Username is required');
        }else{
                showSuccess(username);
             }
    if(email.value === ''){
        showError(email,'Email is not valid');
        }else if(!isValidEmail(email.value)){
            showError(email,'Email is not valid');
        }
        else{
                showSuccess(email);
             } 
    if(password.value.length <=5){
        showError(password,'Password is weak');
        }else{
                showSuccess(password);
             }            
    if(password2.value.length <=5){
        showError(password2,'password2 is weak');
        }else{
                showSuccess(password2);
             } 
    if(password.value === ''){
        showError(password,'Password is required');
        }else{
                showSuccess(password);
             }
        
    if(password2.value === ''){
        showError(password2,'Password is required');
        }else{
                showSuccess(password2);
             }          
                                                });













