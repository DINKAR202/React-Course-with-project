import vine from '@vinejs/vine'

export const registerSchema = vine.object({
    name : vine.string().minLength(2).maxLength(150),
    email : vine.string().email(),
    password : vine.string().minLength(6).maxLength(50).confirmed(),
})