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
     name : String
     success : Boolean
 }

 type Repos {
    repositoryCount : Int!
    edges:[edges]
}

type edges {
    node : node
}

type node {
    name:String
    commitComments:commitComments
}

type commitComments {
    totalCount:Int!
    nodes:[nodes]
}

type nodes {
    commit : commitUrl
}

type commitUrl {
    commitUrl:String
}

input CreateIssueInput {
    repositoryId : ID!
    title : String!
    assigneesIds : [String!]
}

 type Label {
     _id : ID!
     labelName : String!
 }
 
type Note {
    _id : ID!
    title : String!
    description : String! 
    message : String!
}
 
 type Query {
     users(userID:String, first:Int, skip:Int):[User],
     searchNotesByTitle(title:String!):[Note],
     searchNotesByDescription(description:String!):[Note]
 }

 type Mutation{
    signUp(firstName: String!,lastName: String!,email: String!, password: String!):Message
    login(email: String!, password: String!):Message
    isEmailVerify:Message
    forgotPassword(email:String!):Message
    resetPassword(password:String!,confirmPassword:String!):Message
    createLabel(labelName:String!):Message
    removeLabel(labelID:String!):Message
    updateLabel(labelID:String!,newLabelName:String!):Message
    createNote(labelID:String,title:String,description:String!):Message
    updateNote(noteID:String!,newTitle:String,newDescription:String):Message
    removeNote(noteID:String!):Message
    addLabelNote(labelID:String!,noteID:String!):Message
    removeLabelNote(labelID:String!,noteID:String!):Message
    oAuth:Message
    verifyOauth:Message
    isArchive(noteID:String!):Message
    isTrash(noteID:String!):Message
    getRepo(user:String!):Message
    setReminder(noteID:String!,date:String!):Message
    deleteReminder(noteID:String!):Message
    imageUpload:Message
    createBranch(user:String!,repositoryName:String!,branchName:String!):Message
    deleteBranch(user:String!,repositoryName:String!,branchName:String!):Message
    addStar(starabbleId:String,clientMutation:String):Message
    removeStar(starabbleId:String,clientMutation:String):Message
    watchRepository(user:String!,repositoryName:String!):Message
    unwatchRepository(user:String!,repositoryName:String!):Message
    setColaborator(noteID:String!,colabID:String!):Message
    deleteColaborator(noteID:String!,colabID:String!):Message
    getAllUsers:Repos
    createIssue(input:CreateIssueInput!):Message
 }
`;

module.exports = { typeDefs };

