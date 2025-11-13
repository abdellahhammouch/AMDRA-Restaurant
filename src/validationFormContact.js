let submitbtn=document.querySelector('.submitbtn');
let Nom=document.querySelector(".Nom");
let Email=document.querySelector(".Email");
let telephone=document.querySelector(".telephone");
let Message=document.querySelector('.Message');

console.log('hello');

//span d'erreur
let errorSpan=document.querySelector(".errorSpan");

submitbtn.style="cursor:pointer";

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let nameRegex=/^[a-zA-Z\s]+$/
    let EmailRegex=/^[a-zA-Z0-9._-]+@gmail\.com$/;
    let PhoneRegex=/^(06|07)[0-9]{8}$/;
    // console.log(Nom.value,Email.value,telephone.value,Message.value);
    if (!Nom.value || !Email.value  || !telephone.value || !Message.value ) {
        errorSpan.textContent='tous les champs est obligatoir !';
        errorSpan.style='color:red;margin-left: 1.5rem;';
    }else{
        // console.log(nameRegex.test(Nom));
        // console.log(EmalRegex.test(Email.value));
        if (!nameRegex.test(Nom.value)){
            Nom.style.border="red solid 1px";
            Nom.value="";
            Nom.placeholder ="le champ ne doit pas cotient des chiffre"
        }else if(!EmailRegex.test(Email.value)){
            Email.style.border="red solid 1px";
            Email.value="";
            Email.placeholder ="email doit contient des @gmail.com"
        }
        else if(!PhoneRegex.test(telephone.value)){
            telephone.style.border="red solid 1px";
            telephone.value="";
            telephone.placeholder ="le numero de telephone doit cotient just 10 chifres "
        }else{
            telephone.style.border="none";
            Email.style.border="none";
            Nom.style.border="none";
            alert("merci de nous conatcter !");
            Nom.value="";
            Email.value="";
            telephone.value="";
            Message.value="";
            errorSpan.value="";
            
        }
    }
})