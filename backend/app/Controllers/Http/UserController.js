'use strict'
const User = use('App/Models/User');
const Database = use('Database');
class UserController {
    async index({ request, response, params }) {
        const user = await User.all()
        return user;
    }
    async store({ request }) {
        const data = request.only([
            "email",
            "nome",
            "password",
            "address",
            "telefone",
            "area_formacao",
            "profissao",
            "date_birth",
        ]);
        const user = await User.create(data);
        return user;
    }
    async update({ request, params }) {
        const user = await User.findByOrFail("email", request.header('email'))
        const data = request.only([
            "email",
            "nome",
            "password",
            "address",
            "telefone",
            "area_formacao",
            "profissao",
            "date_birth",
        ]);
        user.merge(data)
        await user.save()
        return user
    }
    async login({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }
    async show({ params, request }) {
        const user = await User.findOrFail(params.id)

        return user
    }
    async profile({ request }) {
        const user = await User.findByOrFail("email", request.header('email'));
        return user;
    }
    async allData({ request }) {
        const user = await User.findByOrFail("email", request.header('email'));
        const dados = await Database
            .select('*')
            .from('users')
            .innerJoin('cursos', 'users.email', 'cursos.user_email')
           /*  .innerJoin('experiencias', 'users.email', 'experiencias.user_email')
            .innerJoin('rede_socials', 'users.email', 'rede_socials.user_email')
            .innerJoin('objetivos', 'users.email', 'objetivos.user_email') */
        return dados;
    }
}

module.exports = UserController
