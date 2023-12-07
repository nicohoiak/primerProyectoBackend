import multer from 'multer'
import { __dirname} from './utils.js'

/* para subir la imagen minuatura */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/public/img`)
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

export const uploader = multer({ storage })