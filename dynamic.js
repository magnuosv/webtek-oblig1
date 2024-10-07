let postCounter = 1;

async function fetchData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postCounter}`);
        const postData = await response.json();

        const displayPost = document.getElementById("displayPost");

        displayPost.innerHTML += `
            <section>
                <div>
                    <h4>PostTitle: ${postData.title}</h4>
                    <p>Post: ${postData.body}</p>
                </div>
            </section>
        `;
    } catch (error) {
        console.error(error);
    }
    postCounter++;
    console.log(postCounter);
}

//Check if user has reached end of website, if so fetch new post
function checkIfEnd(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        fetchData();
    }
}

let myInterval = setInterval(checkIfEnd, 100);