/**
 * @description: requiring mongoose ORM
 */

const mongoose = require('mongoose');

/**
 * @description: mongodb schema for labels 
 */

var schema = mongoose.Schema;
var noteSchema = new schema({  // defining the mongodb schema
    labelID: [{
        type: schema.Types.ObjectId,
        ref: 'labelSchema'
    }],
    userID: {
        type: schema.Types.ObjectId,
        ref: 'userSchema'
    },
    title: {
        type: String,
        required: [true,'title is mandatory']
    },
    description: {
        type: String,
        //required: true
    },
    isArchive: {
        type: Boolean,
        default: false
    },
    isTrash: {
        type: Boolean,
        default: false
    },
    reminder : {
        type : Date
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('notes', noteSchema); // exporting the model