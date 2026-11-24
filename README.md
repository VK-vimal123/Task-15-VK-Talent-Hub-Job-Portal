# VK Talent Hub

A single-page job portal interface built with semantic HTML5, CSS3, and Vanilla JavaScript. Designed with a navy blue, white, and teal visual system across desktop, tablet, and mobile layouts without external frameworks or build tools.

## Features

- **Keyword & Location Search:** Live filtering across job titles, companies, departments, summaries, skills, locations, and work modes, paired with quick-filter tags and clear-input buttons.
- **Multi-Facet Filtering & Sorting:** Filter by Work Mode (`Remote`, `Hybrid`, `On-site`), Job Type (`Full-time`, `Contract`, `Internship`), Experience Level (`Entry Level`, `Mid-Senior`, `Lead / Principal`), Department (`Engineering`, `Design`, `Product`, `Data`, `Marketing & Ops`), and Minimum Annual CTC (`LPA`). Sort by Most Recent, Highest Salary, Lowest Salary, or Company (`A–Z`).
- **Active Chips & Empty States:** Removable filter chips, dynamic result counts, and contextual empty states with one-click filter resets.
- **Modals & Job Posting:** Inspect full role descriptions, responsibilities, requirements, and skills in a details modal, submit applications via an application modal, or publish new roles through the **Post a Job** modal.
- **Persistent State (`localStorage`):** Preserves saved jobs, submitted applications, and user-published listings across sessions with live badge counters and view switching (`Find Jobs`, `Saved Jobs`, `Applied`).
- **Responsive Navigation:** Includes a mobile hamburger menu and a mobile filter drawer.

## Project Structure

```text
vk-talent-hub/
├── index.html   # Page layout, search bar, filter sidebar, listing container, and modals
├── style.css    # Navy, white, and teal styling, responsive grid rules, and modal/toast styles
└── script.js    # Sample job data, search/filter/sort logic, modal handlers, and localStorage sync