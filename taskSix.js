//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generateRandomPassword(passLength) {

    const mixCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*-_=+;:,.<>?(){}[]';

    const mixCharactersLength = mixCharacters.length;


    let password = '';
    for (let i = 0; i < passLength; i++) {
        const index = Math.floor(Math.random() * mixCharactersLength);
        password += mixCharacters.charAt(index);
    }

    return password;
}


const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
