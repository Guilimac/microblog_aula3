var Post = require('./models/post');

class PostsController {
    constructor() {}

    getAll(req, res) {
            Post.find({}, function(err, posts) {
                if (posts.length <= 0) {
                    return res.status(404).send('nenhum post encontrado');
                }
                res.json(posts);
            });
        }
        //Replicaset e Sharded Cluster
    getAllPopulated(req, res) {
        Post.find({}).populate('usuario', 'nome email idade').exec(function(err, posts) {
            if (posts.length <= 0) {
                return res.status(404).send('nenhum post encontrado');
            }
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
            if (err) return res.status(500).send(err);
            res.json(result);
        });
    }

}

module.exports = new PostsController();