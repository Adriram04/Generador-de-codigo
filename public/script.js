document.getElementById('generateBtn').addEventListener('click', function() {
    var code = generateCode();
    document.getElementById('code').innerText = code;
});

function generateCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';
    for (var i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
