
function doCapture(){
    html2canvas(document.getElementById('form')).then(function(canvas){
        canvas.toBlob(function(blob) {
            saveAs(blob, "YourResume.png");
         });    
});
};



function sendBtn(){
    html2canvas(document.getElementById('form')).then(function(canvas){
        canvas.toBlob(function(blob) {
            function sendEmail() {
                Email.send({
                Host: "smtp.mail.ru",
                Username : "fanadape@mail.ru",
                Password : "8KbLzDQLnVRPgLZNKDhz",
                To : 'iliya32005@yandex.ru',
                From : "fanadape@mail.ru",
                Subject : "Резюме",
                Body : "Получите и распишитесь, с любовью МС",
                Attachments : [
                    {
                        name : "your__resume.png",
                        data : canvas.toDataURL()
                    }]
                }).then(
                    message => alert("mail sent successfully")
                );
            }
         });    
});
}
