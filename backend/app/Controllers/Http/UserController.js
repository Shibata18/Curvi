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
        //            .raw('select * from users inner join cursos on cursos.user_email = users.email inner join experiencias on experiencias.user_email = users.email                    inner join objetivos on objetivos.user_email = users.email inner join social_medias on social_medias.user_email = users.email; ')
        const dados = await Database
            .from('users')
            .innerJoin('cursos', 'users.email', 'cursos.user_email')
            .innerJoin('experiencias', 'users.email', 'experiencias.user_email')
            .innerJoin('social_medias', 'users.email', 'social_medias.user_email')
            .innerJoin('objetivos', 'users.email', 'objetivos.user_email')
            .where('users.email',user.email)
        return dados;
    }
}

module.exports = UserController
