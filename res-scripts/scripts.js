

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my resume page! - As well as front end design, my skills also involve scripting and back end, for a full stack engineering solution!");

    loadProjects ("proj-front");
    projTypeSelect("proj-front");


    document.getElementById("proj-display").onmousemove = projScroll;
    document.getElementById("proj-left").onmouseover = projScroll;
    document.getElementById("proj-right").onmouseover = projScroll;
    document.getElementById("proj-left").onmouseout = projScrollStop;
    document.getElementById("proj-right").onmouseout = projScrollStop;

    document.getElementById("request-form").addEventListener("submit", requestResume)
})

function openCert (certID) {
    const cert = certInfo[certID];
    console.log(cert)
    document.getElementById("cert-title").textContent = cert.title;
    document.getElementById("cert-desc").textContent = cert.desc;
    document.getElementById("cert-img").src = cert.url;
    document.getElementById("cert-viewer").style.display = "block";
    document.getElementById('cert-viewer').focus();
}

function closeCert () {
    document.getElementById("cert-viewer").style.display = "none";
}

function listCert () {
    
}

function loadProjects(projType) {
    let projSpacing = 100;
    let projLocation = projSpacing;
    document.querySelectorAll('.proj-cell').forEach( projDiv => {
        projDiv.style.left = projLocation + "px";
        projLocation += projDiv.offsetWidth + projSpacing;
        projDiv.onclick = () => {return openProj(1)};
    })
}

function projTypeSelect(projType) {
    document.querySelectorAll('.proj-button').forEach( btn => {
        btn.style.backgroundColor = 'darkblue';
        btn.style.color = 'lightblue';
    });
    document.getElementById(projType).style.backgroundColor = 'lightblue';
    document.getElementById(projType).style.color = 'darkblue';
    loadProjects(projType);
}

function projScroll (e) {
    let scrollSpeed = 5;

    document.querySelectorAll('.proj-cell').forEach( projDiv => {
        let currentLocation = parseInt(projDiv.style.left);
        let newLocation = currentLocation - scrollSpeed;
        projDiv.style.left = newLocation + 'px';
        
    })
}

function projScrollStop (e) {

}

function openProj (projID) {
    const proj = projInfo[projID];

    console.log("Opening project...")
    document.getElementById("proj-viewer").style.display = "block";
    document.getElementById('proj-viewer').focus();
}

function closeProj () {
    document.getElementById("proj-viewer").style.display = "none";
}

function showResumeForm () {
    const viewer = document.getElementById("resume-form");
    viewer.style.display = 'block';
}

function hideResumeForm () {
    const viewer = document.getElementById("resume-form");
    viewer.style.display = 'none';
}

function requestResume (e) {
    e.preventDefault();
    const company = document.getElementById("company").value;
    const name = document.getElementById("cname").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;

    console.log( company + "\n" + name+ "\n" + number+ "\n" + email) //filler for actual API submission
    
    const message = document.getElementById("resume-message");
    message.style.display = 'block';
    message.style.transition = "opacity 1s";
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
        setTimeout(() => {
            message.style.display = 'none';
        }, 1000);
    }, 2000);

    hideResumeForm();

    document.getElementById("company").value = "";
    document.getElementById("cname").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";

}