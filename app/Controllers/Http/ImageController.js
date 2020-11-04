'use strict'
const User = use('App/Models/User');
const Helpers = use('Helpers')
class ImageController {
    async show ({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}`))
      }
    
    async store({ request ,params}) {
        const user = await User.findOrFail(params.id)

        const images = request.file('image', {
            types: ['image'],
            size: '2mb'
        })
        await images.moveAll(Helpers.tmpPath('uploads'), file => ({
            name: `${Date.now()}-${file.clientName}`
        }))

        if (!images.movedAll()) {
            return images.errors()
        }
        await Promise.all(
            images
              .movedList()
              .map(image => user.images().create({ path: image.fileName }))
          )
    }
}

module.exports = ImageController
