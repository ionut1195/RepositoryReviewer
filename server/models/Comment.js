const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
	id: {
		type: String,
	},
	author: {
		type: String,
	},
	content: {
		type: String,
	},
	repositoryId: {
		type: String,
	}
})

module.exports = mongoose.model('Comment', CommentSchema);