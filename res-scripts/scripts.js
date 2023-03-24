

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my resume page! - As well as front end design, my skills also involve scripting and back end, for a full stack engineering solution!");

    loadProjects ("proj-front");
    projTypeSelect("proj-front");


    document.getElementById("proj-display").onmousemove = projScroll;
    document.getElementById("proj-left").onmouseover = projScroll;
    document.getElementById("proj-right").onmouseover = projScroll;
    document.getElementById("proj-left").onmouseout = projScrollStop;
    document.getElementById("proj-right").onmouseout = projScrollStop;
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