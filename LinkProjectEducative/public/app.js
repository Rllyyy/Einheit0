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
    const formData = new FormData(e.target);
    
    //Push to API by post method
    fetch("http://localhost:3000/links", {
        method: "POST", 
        body: formData
    })
    .catch(err => {
        console.error(err.message);
      });

    //Create Element locally
    createLinkElement(formData.get("author"), formData.get("websiteName"), formData.get("url"), false);
    addLinkSuccess(formData.get("websiteName"));
    
});

//
function addLinkSuccess(websiteName) {
    const linkInformationElement = document.querySelector("#linkInformation");
    //Delete all child elements of link Information
    linkInformationElement.textContent = "";

    //Add linkSuccess Message
    const linkSuccessDiv = document.createElement("div");
    linkSuccessDiv.id = "linkSuccess";

    const linkSuccessSpan = document.createElement("span");
    linkSuccessSpan.id = "spanLinkSuccess";
    linkSuccessSpan.appendChild(document.createTextNode(`The link ${websiteName} has been successfully added!`));

    linkSuccessDiv.appendChild(linkSuccessSpan);
    linkInformationElement.appendChild(linkSuccessDiv);
    linkInformationElement.style.visibility = "visible";
    
    //remove the notification after 2000ms
    setTimeout(()=> {
        linkInformationElement.style.visibility = "hidden";
    }, 2000)
}

//Submit Button makes the linkInformation visible
document.getElementById("btn").addEventListener("click", (e) => {
    const linkInformation = document.querySelector("#linkInformation");
    linkInformation.style.visibility = "visible";
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

