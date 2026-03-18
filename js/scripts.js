// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark-mode");
}

// NAVBAR SHADOW
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (nav) {
        nav.classList.toggle("shadow", window.scrollY > 20);
    }
});

// PAGE LOAD EFFECT
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// DYNAMIC PROJECTS
const projects = [
    {
        title: "AWS EKS Migration",
        desc: "Migrated ECS to EKS across regions with CI/CD & Terraform"
    },
    {
        title: "Banking Cloud Automation",
        desc: "Terraform modules + Jenkins pipelines + Docker deployments"
    }
];

const container = document.getElementById("projects-container");

if (container) {
    projects.forEach(p => {
        container.innerHTML += `
        <div class="col-md-6 mb-4">
            <div class="card p-4 shadow">
                <h4>${p.title}</h4>
                <p>${p.desc}</p>
            </div>
        </div>`;
    });
}

// DEVOPS STATUS
const status = document.getElementById("status");

if (status) {
    setTimeout(() => {
        status.innerHTML = `
            ✅ AWS: Running <br>
            🚀 Last Deployment: 2 hours ago <br>
            🔁 CI/CD: SUCCESS
        `;
    }, 1000);
}