"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(request, response) {
    var user = (0, CreateUser_1.createUser)({
        email: 'lclsouza@hotmail.com',
        password: '123456',
        techs: ['NodeJS', 'ReactJs', 'React Native',
            { tittle: 'JavaScript', experience: 8 }
        ]
    });
    console.log(user.email, user.password);
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
