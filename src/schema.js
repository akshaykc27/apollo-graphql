const { gql } = require('apollo-server');

/**
* @description: The GraphQL schema
*/

const typeDefs = gql`

type User {
    _id : ID!
    firstName : String!
    lastName : String!
    email : String!
    password : String!
    labels : [Label]
    notes : [Note]
 }
 type Message {
     message : String
     token : String 
 }

 type Label {
     _id : ID!
     labelName : String!
 }
 
type Note {
    _id : ID!
    title : String!
    description : String! 
}
 
 type Query {
     users(userID:String) :[User]  
 }

 type Mutation{
    signUp(firstName: String!,lastName: String!,email: String!, password: String!):Message
    login(email: String!, password: String!):Message
    isEmailVerify:Message
    forgotPassword(email:String!):Message
    resetPassword(password:String!,confirmPassword:String!):Message
    createLabel(labelName:String!):Message
    removeLabel(labelID:String!):Message
    updateLabel(newLabelName:String!,newLabelName:String!):Message
    createNote(labelID:String,title:String,description:String!):Message
    updateNote(noteID:String!,newTitle:String,newDescription:String):Message
    removeNote(noteID:String!):Message
    addLabelNote(labelID:String!,noteID:String!):Message
    removeLabelNote(labelID:String!,noteID:String!):Message
    oAuth:Message
    verifyOauth:Message
    isArchive(noteID:String!):Message
    isTrash(noteID:String!):Message
    getRepo:Message
    setReminder(noteID:String!,date:String!):Message
    deleteReminder(noteID:String!):Message
    imageUpload:Message
 }
`;

module.exports = { typeDefs };

