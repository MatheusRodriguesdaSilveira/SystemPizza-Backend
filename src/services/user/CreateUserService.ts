import { hash } from "bcryptjs";
import prismaClient from "../../prisma";


interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}:UserRequest) {
        // verificar se ele enviou o email
        if(!email){
            throw new Error('Email incorreto')
        }
        
        const useAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (useAlreadyExists) {
            throw new Error('Email já existente')
        }
        
        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })
        
        return user
    }
}

export { CreateUserService }