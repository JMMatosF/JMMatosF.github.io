// ============================================
//  CONFIGURATION — edit these values
// ============================================
const GITHUB_USERNAME = "JMMatosF";

// List of featured repositories (just the repo name).
// To change which ones appear on the landing page, edit this list.
// Each entry can be:
//   - a string (public repo name — data pulled from the API)
//   - a manual object for private or third-party repos:
//     { name, description, language, html_url, stargazers_count?, forks_count? }
const FEATURED_REPOS = [
    {
        name: "RH",
        description: "Operational HR management web app (PWA) for a hospitality operation — cleaning, maintenance, activities, reception and admin. Django, PostgreSQL, 71 passing tests.",
        language: "Python",
        html_url: "https://github.com/JMMatosF/RH",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    "ecommerce-store",
    {
        name: "Agenda-Online",
        description: "Shared occupancy schedule for rental houses — day and timeline views, individual logins and an activity log. Installable React (Vite) PWA + Node/Express/SQLite, deployable to Fly.io.",
        language: "JavaScript",
        html_url: "https://github.com/JMMatosF/Agenda-Online",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "PictuRAS",
        description: "Microservices web platform for image processing (React, Express, RabbitMQ, MinIO, Docker, Nginx). First-year Master's team project.",
        language: "TypeScript",
        html_url: "https://github.com/Kard9876/RAS",
        stargazers_count: 1,
        forks_count: 0,
        private: true,
    },
    {
        name: "catalog-builder",
        description: "Product catalogue builder with PDF export — React, Express and Vite.",
        language: "JavaScript",
        html_url: "https://github.com/JMMatosF/catalog-builder",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "RNG-Project",
        description: "Smart irrigation system with an Edge/Fog/Cloud architecture — Arduino, MQTT, FastAPI, InfluxDB and Grafana.",
        language: "Python",
        html_url: "https://github.com/JMMatosF/RNG-Project",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "Ponto-de-Monitores",
        description: "Internal payment management system for activity instructors — Flask, SQLite, authentication and report export.",
        language: "Python",
        html_url: "https://github.com/JMMatosF/Ponto-de-Monitores",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "RDS_2526",
        description: "Dynamic Service Function Chaining (SFC) with P4, Mininet and P4Runtime. Software-Defined Networking course.",
        language: "Python",
        html_url: "https://github.com/joao4zinho/RDS_2526",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "NPR_TP2526",
        description: "Urban mobility simulation with Eclipse MOSAIC. Next-Generation Networks project.",
        language: "Java",
        html_url: "https://github.com/joao4zinho/NPR_TP2526",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "TP",
        description: "A small programming language built from scratch — lexer/parser (parsy), evaluator, optimizer and mutation testing. Software Engineering Methods coursework.",
        language: "Python",
        html_url: "https://github.com/JMMatosF/TP",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
    {
        name: "StockUpdate",
        description: "Internal stock synchronisation system — bridges the CMS and the invoicing software via API.",
        language: "Python",
        html_url: "https://github.com/JMMatosF/StockUpdate",
        stargazers_count: 0,
        forks_count: 0,
        private: true,
    },
];

// Language colours (subset of GitHub linguist)
const LANG_COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    Go: "#00ADD8",
    Rust: "#dea584",
    HTML: "#e34c26",
    CSS: "#563d7c",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Shell: "#89e051",
    Vue: "#41b883",
    Dart: "#00B4AB",
    R: "#198CE7",
    Jupyter: "#DA5B0B",
};

// ============================================
//  Theme toggle
// ============================================
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});

// ============================================
//  Render helpers
// ============================================
function repoIcon() {
    return `<svg class="repo-card-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>`;
}

function starIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>`;
}

function forkIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 014 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"/></svg>`;
}

function escapeHtml(str) {
    if (!str) return "";
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function renderSkeletons(count) {
    const grid = document.getElementById("repos");
    grid.innerHTML = Array(count).fill('<div class="skeleton"></div>').join("");
}

function renderRepoCard(repo) {
    const langColor = LANG_COLORS[repo.language] || "#8b949e";
    const langBar = repo.language
        ? `<div class="card-lang-bar" style="background:${langColor}"></div>`
        : "";
    const lang = repo.language
        ? `<span><span class="lang-dot" style="background:${langColor}"></span>${escapeHtml(repo.language)}</span>`
        : "";
    const stars = repo.stargazers_count > 0 ? `<span>${starIcon()}${repo.stargazers_count}</span>` : "";
    const forks = repo.forks_count > 0 ? `<span>${forkIcon()}${repo.forks_count}</span>` : "";
    const privateBadge = repo.private ? `<span class="badge-private">Private</span>` : "";

    return `
        <a class="repo-card" href="${repo.html_url}" target="_blank" rel="noopener">
            ${langBar}
            <div class="repo-card-header">
                ${repoIcon()}
                <span class="repo-card-name">${escapeHtml(repo.name)}</span>
                ${privateBadge}
            </div>
            <p class="repo-card-desc">${escapeHtml(repo.description) || "<em>No description</em>"}</p>
            <div class="repo-card-meta">${lang}${stars}${forks}</div>
        </a>
    `;
}

// ============================================
//  Fetch GitHub data
// ============================================
async function loadProfile() {
    // Only the avatar is pulled from the API — name and bio stay defined in the
    // HTML so you keep full control over how you present yourself.
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const user = await res.json();
        document.getElementById("avatar").src = user.avatar_url;
    } catch (err) {
        console.error("Error loading avatar:", err);
    }
}

async function loadFeaturedRepos() {
    const grid = document.getElementById("repos");
    const errorEl = document.getElementById("error");

    if (FEATURED_REPOS.length === 0) {
        // Fallback: show the most recently updated public repos
        try {
            const res = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
            );
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const repos = await res.json();
            if (repos.length === 0) {
                grid.innerHTML = "<p>No public repositories to show.</p>";
                return;
            }
            grid.innerHTML = repos.map(renderRepoCard).join("");
        } catch (err) {
            grid.innerHTML = "";
            errorEl.textContent = "Couldn't load repositories.";
            errorEl.hidden = false;
        }
        return;
    }

    renderSkeletons(FEATURED_REPOS.length);

    try {
        const results = await Promise.all(
            FEATURED_REPOS.map((entry) => {
                if (typeof entry === "object") return Promise.resolve(entry);
                return fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${entry}`).then((r) =>
                    r.ok ? r.json() : null
                );
            })
        );
        const valid = results.filter(Boolean);
        if (valid.length === 0) throw new Error("No repos found");
        grid.innerHTML = valid.map(renderRepoCard).join("");
    } catch (err) {
        grid.innerHTML = "";
        errorEl.textContent = "Couldn't load repositories. Check the names in script.js.";
        errorEl.hidden = false;
    }
}

// ============================================
//  Fade-in on scroll
// ============================================
function setupFadeIn() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

// ============================================
//  Init
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();
loadProfile();
loadFeaturedRepos();
setupFadeIn();
