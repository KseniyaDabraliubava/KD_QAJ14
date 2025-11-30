//Наши пользователи ранее могли в качестве имени (username) выбрать как произвольное имя так и емейл.
// Теперь мы хотим убрать возможность использовать просто имя. Чтобы обработать существубщие данные,
// создайте функцию, которая будет принимать на вход .json файл с данными пользователей (username, name, last_name, email)
// и возвращать массив заготовленных сообщений для коммуникации с юзерами.
// На выходе должен быть объект с данными только по юзерам у которых username не является емейлом.
// Ожидаемый объект на выходе:
// {
//     username_1: {
//         email: 'email_1',
//         message: 'Hello {name} {last_name}, please update your username "{username_1}" to be a valid email to comply with our new policy.'
//     },
//     username_2: {
//         email: 'email_2',
//         message: 'Hello {name} {last_name}, please update your username "{username_2}" to be a valid email to comply with our new policy.'
//     },
//      ...
// }
import { readFileSync } from 'fs';

const data = readFileSync('/Users/kseniyadabraliubava/Documents/TypeScript/QAJ14-onl/HW16/users.json', 'utf-8');
const stringObject = JSON.parse(data);

function userNameIsNotEmail(
    users: {
        username: string;
        name: string;
        last_name?: string;
        email: string;
    }[]
) {
    const result: Record<string, { email: string; message: string }> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    users.forEach(user => {
        if (!emailRegex.test(user.username)) {
            result[user.username] = {
                email: user.email,
                message: `Hello ${user.name ?? ''} ${user.last_name ?? ''}, please update your username "${user.username}" to be a valid email to comply with our new policy`
            };
        }
    });

    return result;
}

const output = userNameIsNotEmail(stringObject);
console.log(output);
