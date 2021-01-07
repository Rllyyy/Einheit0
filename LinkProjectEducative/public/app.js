document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    //Push to API by post method
    fetch("http://localhost:3000/links", {
        method: "POST", 
        body: formData
    })
    .then(response => response.json())
    .then(newLink => {
        console.log(newLink);
        hello();
    })
    .catch(err => {
        console.error(err.message);
      });

    //add Element
});

//Submit Button makes the linkInformation visible
document.getElementById("btn").addEventListener("click", (e) => {
    const linkInformation = document.querySelector("#linkInformation");
    linkInformation.style.display = "flex";
});

const hello = () => {

//Fetch the data from the server
fetch("http://localhost:3000/api/links")
    .then(response => response.json())
    .then(links => {
        links.forEach(link => {
            const results = document.querySelector("#results");

            const divElement = document.createElement("div");
            //divElement.className = "groupElement";
            divElement.classList.add("groupElement");

            const linkNameElement = document.createElement("span");
            linkNameElement.classList.add("linkName");
            linkNameElement.appendChild(document.createTextNode(link.websiteName));

            const urlElement = document.createElement("a");
            urlElement.href = link.url;
            urlElement.appendChild(document.createTextNode(link.url));
            urlElement.setAttribute("target", "_blank");

            const authorElement = document.createElement("span");
            authorElement.classList.add("submittedName");
            authorElement.appendChild(document.createTextNode(`Submitted by ${link.author}`));

            divElement.appendChild(linkNameElement);
            divElement.appendChild(urlElement);
            divElement.appendChild(authorElement);

            results.appendChild(divElement);
        });
    })
    .catch(err => {
        console.error(err.message);
    }); }

    hello();