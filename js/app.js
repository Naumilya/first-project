

const containerForm = document.getElementById('container__form');
const btnPreview = document.getElementById('previewBtn');
const containerPreview = document.getElementById('container__preview');
const backBtn = document.getElementById('backBtn');







btnPreview.addEventListener('click', function(){
    // alert('Переходим?');
    if (containerForm.classList.contains('active')){
        containerForm.classList.toggle('active');
        containerPreview.classList.add('active');
    };

});

backBtn.addEventListener('click', function(){
    if (containerPreview.classList.contains('active')){
        containerPreview.classList.toggle('active');
        containerForm.classList.add('active');

    };
});



// смена картинки
function save() {
    let userName = document.getElementById('userName').value;
    document.querySelector('.preview__name').innerHTML = userName;



    let userWork = document.getElementById('userWork').value;
    document.querySelector('.preview__userWork').innerHTML = userWork;

    let userPhone = document.getElementById('userPhone').value;
    document.querySelector('.preview__userPhone').innerHTML = userPhone;
    
    let userEmail = document.getElementById('userEmail').value;
    document.querySelector('.preview__userEmail').innerHTML = userEmail;
// преобразовать в строку и вывести
    let userSalary = document.getElementById('userSalary').value; 
    userSalary = userSalary + ' Руб/мес.';
    document.querySelector('.preview__userSalary').innerHTML = userSalary;

    let userBusyness = document.getElementById('userBusyness').value;
    document.querySelector('.preview__userBusyness').innerHTML = userBusyness;


    let userbusinessTrip = document.getElementById('userbusinessTrip');    

    if (userbusinessTrip.checked) {
        userbusinessTrip = 'да';
        document.querySelector('.preview__userbusinessTrip').innerHTML = userbusinessTrip;
    }else{
        userbusinessTrip = 'нет';
        document.querySelector('.preview__userbusinessTrip').innerHTML = userbusinessTrip;
    };

    let userCity = document.getElementById('userCity').value;
    document.querySelector('.preview__userCity').innerHTML = userCity;

    let userСitizenship = document.getElementById('userСitizenship').value;
    document.querySelector('.preview__userСitizenship').innerHTML = userСitizenship;

    let userMale = document.getElementById('userMale').value;
    document.querySelector('.preview__userMale').innerHTML = userMale;

    let userAge = document.getElementById('userAge').value;
    document.querySelector('.preview__userAge').innerHTML = userAge;

    let userPosition = document.getElementById('userPosition').value;
    document.querySelector('.preview__userPosition').innerHTML = userPosition;

    let userHaveChild = document.getElementById('userHaveChild');    

    if (userbusinessTrip.checked) {
        userbusinessTrip = 'да';
        document.querySelector('.preview__userHaveChild').innerHTML = userbusinessTrip;
    }else{
        userbusinessTrip = 'нет';
        document.querySelector('.preview__userHaveChild').innerHTML = userbusinessTrip;
    };

    let userPos = document.getElementById('userPos').value;
    document.querySelector('.preview__userPos').innerHTML = userPos;

    
    let dateSettled = document.getElementById('dateSettled').value;
    document.querySelector('.preview__dateSettled').innerHTML = dateSettled;
    
    let dateQuit = document.getElementById('dateQuit').value;
    document.querySelector('.preview__dateQuit').innerHTML = dateQuit;

    let userEducation = document.getElementById('userEducation').value;
    document.querySelector('.preview__userEducation').innerHTML = userEducation;
    
    let userOrganization = document.getElementById('userOrganization').value;
    document.querySelector('.preview__userOrganization').innerHTML = userOrganization;


    let userEnrolled = document.getElementById('userEnrolled').value;
    document.querySelector('.preview__userEnrolled').innerHTML = userEnrolled;


    let userEnding = document.getElementById('userEnding').value;
    document.querySelector('.preview__userEnding').innerHTML = userEnding;






    let f = userImage.files[0];
    if (f){
        preview__userImage.src = URL.createObjectURL(f);
    }
 }
 
//  preview__userImage.src = localStorage.getItem('userImage');






 


