const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let sectionEl = document.getElementById("content-section")

for (let i = 0; i < posts.length; i++) {
    sectionEl.innerHTML += `<div class="container">
                        <img class="avatar" src=${posts[i].avatar} alt="Author of the post">
                        <div>
                            <p><span class="bold-text">${posts[i].name}</span></p>
                            <p>${posts[i].location}</p>
                        </div>
            </div>

            <img class="post" src="${posts[i].post}" alt="Photo of ${posts[i].post}">

            <div class="icon-container">
                <img class="icon" src="images/icon-heart.png" alt="Heart Icon">
                <img class="icon" src="images/icon-comment.png" alt="Comment Icon">
                <img class="icon" src="images/icon-dm.png" alt="DM Icon">
            </div>
            <div class="post-details">
                <p class="likes"><span class="bold-text">${posts[i].likes} likes</span></p>
                <p class="user-caption"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>`
}

