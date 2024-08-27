const textArea = document.querySelector(".text-area");
const textAreaMesagge = document.querySelector(".text-area-message");

function btnEncrypt(){
    const encriptedText = encrypt(textArea.value);
    textAreaMesagge.value = encriptedText;
    textArea.value = "";
    textAreaMesagge.style.backgroundImage = "none";
}

function btnDecrypt(){
    const decriptedText = decrypt(textArea.value);
    textArea.value = decriptedText;
    textArea.value = "";
    textAreaMesagge.style.backgroundImage = "none";
}

function encrypt(stringEncrypt){
    let arrayCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < arrayCode.length; i++) {
        if(stringEncrypt.includes(arrayCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(arrayCode[i][0], arrayCode[i][1]);
        }
    }
    return stringEncrypt;
}

function decrypt(stringDecrypt){
    let arrayCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < arrayCode.length; i++) {
        if(stringDecrypt.includes(arrayCode[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(arrayCode[i][1], arrayCode[i][0]);
        }
    }
    return stringDecrypt;
}