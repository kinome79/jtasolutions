
let projScrolling = false;
let scrollSpeed = 0;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my resume page! - As well as front end design, my skills also involve scripting and back end, for a full stack engineering solution!");

    loadProjects ("proj-front");
    projTypeSelect("proj-front");


    document.getElementById("proj-display").onmousemove = projScrollSpeed;
    document.getElementById("proj-display").onmouseout = projScrollStop;

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
        projDiv.dataset.location = projLocation;
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
    //calculate the scrolld

    document.querySelectorAll('.proj-cell').forEach( projDiv => {
        let currentLocation = parseFloat(projDiv.style.left);
        let newLocation = currentLocation + scrollSpeed;
        projDiv.style.left = newLocation + 'px';
        
    })

    if (projScrolling) {
        requestAnimationFrame(projScroll);
    }
}

function projScrollSpeed (e) {

    if (!projScrolling) {
        projScrolling = true;
        requestAnimationFrame(projScroll)
    }
    const x = e.clientX;
    const width = window.innerWidth;
    const percent = width * .25;

    if (x < percent) {
        scrollSpeed = (x - percent)/(percent/10);
    } else if (x > width - percent) {
        scrollSpeed = (x-(width-percent))/(percent/10);
    } else {
        scrollSpeed = 0;
    }
 
}

function projScrollStop (e) {
    //stop the scroll
    let offTarget = "";
    try {offTarget = e.relatedTarget.id} catch {offTarget = "windowout"};

    if ((e.target.id == "proj-display" || (offTarget == "windowout" && e.target.id.startsWith("proj-id"))) && (offTarget == "windowout" || !e.relatedTarget.id.startsWith("proj-id"))) {
        console.log(" A stop was called by " + e.target.id)
        projScrolling = false;
    }
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