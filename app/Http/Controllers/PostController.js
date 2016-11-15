'use strict'
const Post = use('App/Model/Post');

class PostController {
    * index(request, response) {
        const posts = yield Post.all();
        yield response.sendView('post/index', {posts: posts.toJSON()});
    }
    * read(request, response) {
        const id = request.param('id');
        const post = yield Post.find(id);
        yield response.sendView('post/read', {post: post});
    }
    * new(request, response) {
        yield response.sendView('post/new');
    }
    * create(request, response) {
        const postData = request.only('title', 'body', 'image');
        yield Post.create(postData);
        response.redirect('/');
    }
    * edit(request, response) {
        const id = request.param('id');
        const post = yield Post.find(id);
        yield response.sendView('post/edit', {post: post});
    }
    * update(request, response) {
        var postData = request.only('id', 'title', 'body');
        const id = postData.id;
        const post = yield Post.find(id);
        post.fill(postData);
        yield post.save();
        response.redirect('/');
    }
    * delete(request, response) {
        var post = yield Post.find(request.param('id'));
        yield post.delete();
        response.redirect('/');
    }
}

module.exports = PostController
