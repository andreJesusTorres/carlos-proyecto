@api.route('/posts', methods=['POST'])
@jwt_required()
def create_post():
    user_id = get_jwt_identity()  # Obtener ID del usuario autenticado
    data = request.get_json()

    title = data.get('title')
    content = data.get('content')

    if not title or not content:
        return jsonify({"error": "Missing title or content"}), 400

    post = Post(title=title, content=content, user_id=user_id)
    db.session.add(post)
    db.session.commit()

    return jsonify({"message": "Post created successfully", "post": post.serialize()}), 201

@api.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    posts_serialized = [post.serialize() for post in posts]

    return jsonify(posts_serialized), 200

@api.route('/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    post = Post.query.get(post_id)

    if not post:
        return jsonify({"error": "Post not found"}), 404

    return jsonify(post.serialize()), 200

@api.route('/posts/<int:post_id>', methods=['PUT'])
@jwt_required()
def update_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.get(post_id)

    if not post:
        return jsonify({"error": "Post not found"}), 404

    if post.user_id != user_id:
        return jsonify({"error": "Unauthorized"}), 403

    data = request.get_json()
    post.title = data.get('title', post.title)
    post.content = data.get('content', post.content)
    db.session.commit()

    return jsonify({"message": "Post updated successfully", "post": post.serialize()}), 200

@api.route('/posts/<int:post_id>', methods=['DELETE'])
@jwt_required()
def delete_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.get(post_id)

    if not post:
        return jsonify({"error": "Post not found"}), 404

    if post.user_id != user_id:
        return jsonify({"error": "Unauthorized"}), 403

    db.session.delete(post)
    db.session.commit()

    return jsonify({"message": "Post deleted successfully"}), 200

