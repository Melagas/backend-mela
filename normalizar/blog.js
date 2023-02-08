//import de la libreria 
const {normalize, denormalize, schema} = require("normalizr");
const blogJson = require ("./json/blog.json");
const util = require ('util')

//crear esquemas para normalizar la data

const authorSchema = new schema.Entity('authors')

const commentSchema = new schema.Entity('comments')

const postSchema = new schema.Entity('post', {
author: authorSchema,
comment: [commentSchema]
})

//print 

const print = (obj) => {
    console.log('obj sin util', obj);
    console.log('obj sin util', util.inspect(obj, true,12,true));
    console.log('obj con util 2', util.inspect(obj, false, 12, false));
}

console.log('Normalizado!!');
