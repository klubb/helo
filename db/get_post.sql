
SELECT * FROM posts Join users on users.id=posts.author_id WHERE posts.id=$1;
