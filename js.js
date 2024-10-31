$(document).ready(function () {
    $("#submitBtn").prop("disabled", true);

    // Hàm kiểm tra các trường
    function validateForm() {
        const email = $("#email").val();
        const password = $("#password").val();
        const fullname = $("#fullname").val();
        const dob = $("#dob").val();
        
        // Kiểm tra các điều kiện của từng trường
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isPasswordValid = password.length >= 6;
        const isFullnameValid = fullname.trim().length > 0;
        const isDobValid = dob.trim().length > 0;

        // Enable nút submit nếu tất cả đều hợp lệ
        if (isEmailValid && isPasswordValid && isFullnameValid && isDobValid) {
            $("#submitBtn").prop("disabled", false);
        } else {
            $("#submitBtn").prop("disabled", true);
        }
    }

    // Gắn sự kiện 'input' cho các trường để kiểm tra mỗi khi có thay đổi
    $("#email, #password, #fullname, #dob").on("input change", validateForm);
});
