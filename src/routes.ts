import { Request, Response } from "express"
import {createUser} from "./services/CreateUser"

export function helloWorld(request: Request, response: Response){
    
    const user=createUser({
        email: 'lclsouza@hotmail.com',
        password: '123456',
        techs: ['NodeJS', 'ReactJs', 'React Native',
                {tittle: 'JavaScript', experience: 8}
    ]
    })

    console.log(user.email, user.password)
    return response.json({message:'Hello World'})
}



