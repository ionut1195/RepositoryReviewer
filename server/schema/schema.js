const {
	GraphQLObjectType,
	 GraphQLID, 
	 GraphQLString, 
	 GraphQLSchema,
	 GraphQLList,
	 GraphQLNonNull	
	} = require('graphql')

const Comment = require('../models/Comment')
const CommentType = new GraphQLObjectType({
	name: 'Comments',
	fields: () => ({
		id: {type: GraphQLID},
		author: {type: GraphQLString},
		content: {type: GraphQLString},
		repositoryId: {type: GraphQLString}
	})
})

//Query
const CommentQuery = new GraphQLObjectType({
	name: 'CommentQueryType',
	fields: {
		comment: {
			type: new GraphQLList(CommentType),
			// args: {repositoryId: {type: GraphQLString}},
			resolve(parent, args){
				return Comment.find()
			}
		}
	}
})
//Mutations

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addComment: {
			type:  CommentType,
			args: {
				author: {type: GraphQLNonNull(GraphQLString)},
				content: {type: GraphQLNonNull(GraphQLString)},
				repositoryId: {type: GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
				const comment = new Comment({
					author: args.author,
					content: args.content,
					repositoryId: args.repositoryId
				});
				return comment.save();
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: CommentQuery,
	mutation
})