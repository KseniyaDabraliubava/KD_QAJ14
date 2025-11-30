// Для оплаты корпоративного инструмента нам нужно узнать сколько у нас пользователей с разными ролями,
// т.к. разные роли нуждаются в разных видах подписки
// На входе у нас .json файл с данными пользователей содержащий свойства: id, username, role
// На выходе нам нужен объект вида:
// {
//     role_1: {
//          count: 5,
//          users: [{id, username}, {id, username}, ...]
//     },
//     role_1: {
//          count: 20,
//          users: [{id, username}, {id, username}, ...]
//     },
//     ...
// }

import fs from 'fs';
import parse from 'path';
const data = fs.readFileSync('/Users/kseniyadabraliubava/Documents/TypeScript/QAJ14-onl/HW15/userRoles.json', 'utf-8');
const parsedData: DataType[] = JSON.parse(data);

type DataType = {
    id: number;
    username: string;
    role: string;
};

type RolesInfo = {
    count: number;
    users: { id: number; username: string }[];
};

type FinalRolesInfo = Record<string, RolesInfo>;

function usersCountToEachRole(userRoles: DataType[]): FinalRolesInfo {
    return userRoles.reduce<FinalRolesInfo>((totalList, user) => {
        const { id, username, role } = user;

        if (!totalList[role]) {
            totalList[role] = { count: 0, users: [] };
        }

        const roles = totalList[role];

        roles!.count += 1;
        roles!.users.push({ id, username });

        return totalList;
    }, {});
}

console.log(JSON.stringify(usersCountToEachRole(parsedData), null, 2));
