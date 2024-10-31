$(document).ready(function () {
    $("#submitBtn").prop("disabled", true);
    function validateForm() {
        const email = $("#email").val();
        const password = $("#password").val();
        const fullname = $("#fullname").val();
        const dob = $("#dob").val();
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isPasswordValid = password.length >= 6;
        const isFullnameValid = fullname.trim().length > 0;
        const isDobValid = dob.trim().length > 0;
        if (isEmailValid && isPasswordValid && isFullnameValid && isDobValid) {
            $("#submitBtn").prop("disabled", false);
        } else {
            $("#submitBtn").prop("disabled", true);
        }
    }
    $("#email, #password, #fullname, #dob").on("input change", validateForm);
});
