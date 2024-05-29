
const {projects, clients} = require('../sampleData.js');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLScalarType, GraphQLList} = require('graphql')

const Client = require('../models/Client.js')
const Project = require('../models/Project.js')

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
    })
})

const ProjectsType = new GraphQLObjectType({
    name:"Projects",
    fields: ()=>({
        id: {type: GraphQLID},
        clientId: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        client:{
             type: ClientType,
            resolve(parent, args){
                return Client.findById(parent.clientId)
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        clients:{
            type: new GraphQLList(ClientType),
            resolve(){
                return Client.find();
            }
        },
        client:{
            type: ClientType,
            args: { id: {type: GraphQLID}},
            resolve(parent, args){
                return Client.findById(args.id);
            }
        },

        projects:{
            type: new GraphQLList(ProjectsType),
            resolve(){
                return Project.find();
            }
        },
        project:{
            type: ProjectsType,
            args: {
                id: {type: GraphQLID},
                clientId: {type: GraphQLID}
        },
            resolve(parent, args){
                return Project.find(args.id) ;
            }
        }
    }
})




module.exports = new GraphQLSchema({query : RootQuery})