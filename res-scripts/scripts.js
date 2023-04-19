
let projScrolling = false;
let scrollSpeed = 0;
const projSpacing = 100;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my resume page! - As well as front end design, my skills also involve scripting and back end, for a full stack engineering solution!");

    loadProjects ("proj-front");
    projTypeSelect("proj-front");
    
    Object.keys(projInfo).forEach (type => {
        const spanID = type + "-qty";
        document.getElementById(spanID).textContent = Object.keys(projInfo[type]).length;
    })


    document.getElementById("proj-display").onmousemove = projScrollSpeed;
    document.getElementById("proj-display").onmouseout = projScrollStop;

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
    let projLocation = projSpacing;
    let projNumber = 0;

    document.querySelectorAll('.proj-cell').forEach( projDiv => {
        projDiv.style.left = projLocation + "px";
        projLocation += projDiv.offsetWidth + projSpacing;
        loadProject(projDiv, projType, projNumber);
        projNumber ++;
    })
}

function loadProject(theDiv, type, number) {
    const projData = projInfo[type][number];
    theDiv.children[0].children[0].src = projData.image;
    theDiv.children[1].innerHTML = projData.title;
    theDiv.dataset.project = number;
    theDiv.onclick = () => {return openProj(type, number)};
}

function projTypeSelect(projType) {
    document.querySelectorAll('.proj-button').forEach( btn => {
        btn.style.backgroundColor = 'darkblue';
        btn.style.color = 'lightblue';
    });
    document.getElementById(projType).style.backgroundColor = 'lightblue';
    document.getElementById(projType).style.color = 'darkblue';
    document.getElementById("proj-display").dataset.type = projType;
    loadProjects(projType);
}

function projScroll (e) {
    //calculate the scrolld

    document.querySelectorAll('.proj-cell').forEach( projDiv => {
        let currentLocation = parseFloat(projDiv.style.left);
        let newLocation = currentLocation + scrollSpeed;
        projDiv.style.left = newLocation + 'px';
        if (newLocation < - projDiv.offsetWidth - projSpacing && scrollSpeed < 0) {
            let projType = document.getElementById("proj-display").dataset.type;
            let projID = (parseInt(projDiv.dataset.project) + 5) % Object.keys(projInfo[projType]).length;
            loadProject(projDiv, projType, projID);
            projDiv.style.left = (newLocation + (5 * (projDiv.offsetWidth + projSpacing))) + "px";
        } else if (newLocation > window.innerWidth + projSpacing && scrollSpeed > 0) {
            let projType = document.getElementById("proj-display").dataset.type;
            let projID = (Object.keys(projInfo[projType]).length + (projDiv.dataset.project - 5)) % Object.keys(projInfo[projType]).length;
            loadProject(projDiv, projType, projID);
            projDiv.style.left =  (newLocation - (5 * (projDiv.offsetWidth + projSpacing))) + "px";
        }
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
    const percent = width * .33;

    if (x < percent) {
        scrollSpeed = (percent - x)/(percent/15);
        document.getElementById("left-cover").style.opacity = scrollSpeed/15; 
    } else if (x > width - percent) {
        scrollSpeed = ((width-percent)-x)/(percent/15);
        document.getElementById("right-cover").style.opacity = -scrollSpeed/15; 
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
        document.getElementById("left-cover").style.opacity = 0; 
        document.getElementById("right-cover").style.opacity = 0; 
    }
}





function openProj (projType, projID) {
    const proj = projInfo[projType][projID];

    document.getElementById("proj-title").textContent = proj.title;
    document.getElementById("proj-frame").src = proj.link;
    document.getElementById("proj-desc").textContent = proj.desc;
    document.getElementById("proj-link").href = proj.link;

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