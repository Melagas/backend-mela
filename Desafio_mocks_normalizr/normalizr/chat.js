const {normalize,denormalize, schema} = require ("normalizr");
const chatJson = require('./json/chat.json')
const util = require ('util')

const authorSchema = new schema.Entity('authors')
const textSchema = new schema.Entity('texts')
const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    text: [textSchema]
})

//print

const print = (obj) => {
    console.log('obj con util', util.inspect(obj, true, 12, true))
}

console.log('Normalizado')
const normalizedPosts = normalize(chatJson, postSchema)
print(normalizedPosts)
console.log('Normalizado')
console.log(JSON.stringify(chatJson).length)
console.log(JSON.stringify(normalizedPosts).length)

console.log('OBJETO NORMALIZADO')
const denormalizedOrganigrama = denormalize(normalizedPosts.result, grupoSchema, normalizedPosts.entities)
print(denormalizedOrganigrama)


