
window.onload = (event) => {

};
const moreInfo = document.getElementById("more-info-of-class");
$('#btn-header').click( (e) => {
    e.preventDefault();
    if (moreInfo.style.display == "none")
        moreInfo.style.display = "block";
    else
        moreInfo.style.display = "none";
});
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
$(function () {
    $('#datetimepicker1').datetimepicker();
});
function CheckPhoneNumber(event){
    return event.charCode >= 48 && event.charCode <= 57;
}
