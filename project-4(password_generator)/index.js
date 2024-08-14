var passwordInput = document.getElementById('Password');

function add() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var generatedPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }
    passwordInput.value = generatedPassword;
}

function copy() {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 999);
    document.execCommand("copy");
}
