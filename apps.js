
"use strict";

// ==========================================
// CLOCK AND DATE
// ==========================================

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-GB", {
            timeZone: "Europe/Belgrade",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-GB", {
            timeZone: "Europe/Belgrade",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);


// ==========================================
// GLOBAL SEARCH
// ==========================================

const searchEngines = {
    google: "https://www.google.com/search",
    bing: "https://www.bing.com/search",
    duckduckgo: "https://duckduckgo.com/",
    startpage: "https://www.startpage.com/sp/search",
    youtube: "https://www.youtube.com/results",
    imdb: "https://www.imdb.com/find/"
};

const searchForm = document.getElementById("searchForm");
const searchEngine = document.getElementById("searchEngine");

const savedEngine = localStorage.getItem("searchEngine");

searchEngine.value = searchEngines[savedEngine]
    ? savedEngine
    : "google";

searchForm.action = searchEngines[searchEngine.value];

searchEngine.addEventListener("change", function () {
    searchForm.action = searchEngines[this.value];

    localStorage.setItem("searchEngine", this.value);
});


// ==========================================
// GENERAL HELPERS
// ==========================================

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}


// ==========================================
// NORMAL BOOKMARK LINKS
// ==========================================

function createBookmark(item) {
    const link = createElement(
        "a",
        "",
        (item.icon ? item.icon + " " : "") + item.name
    );

    link.href = item.url;

    if (item.newTab) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }

    return link;
}


// ==========================================
// HOME LAB CONNECTION MODE
// ==========================================

let connectionMode = localStorage.getItem("connectionMode");

if (!["dns", "ip", "both"].includes(connectionMode)) {
    connectionMode = "dns";
}

function createServiceSection(section, content) {

    const modeContainer = createElement("div", "mode-container");

    const label = createElement(
        "span",
        "mode-label",
        "Connection:"
    );

    const modeSwitch = createElement("div", "mode-switch");

    ["dns", "ip", "both"].forEach(mode => {

        const button = createElement(
            "button",
            "mode-button",
            mode.toUpperCase()
        );

        button.type = "button";
        button.dataset.mode = mode;

        button.addEventListener("click", () => {
            connectionMode = mode;

            localStorage.setItem("connectionMode", mode);

            renderServices(section, content);
        });

        modeSwitch.appendChild(button);
    });

    modeContainer.append(label, modeSwitch);

    const list = createElement("ul", "service-list");

    content.append(modeContainer, list);

    renderServices(section, content);
}


function renderServices(section, content) {

    const list = content.querySelector(".service-list");

    list.replaceChildren();

    section.items.forEach(service => {

        const li = createElement("li", "service-item");

        const name = createElement(
            "span",
            "service-name",
            (service.icon ? service.icon + " " : "") + service.name
        );

        const links = createElement("div", "service-links");

        function addLink(label, url, type) {

            if (!url) return;

            const link = createElement(
                "a",
                "service-link " + type,
                label
            );

            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            links.appendChild(link);
        }

        if (connectionMode === "dns" || connectionMode === "both") {
            addLink("DNS", service.dns, "dns-link");
        }

        if (connectionMode === "ip" || connectionMode === "both") {
            addLink("IP", service.ip, "ip-link");
        }

        li.append(name, links);

        list.appendChild(li);
    });

    content.querySelectorAll(".mode-button").forEach(button => {

        const active = button.dataset.mode === connectionMode;

        button.classList.toggle("active", active);

        button.setAttribute("aria-pressed", String(active));

    });
}


// ==========================================
// COLLAPSIBLE SECTIONS
// ==========================================

function initializeCollapsibleBoxes() {

    document.querySelectorAll(".box").forEach(box => {

        const button = box.querySelector(".box-header");
        const content = box.querySelector(".box-content");
        const icon = box.querySelector(".collapse-icon");

        const key = "box_" + box.dataset.section;

        const savedState = localStorage.getItem(key);

        const collapsed = savedState === "collapsed";

        content.hidden = collapsed;

        button.setAttribute(
            "aria-expanded",
            String(!collapsed)
        );

        icon.textContent = collapsed ? "+" : "−";

        button.addEventListener("click", () => {

            const shouldCollapse = !content.hidden;

            content.hidden = shouldCollapse;

            button.setAttribute(
                "aria-expanded",
                String(!shouldCollapse)
            );

            icon.textContent = shouldCollapse ? "+" : "−";

            localStorage.setItem(
                key,
                shouldCollapse ? "collapsed" : "expanded"
            );

        });

    });

}


// ==========================================
// GENERATE ALL SECTIONS
// ==========================================

function renderSections() {

    const boxes = document.getElementById("boxes");

    boxes.replaceChildren();

    sections.forEach(section => {

        const box = createElement("section", "box");

        box.dataset.section = section.id;

        // Section header

        const header = createElement("button", "box-header");

        header.type = "button";

        const title = createElement(
            "span",
            "",
            section.title
        );

        const icon = createElement(
            "span",
            "collapse-icon",
            "−"
        );

        header.append(title, icon);

        // Section content

        const content = createElement("div", "box-content");

        if (section.type === "services") {

            createServiceSection(section, content);

        } else {

            const list = createElement("ul");

            section.items.forEach(item => {

                const li = createElement("li");

                // Arrays represent multiple links on one line

                if (Array.isArray(item)) {

                    item.forEach(bookmark => {
                        li.appendChild(createBookmark(bookmark));
                    });

                } else {

                    li.appendChild(createBookmark(item));

                }

                list.appendChild(li);

            });

            content.appendChild(list);

        }

        box.append(header, content);

        boxes.appendChild(box);

    });

    initializeCollapsibleBoxes();

}


// ==========================================
// STARTPAGE INITIALIZATION
// ==========================================

renderSections();
