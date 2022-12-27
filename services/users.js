import prisma from '../config/prisma.js';
import bcrypt from 'bcrypt';

const userService = {};

userService.findUsersService = async (id = 0) => {
    if (id != 0) {
        return await prisma.users.findUnique({
            where: {
                id: parseInt(id),
            }
        });
    }
    return await prisma.users.findMany();
}

userService.createUserService = async (body) => {
    //Encrypted Pass
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(body.password, salt);
    body.password = hash;

    return await prisma.users.create(
        {
            data: body
        }
    );
}

userService.updateUserService = async (id, body) => {
    return await prisma.users.update({
        where: {
            id: parseInt(id)
        },
        data: body
    });
}

userService.deleteUserService = async (id) => {
    return await prisma.users.delete({
        where: {
            id: parseInt(id)
        }
    });
}

userService.getUserByEmail = async (email = '') => {
    return await prisma.users.findUnique({
        where: {
            email: email
        }
    });
}

export { userService };