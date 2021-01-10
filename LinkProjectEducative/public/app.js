const createLinkElement = (author, websiteName, url, end) => {
    const results = document.querySelector("#results");

    const divElement = document.createElement("div");
    //divElement.className = "groupElement";
    divElement.classList.add("groupElement");

    const linkNameElement = document.createElement("span");
    linkNameElement.classList.add("linkName");
    linkNameElement.appendChild(document.createTextNode(websiteName));

    const urlElement = document.createElement("a");
    urlElement.href = url;
    urlElement.appendChild(document.createTextNode(url));
    urlElement.setAttribute("target", "_blank");

    const authorElement = document.createElement("span");
    authorElement.classList.add("submittedName");
    authorElement.appendChild(document.createTextNode(`Submitted by ${author}`));

    divElement.appendChild(linkNameElement);
    divElement.appendChild(urlElement);
    divElement.appendChild(authorElement);

    if (end) 
    {
        results.appendChild(divElement);
    } else {
        //Insert a new link at the top of the result list
        results.insertBefore(divElement, results.childNodes[0]);
    }

    
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    //Assign Values to 
    const formData = new FormData(e.target);
    
    //Push to API by post method
    fetch("http://localhost:3000/links", {
        method: "POST", 
        body: formData
    })/*
    .then(response => response.json())
    .then(newLink => {
    })*/
    .catch(err => {
        console.error(err.message);
      });

    //Create Element locally
    createLinkElement(formData.get("author"), formData.get("websiteName"), formData.get("url"), false);
    
});

//Submit Button makes the linkInformation visible
document.getElementById("btn").addEventListener("click", (e) => {
    const linkInformation = document.querySelector("#linkInformation");
    linkInformation.style.display = "flex";
});




//Fetch the data from the server
fetch("http://localhost:3000/api/links")
    .then(response => response.json())
    .then(links => {
        links.forEach(link => {
            createLinkElement(link.author, link.websiteName, link.url, true);
        });
    })
    .catch(err => {
        console.error(err.message);
    });

