/******************************************************************************
* @Execution : default node : cmd> server.js
* 
* 
* @Purpose : to connect to the server using apollo-graphql
* @overview : Fundoo 
* @author : Akshay K C <akshaykc27@gmail.com>
* @version : 1.0
* @since : 30-April-2019
*
******************************************************************************/

/**
* @description: requiring the neccessary files
*/

require('dotenv').config();
//const { ApolloServer } = require('apollo-server');
// const redis = require('async-redis');
// client = redis.createClient()
const redis = require('async-redis')
const client = require('./config/redis');

const { ApolloServer } = require('apollo-server-express');
const express = require('express')
const { typeDefs } = require('./src/schema');
const resolvers = require('./src/resolvers').resolvers
const mongodb = require('./config/mongodb');
const upload = require('./services/awsS3');

//creating a express instance
const app = express();

app.use("*", upload.single('image'))

const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: ({ req }) => ({
        // to get the user token/code from the query
        token: req.query.token,
        code: req.query.code
    })
});

server.applyMiddleware({ app, path: '/graphql' });

// listening to port
app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server ready at ${process.env.PORT}`);
})