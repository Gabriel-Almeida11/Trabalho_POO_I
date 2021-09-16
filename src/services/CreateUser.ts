interface ItechsData{
    tittle: string;
    experience: number;
}

interface IcreateUserData{
    name?: string;              //Opcional
    email: string;              //Obrigatorio 
    password: string;
    techs: Array<string | ItechsData>        //Array<string | number> O array contem string ou numbers
}

export function createUser({name, email, password}: IcreateUserData){
    const user ={
        name,
        email,
        password
    }

    return user;
}