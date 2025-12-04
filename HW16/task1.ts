// У нас поменялись требования к паролю. Юзерам выслана ссылка на смену пароля.
// Теперь когда они зайдут к нам на сайт, мы должны проверить, что их новый пароль соответствует следующим требованиям:
//      - минимум 8 символов                            | латинские буквы, максимум 15
//      - минимум одна заглавная буква
//      - минимум одна цифра
//      - минимум один специальный символ из набора     | ^!@_$&*()-+
// б. Нашим аналитикам интересно, какие цифры чаще всего используются юзерами в паролях.
// Mодифицируйте функцию так, чтобы она вместо булевого значения возвращала объект по следующим примерам:
//   input: 'Password123!' -> output: { isValid: true, digits: [1, 2, 3] }
//   input: 'myC00!Pa55w0rd' -> output: { isValid: true, digits: [0, 0, 5, 5, 0] }

const regExp = /\d/g;

function isValidPassword(password: string) {
    const symbolAmount = /^.{8,15}$/.test(password);
    const hasCapital = /[A-Z]/.test(password);
    const hasInteger = /\d/.test(password);
    const hasSpecialCharacter = /[\^!@_$&*()-\+]/.test(password);

    const isValid = symbolAmount && hasCapital && hasInteger && hasSpecialCharacter;
    const digits = password.match(regExp)?.map(Number) ?? [];
    const result = { isValid: isValid, digits: digits };
    console.log(result);
}

isValidPassword('A2@22');
isValidPassword('!55566667778');
isValidPassword('!@_$A8675689');
isValidPassword('!@_$&*()-+');
