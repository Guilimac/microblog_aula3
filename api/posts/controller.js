var Post = require('./models/post');

class PostsController {
    constructor() {}

    getAll(req, res) {
        Post.find({}, function(err, posts) {
            res.json(posts);
        });
    }

    postPost(req, res) {
        var post = new Post(req.body);
        post.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.json(result);
        });
    }

    putPost(req, res) {
        var id = req.params.id;
        Post.update({ _id: id }, { $set: req.body }, function(err, result) {
            if (err) return res.status(500).send(err);
            res.json(result);
        });
    }

    deletePost(req, res) {
        var id = req.body.id;
        Post.remove({ _id: id }, function(err, result) {
            if (err) return res.send(err);
            res.json(result);
        });
    }

}

module.exports = new PostsController();