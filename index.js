async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
    return posts;
}

function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    posts.forEach(function(post) {
        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        const p = document.createElement("p");
        p.textContent = post.body;

        li.append(h1, p);
        postList.append(li);
    });
}

getPosts();