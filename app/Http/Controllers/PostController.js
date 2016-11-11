'use strict'
const Post = use('App/Model/Post');

class PostController {
    * new(request, response) {
        yield response.sendView('post/new');
    }
    * create(request, response) {
        const postData = request.only('title', 'body');
        yield Post.create(postData);
        response.redirect('/');
    }
}

module.exports = PostController
