(() => {
  "use strict";

  const STORAGE_KEYS = {
    SAVED: "vk_talent_hub_saved_jobs_v1",
    APPLIED: "vk_talent_hub_applied_jobs_v1",
    CUSTOM_JOBS: "vk_talent_hub_custom_jobs_v1"
  };

  const DEFAULT_JOBS = [
    {
      id: "job-101",
      title: "Senior Frontend Engineer",
      company: "Zoho Labs",
      initials: "ZL",
      location: "Chennai, Tamil Nadu",
      workMode: "Hybrid",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Engineering",
      minSalary: 18,
      maxSalary: 26,
      postedDaysAgo: 1,
      skills: ["JavaScript", "HTML5", "CSS3", "Performance", "Accessibility"],
      summary: "Architect responsive, high-throughput web interfaces for enterprise productivity applications used by millions globally.",
      responsibilities: [
        "Build modular, accessible UI components with clean semantic HTML, modern CSS, and vanilla or framework-agnostic JS.",
        "Collaborate closely with product designers to translate complex workflows into intuitive user interfaces.",
        "Profile and optimize Core Web Vitals, bundle sizes, and runtime rendering speed."
      ],
      requirements: [
        "4+ years of hands-on frontend development experience.",
        "Deep command of browser APIs, CSS layout systems, and state management patterns.",
        "Strong track record of shipping accessible, cross-browser web applications."
      ]
    },
    {
      id: "job-102",
      title: "Product Designer (Design Systems)",
      company: "Razorpay",
      initials: "RP",
      location: "Bengaluru, Karnataka",
      workMode: "Hybrid",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Design",
      minSalary: 16,
      maxSalary: 24,
      postedDaysAgo: 2,
      skills: ["Figma", "Design Systems", "WCAG", "Prototyping", "User Research"],
      summary: "Evolve our multi-product design system to ensure visual consistency and frictionless checkout experiences across merchant tools.",
      responsibilities: [
        "Maintain and document reusable UI tokens, components, and interaction guidelines in Figma.",
        "Partner with frontend engineers to audit component parity and accessibility compliance.",
        "Run usability testing sessions with merchants and iterate on feedback."
      ],
      requirements: [
        "3+ years designing digital products and component libraries.",
        "Portfolio demonstrating structured thinking, typography, and interaction craft.",
        "Working knowledge of HTML/CSS constraints."
      ]
    },
    {
      id: "job-103",
      title: "Backend Distributed Systems Engineer",
      company: "Freshworks",
      initials: "FW",
      location: "Chennai, Tamil Nadu",
      workMode: "On-site",
      jobType: "Full-time",
      experience: "Lead / Principal",
      department: "Engineering",
      minSalary: 32,
      maxSalary: 44,
      postedDaysAgo: 1,
      skills: ["Go", "PostgreSQL", "Kafka", "Kubernetes", "Microservices"],
      summary: "Lead the design and scaling of multi-tenant messaging pipelines handling tens of thousands of concurrent events per second.",
      responsibilities: [
        "Architect fault-tolerant services with strict latency SLAs and zero-downtime deployments.",
        "Mentor senior and mid-level engineers through RFC reviews and architecture pairing.",
        "Drive observability, capacity planning, and incident root-cause analysis."
      ],
      requirements: [
        "7+ years building high-scale backend systems.",
        "Proficiency in Go or Java, relational databases, and event-driven brokers.",
        "Experience operating production workloads on AWS or GCP."
      ]
    },
    {
      id: "job-104",
      title: "Associate Product Manager",
      company: "Swiggy",
      initials: "SW",
      location: "Bengaluru, Karnataka",
      workMode: "Hybrid",
      jobType: "Full-time",
      experience: "Entry Level",
      department: "Product",
      minSalary: 14,
      maxSalary: 19,
      postedDaysAgo: 3,
      skills: ["Product Strategy", "SQL", "A/B Testing", "User Funnels", "Roadmapping"],
      summary: "Own consumer discovery and reorder journeys, turning cohort insights into measurable improvements in retention and order frequency.",
      responsibilities: [
        "Define clear product requirement documents and prioritize sprint backlogs with engineering.",
        "Analyze funnel drop-offs using SQL and experimentation dashboards.",
        "Coordinate rollouts across design, operations, and customer support teams."
      ],
      requirements: [
        "1–2 years in product management, business analysis, or software engineering.",
        "Strong analytical fluency and clear written communication.",
        "Customer-first mindset with attention to edge cases."
      ]
    },
    {
      id: "job-105",
      title: "Data Analyst — Growth & Retention",
      company: "Zerodha",
      initials: "ZR",
      location: "Bengaluru, Karnataka",
      workMode: "Remote",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Data",
      minSalary: 15,
      maxSalary: 22,
      postedDaysAgo: 4,
      skills: ["SQL", "Python", "Data Visualization", "Statistics", "ETL"],
      summary: "Uncover behavioral patterns across retail investor journeys to guide educational initiatives and platform reliability decisions.",
      responsibilities: [
        "Write clean, reproducible SQL and Python pipelines for cohort and churn analysis.",
        "Build self-serve executive dashboards tracking activation and platform health.",
        "Partner with product teams to design clean, unbiased feature evaluations."
      ],
      requirements: [
        "3+ years in quantitative data analysis.",
        "Strong command of SQL, Python (pandas), and statistical inference.",
        "Ability to communicate complex findings concisely without jargon."
      ]
    },
    {
      id: "job-106",
      title: "Full Stack Web Developer",
      company: "Chargebee",
      initials: "CB",
      location: "Remote, India",
      workMode: "Remote",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Engineering",
      minSalary: 20,
      maxSalary: 28,
      postedDaysAgo: 2,
      skills: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs", "CSS3"],
      summary: "Build subscription billing workflows and self-serve customer portals for fast-growing SaaS businesses worldwide.",
      responsibilities: [
        "Develop end-to-end features across RESTful APIs and responsive client interfaces.",
        "Write automated unit and integration tests to safeguard financial calculations.",
        "Participate in code reviews and continuous delivery improvements."
      ],
      requirements: [
        "3–5 years of full-stack web engineering experience.",
        "Solid understanding of relational data modeling, security best practices, and HTTP.",
        "Comfortable working asynchronously in a remote-first team."
      ]
    },
    {
      id: "job-107",
      title: "Frontend Engineering Intern",
      company: "Postman",
      initials: "PM",
      location: "Bengaluru, Karnataka",
      workMode: "Hybrid",
      jobType: "Internship",
      experience: "Entry Level",
      department: "Engineering",
      minSalary: 6,
      maxSalary: 8,
      postedDaysAgo: 1,
      skills: ["HTML5", "CSS3", "JavaScript", "Git", "REST APIs"],
      summary: "Work alongside core web engineers to craft interactive API documentation views and developer onboarding flows.",
      responsibilities: [
        "Implement clean UI components and responsive layouts from Figma specifications.",
        "Fix UI bugs and improve keyboard navigation across web views.",
        "Document learnings and present your project at the end of the 6-month internship."
      ],
      requirements: [
        "Final-year student or recent graduate with strong fundamentals in HTML, CSS, and JavaScript.",
        "Familiarity with Git version control and browser developer tools.",
        "Links to personal projects or open-source contributions."
      ]
    },
    {
      id: "job-108",
      title: "Technical Product Marketing Manager",
      company: "BrowserStack",
      initials: "BS",
      location: "Mumbai, Maharashtra",
      workMode: "Hybrid",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Marketing & Ops",
      minSalary: 19,
      maxSalary: 27,
      postedDaysAgo: 5,
      skills: ["Developer Marketing", "Positioning", "Content Strategy", "SaaS", "Analytics"],
      summary: "Translate complex automated testing capabilities into clear narratives, launches, and adoption playbooks for engineering leaders.",
      responsibilities: [
        "Craft product positioning, launch messaging, and technical comparison guides.",
        "Enable sales and solutions teams with battlecards and live product walkthroughs.",
        "Measure campaign impact on self-serve signups and enterprise pipeline."
      ],
      requirements: [
        "4+ years in B2B SaaS product marketing, ideally targeting developers or QA teams.",
        "Exceptional writing clarity and ability to grasp technical architectures.",
        "Data-driven approach to go-to-market execution."
      ]
    },
    {
      id: "job-109",
      title: "Principal UX Researcher",
      company: "Flipkart",
      initials: "FK",
      location: "Bengaluru, Karnataka",
      workMode: "On-site",
      jobType: "Full-time",
      experience: "Lead / Principal",
      department: "Design",
      minSalary: 30,
      maxSalary: 40,
      postedDaysAgo: 6,
      skills: ["Qualitative Research", "Usability Testing", "Field Studies", "Synthesis", "Strategy"],
      summary: "Lead foundational research across Tier-2 and Tier-3 Indian shoppers to shape vernacular and voice-assisted commerce.",
      responsibilities: [
        "Plan and execute multi-city field studies and longitudinal diary research.",
        "Synthesize behavioral insights into actionable product bets for leadership.",
        "Coach designers and PMs on rigorous evaluative research methods."
      ],
      requirements: [
        "7+ years leading UX research for consumer-scale products.",
        "Fluency in mixed-methods research and strong storytelling skills.",
        "Willingness to travel occasionally for on-ground customer immersion."
      ]
    },
    {
      id: "job-110",
      title: "Machine Learning Engineer — Search",
      company: "Meesho",
      initials: "MS",
      location: "Remote, India",
      workMode: "Remote",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Data",
      minSalary: 24,
      maxSalary: 34,
      postedDaysAgo: 3,
      skills: ["Python", "PyTorch", "Information Retrieval", "Ranking", "Spark"],
      summary: "Improve semantic search relevance and visual product discovery across hundreds of millions of catalog listings.",
      responsibilities: [
        "Train and deploy low-latency neural ranking and query understanding models.",
        "Design offline evaluation benchmarks and monitor online A/B metrics.",
        "Optimize inference pipelines for cost and p99 latency efficiency."
      ],
      requirements: [
        "3+ years applying machine learning to search, recommendations, or NLP.",
        "Strong Python skills and production experience with PyTorch or TensorFlow.",
        "Solid grounding in data structures and distributed data processing."
      ]
    },
    {
      id: "job-111",
      title: "UI/UX Design Consultant",
      company: "Kovai Systems",
      initials: "KS",
      location: "Coimbatore, Tamil Nadu",
      workMode: "Hybrid",
      jobType: "Contract",
      experience: "Mid-Senior",
      department: "Design",
      minSalary: 10,
      maxSalary: 15,
      postedDaysAgo: 4,
      skills: ["Figma", "Wireframing", "Information Architecture", "Design Audit", "Responsive UI"],
      summary: "Redesign core reporting dashboards and onboarding flows for an enterprise cloud integration suite over a 6-month engagement.",
      responsibilities: [
        "Audit existing screens for visual hierarchy, density, and usability bottlenecks.",
        "Deliver interactive Figma prototypes and developer-ready redlines.",
        "Conduct weekly design critiques with engineering leads."
      ],
      requirements: [
        "3+ years designing B2B web applications.",
        "Strong portfolio showcasing complex tables, forms, and navigation architecture.",
        "Available for 40 hours/week during the contract duration."
      ]
    },
    {
      id: "job-112",
      title: "Cloud Security & DevOps Engineer",
      company: "Paytm Cloud",
      initials: "PC",
      location: "Noida, Uttar Pradesh",
      workMode: "On-site",
      jobType: "Full-time",
      experience: "Mid-Senior",
      department: "Engineering",
      minSalary: 18,
      maxSalary: 25,
      postedDaysAgo: 5,
      skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Linux"],
      summary: "Automate infrastructure provisioning and harden container runtime security across regulated financial environments.",
      responsibilities: [
        "Manage multi-account AWS infrastructure using modular Terraform code.",
        "Enforce automated vulnerability scanning and secrets rotation in CI/CD pipelines.",
        "Support high-availability Kubernetes clusters and disaster recovery drills."
      ],
      requirements: [
        "3–6 years in DevOps, SRE, or Cloud Infrastructure roles.",
        "Hands-on expertise with Terraform, Kubernetes, and Linux networking.",
        "Familiarity with ISO 27001 or PCI-DSS compliance controls."
      ]
    },
    {
      id: "job-113",
      title: "Operations & Talent Coordinator",
      company: "VK Digital Ventures",
      initials: "VD",
      location: "Hyderabad, Telangana",
      workMode: "Hybrid",
      jobType: "Full-time",
      experience: "Entry Level",
      department: "Marketing & Ops",
      minSalary: 7,
      maxSalary: 10,
      postedDaysAgo: 2,
      skills: ["Hiring Ops", "Communication", "Spreadsheets", "Onboarding", "Scheduling"],
      summary: "Coordinate structured interview loops, candidate communications, and smooth day-one onboarding across growing product squads.",
      responsibilities: [
        "Manage interview scheduling across candidates and hiring panels with zero friction.",
        "Maintain accurate applicant tracking records and weekly hiring pipeline reports.",
        "Coordinate equipment setup and induction sessions for new joiners."
      ],
      requirements: [
        "0–2 years in people operations, recruitment coordination, or business operations.",
        "High organizational rigor and warm, clear written communication.",
        "Proficiency with spreadsheets and modern workspace tools."
      ]
    },
    {
      id: "job-114",
      title: "Lead Product Manager — Core Platform",
      company: "Juspay",
      initials: "JP",
      location: "Bengaluru, Karnataka",
      workMode: "On-site",
      jobType: "Full-time",
      experience: "Lead / Principal",
      department: "Product",
      minSalary: 34,
      maxSalary: 46,
      postedDaysAgo: 7,
      skills: ["Payments", "API Products", "System Thinking", "Enterprise SaaS", "Leadership"],
      summary: "Shape the next generation of high-reliability payment orchestration APIs powering India's largest digital merchants.",
      responsibilities: [
        "Define multi-quarter product vision for developer APIs and payment routing intelligence.",
        "Work directly with enterprise CTOs and banking partners to solve checkout friction.",
        "Mentor a pod of product managers and drive rigorous metric ownership."
      ],
      requirements: [
        "7+ years of product management experience, preferably in fintech or developer platforms.",
        "Deep empathy for API ergonomics, reliability, and transaction success rates.",
        "Proven ability to lead cross-functional teams without formal authority."
      ]
    }
  ];

  // State
  const state = {
    jobs: [],
    savedIds: new Set(),
    appliedIds: new Set(),
    view: "all", // 'all' | 'saved' | 'applied'
    keyword: "",
    location: "",
    workMode: [],
    jobType: [],
    experience: [],
    department: [],
    minSalary: 0,
    sortBy: "newest",
    activeModalJobId: null,
    applyingJobId: null
  };

  // DOM References
  const dom = {
    hamburgerBtn: document.getElementById("hamburgerBtn"),
    mainNav: document.getElementById("mainNav"),
    brandLogo: document.getElementById("brandLogo"),
    navLinks: document.querySelectorAll(".nav-link[data-view]"),
    footerViewLinks: document.querySelectorAll("[data-footer-view]"),
    savedCountBadge: document.getElementById("savedCountBadge"),
    appliedCountBadge: document.getElementById("appliedCountBadge"),
    searchForm: document.getElementById("searchForm"),
    keywordInput: document.getElementById("keywordInput"),
    locationInput: document.getElementById("locationInput"),
    clearKeywordBtn: document.getElementById("clearKeywordBtn"),
    clearLocationBtn: document.getElementById("clearLocationBtn"),
    quickTags: document.getElementById("quickTags"),
    mobileFilterToggle: document.getElementById("mobileFilterToggle"),
    activeFilterCountBadge: document.getElementById("activeFilterCountBadge"),
    filtersSidebar: document.getElementById("filtersSidebar"),
    applyMobileFiltersBtn: document.getElementById("applyMobileFiltersBtn"),
    clearAllFiltersBtn: document.getElementById("clearAllFiltersBtn"),
    filterCheckboxes: document.querySelectorAll('.filters-sidebar input[type="checkbox"]'),
    minSalarySelect: document.getElementById("minSalarySelect"),
    viewTitle: document.getElementById("viewTitle"),
    resultsCountText: document.getElementById("resultsCountText"),
    sortSelect: document.getElementById("sortSelect"),
    activeChips: document.getElementById("activeChips"),
    jobsList: document.getElementById("jobsList"),
    emptyState: document.getElementById("emptyState"),
    emptyStateTitle: document.getElementById("emptyStateTitle"),
    emptyStateDesc: document.getElementById("emptyStateDesc"),
    emptyResetBtn: document.getElementById("emptyResetBtn"),
    // Job Details Modal
    jobModalBackdrop: document.getElementById("jobModalBackdrop"),
    closeJobModalBtn: document.getElementById("closeJobModalBtn"),
    modalCompanyAvatar: document.getElementById("modalCompanyAvatar"),
    modalJobTitle: document.getElementById("modalJobTitle"),
    modalCompanyMeta: document.getElementById("modalCompanyMeta"),
    modalHighlights: document.getElementById("modalHighlights"),
    modalDescription: document.getElementById("modalDescription"),
    modalResponsibilities: document.getElementById("modalResponsibilities"),
    modalRequirements: document.getElementById("modalRequirements"),
    modalSkills: document.getElementById("modalSkills"),
    modalSaveBtn: document.getElementById("modalSaveBtn"),
    modalSaveBtnText: document.getElementById("modalSaveBtnText"),
    modalApplyBtn: document.getElementById("modalApplyBtn"),
    // Apply Modal
    applyModalBackdrop: document.getElementById("applyModalBackdrop"),
    closeApplyModalBtn: document.getElementById("closeApplyModalBtn"),
    cancelApplyBtn: document.getElementById("cancelApplyBtn"),
    applyModalTitle: document.getElementById("applyModalTitle"),
    applyModalSubtitle: document.getElementById("applyModalSubtitle"),
    applyForm: document.getElementById("applyForm"),
    applicantName: document.getElementById("applicantName"),
    applicantEmail: document.getElementById("applicantEmail"),
    applicantPhone: document.getElementById("applicantPhone"),
    applicantPortfolio: document.getElementById("applicantPortfolio"),
    applicantNote: document.getElementById("applicantNote"),
    // Post Job Modal
    openPostJobBtn: document.getElementById("openPostJobBtn"),
    footerPostJobBtn: document.getElementById("footerPostJobBtn"),
    postJobModalBackdrop: document.getElementById("postJobModalBackdrop"),
    closePostJobModalBtn: document.getElementById("closePostJobModalBtn"),
    cancelPostJobBtn: document.getElementById("cancelPostJobBtn"),
    postJobForm: document.getElementById("postJobForm"),
    // Toast
    toast: document.getElementById("toast")
  };

  let toastTimer = null;

  function showToast(message) {
    dom.toast.textContent = message;
    dom.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      dom.toast.classList.remove("show");
    }, 2800);
  }

  function loadStorage() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED) || "[]");
      const applied = JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLIED) || "[]");
      const customJobs = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_JOBS) || "[]");
      state.savedIds = new Set(Array.isArray(saved) ? saved : []);
      state.appliedIds = new Set(Array.isArray(applied) ? applied : []);
      state.jobs = [...(Array.isArray(customJobs) ? customJobs : []), ...DEFAULT_JOBS];
    } catch {
      state.savedIds = new Set();
      state.appliedIds = new Set();
      state.jobs = [...DEFAULT_JOBS];
    }
  }

  function persistSaved() {
    localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify([...state.savedIds]));
  }

  function persistApplied() {
    localStorage.setItem(STORAGE_KEYS.APPLIED, JSON.stringify([...state.appliedIds]));
  }

  function persistCustomJobs() {
    const defaultIds = new Set(DEFAULT_JOBS.map((j) => j.id));
    const customOnly = state.jobs.filter((j) => !defaultIds.has(j.id));
    localStorage.setItem(STORAGE_KEYS.CUSTOM_JOBS, JSON.stringify(customOnly));
  }

  function formatPostedTime(days) {
    if (days === 0) return "Posted today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  }

  function formatSalary(min, max) {
    return `₹${min}–${max} LPA`;
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function updateNavBadges() {
    dom.savedCountBadge.textContent = String(state.savedIds.size);
    dom.appliedCountBadge.textContent = String(state.appliedIds.size);
  }

  function getFilteredJobs() {
    const kw = state.keyword.trim().toLowerCase();
    const loc = state.location.trim().toLowerCase();

    const filtered = state.jobs.filter((job) => {
      if (state.view === "saved" && !state.savedIds.has(job.id)) return false;
      if (state.view === "applied" && !state.appliedIds.has(job.id)) return false;

      if (kw) {
        const haystack = [
          job.title,
          job.company,
          job.department,
          job.summary,
          ...job.skills
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(kw)) return false;
      }

      if (loc) {
        const locHaystack = `${job.location} ${job.workMode}`.toLowerCase();
        if (!locHaystack.includes(loc)) return false;
      }

      if (state.workMode.length > 0 && !state.workMode.includes(job.workMode)) {
        return false;
      }

      if (state.jobType.length > 0 && !state.jobType.includes(job.jobType)) {
        return false;
      }

      if (state.experience.length > 0 && !state.experience.includes(job.experience)) {
        return false;
      }

      if (state.department.length > 0 && !state.department.includes(job.department)) {
        return false;
      }

      if (state.minSalary > 0 && job.maxSalary < state.minSalary) {
        return false;
      }

      return true;
    });

    filtered.sort((a, b) => {
      if (state.sortBy === "salary-high") return b.maxSalary - a.maxSalary;
      if (state.sortBy === "salary-low") return a.minSalary - b.minSalary;
      if (state.sortBy === "company") return a.company.localeCompare(b.company);
      return a.postedDaysAgo - b.postedDaysAgo;
    });

    return filtered;
  }

  function getActiveFilterCount() {
    let count =
      state.workMode.length +
      state.jobType.length +
      state.experience.length +
      state.department.length;
    if (state.minSalary > 0) count += 1;
    if (state.keyword.trim()) count += 1;
    if (state.location.trim()) count += 1;
    return count;
  }

  function renderActiveChips() {
    const chips = [];

    if (state.keyword.trim()) {
      chips.push({ type: "keyword", value: state.keyword.trim(), label: `Keyword: "${state.keyword.trim()}"` });
    }
    if (state.location.trim()) {
      chips.push({ type: "location", value: state.location.trim(), label: `Location: "${state.location.trim()}"` });
    }
    state.workMode.forEach((v) => chips.push({ type: "workMode", value: v, label: v }));
    state.jobType.forEach((v) => chips.push({ type: "jobType", value: v, label: v }));
    state.experience.forEach((v) => chips.push({ type: "experience", value: v, label: v }));
    state.department.forEach((v) => chips.push({ type: "department", value: v, label: v }));
    if (state.minSalary > 0) {
      chips.push({ type: "minSalary", value: String(state.minSalary), label: `₹${state.minSalary}+ LPA` });
    }

    const filterCount = getActiveFilterCount();
    if (filterCount > 0) {
      dom.activeFilterCountBadge.hidden = false;
      dom.activeFilterCountBadge.textContent = String(filterCount);
    } else {
      dom.activeFilterCountBadge.hidden = true;
    }

    if (chips.length === 0) {
      dom.activeChips.innerHTML = "";
      return;
    }

    dom.activeChips.innerHTML = chips
      .map(
        (chip) => `
        <span class="filter-chip">
          ${escapeHTML(chip.label)}
          <button type="button" data-remove-type="${escapeHTML(chip.type)}" data-remove-value="${escapeHTML(chip.value)}" aria-label="Remove ${escapeHTML(chip.label)}">&times;</button>
        </span>
      `
      )
      .join("");
  }

  function renderJobs() {
    const filteredJobs = getFilteredJobs();

    if (state.view === "all") {
      dom.viewTitle.textContent = "All Open Roles";
    } else if (state.view === "saved") {
      dom.viewTitle.textContent = "Saved Jobs";
    } else {
      dom.viewTitle.textContent = "Applied Roles";
    }

    const total = filteredJobs.length;
    dom.resultsCountText.textContent = `Showing ${total} ${total === 1 ? "job" : "jobs"}`;

    renderActiveChips();

    if (total === 0) {
      dom.jobsList.innerHTML = "";
      dom.emptyState.hidden = false;

      if (state.view === "saved" && state.savedIds.size === 0) {
        dom.emptyStateTitle.textContent = "No saved jobs yet";
        dom.emptyStateDesc.textContent = "Bookmark roles you want to revisit later and they will stay saved right here.";
        dom.emptyResetBtn.textContent = "Browse Open Jobs";
      } else if (state.view === "applied" && state.appliedIds.size === 0) {
        dom.emptyStateTitle.textContent = "No applications submitted yet";
        dom.emptyStateDesc.textContent = "Roles you apply to will be tracked here for easy reference.";
        dom.emptyResetBtn.textContent = "Explore Jobs";
      } else {
        dom.emptyStateTitle.textContent = "No matching jobs found";
        dom.emptyStateDesc.textContent = "Try adjusting your search keywords, location, or removing active filters.";
        dom.emptyResetBtn.textContent = "Reset All Filters";
      }
      return;
    }

    dom.emptyState.hidden = true;

    dom.jobsList.innerHTML = filteredJobs
      .map((job) => {
        const isSaved = state.savedIds.has(job.id);
        const isApplied = state.appliedIds.has(job.id);

        return `
        <article class="job-card" data-job-id="${escapeHTML(job.id)}">
          <div class="job-card-top">
            <div class="job-identity">
              <div class="company-avatar" aria-hidden="true">${escapeHTML(job.initials)}</div>
              <div>
                <button type="button" class="job-title-btn" data-action="view-details" data-id="${escapeHTML(job.id)}">
                  ${escapeHTML(job.title)}
                </button>
                <p class="company-line">${escapeHTML(job.company)} &bull; ${escapeHTML(job.department)}</p>
              </div>
            </div>

            <button
              type="button"
              class="save-icon-btn ${isSaved ? "saved" : ""}"
              data-action="toggle-save"
              data-id="${escapeHTML(job.id)}"
              aria-label="${isSaved ? "Remove from saved jobs" : "Save job"}"
              title="${isSaved ? "Saved" : "Save job"}"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <div class="job-meta-row">
            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              ${escapeHTML(job.location)} (${escapeHTML(job.workMode)})
            </span>

            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              ${escapeHTML(job.jobType)} &bull; ${escapeHTML(job.experience)}
            </span>

            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              ${escapeHTML(formatSalary(job.minSalary, job.maxSalary))}
            </span>

            <span class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${escapeHTML(formatPostedTime(job.postedDaysAgo))}
            </span>
          </div>

          <p class="job-summary">${escapeHTML(job.summary)}</p>

          <div class="job-card-bottom">
            <div class="skill-tags">
              ${job.skills.map((skill) => `<span class="skill-tag">${escapeHTML(skill)}</span>`).join("")}
            </div>

            <div class="card-actions">
              <button type="button" class="btn btn-outline" data-action="view-details" data-id="${escapeHTML(job.id)}">
                View Details
              </button>
              <button
                type="button"
                class="btn btn-primary ${isApplied ? "applied-state" : ""}"
                data-action="apply-job"
                data-id="${escapeHTML(job.id)}"
              >
                ${isApplied ? "Applied ✓" : "Apply Now"}
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function toggleSaveJob(jobId) {
    const job = state.jobs.find((j) => j.id === jobId);
    if (!job) return;

    if (state.savedIds.has(jobId)) {
      state.savedIds.delete(jobId);
      showToast(`Removed "${job.title}" from saved jobs`);
    } else {
      state.savedIds.add(jobId);
      showToast(`Saved "${job.title}"`);
    }

    persistSaved();
    updateNavBadges();
    renderJobs();

    if (state.activeModalJobId === jobId) {
      updateModalSaveButton(jobId);
    }
  }

  function updateModalSaveButton(jobId) {
    const isSaved = state.savedIds.has(jobId);
    dom.modalSaveBtn.classList.toggle("saved-state", isSaved);
    dom.modalSaveBtnText.textContent = isSaved ? "Saved" : "Save Job";
  }

  function updateModalApplyButton(jobId) {
    const isApplied = state.appliedIds.has(jobId);
    dom.modalApplyBtn.classList.toggle("applied-state", isApplied);
    dom.modalApplyBtn.textContent = isApplied ? "Applied ✓" : "Apply Now";
  }

  function openJobDetailsModal(jobId) {
    const job = state.jobs.find((j) => j.id === jobId);
    if (!job) return;

    state.activeModalJobId = jobId;
    dom.modalCompanyAvatar.textContent = job.initials;
    dom.modalJobTitle.textContent = job.title;
    dom.modalCompanyMeta.textContent = `${job.company} • ${job.location} (${job.workMode})`;

    dom.modalHighlights.innerHTML = `
      <div class="highlight-box">
        <span>Compensation</span>
        <strong>${escapeHTML(formatSalary(job.minSalary, job.maxSalary))}</strong>
      </div>
      <div class="highlight-box">
        <span>Experience</span>
        <strong>${escapeHTML(job.experience)}</strong>
      </div>
      <div class="highlight-box">
        <span>Employment Type</span>
        <strong>${escapeHTML(job.jobType)}</strong>
      </div>
      <div class="highlight-box">
        <span>Department</span>
        <strong>${escapeHTML(job.department)} • ${escapeHTML(formatPostedTime(job.postedDaysAgo))}</strong>
      </div>
    `;

    dom.modalDescription.textContent = job.summary;
    dom.modalResponsibilities.innerHTML = job.responsibilities
      .map((item) => `<li>${escapeHTML(item)}</li>`)
      .join("");
    dom.modalRequirements.innerHTML = job.requirements
      .map((item) => `<li>${escapeHTML(item)}</li>`)
      .join("");
    dom.modalSkills.innerHTML = job.skills
      .map((skill) => `<span class="skill-tag">${escapeHTML(skill)}</span>`)
      .join("");

    updateModalSaveButton(jobId);
    updateModalApplyButton(jobId);

    dom.jobModalBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
    dom.closeJobModalBtn.focus();
  }

  function closeJobDetailsModal() {
    dom.jobModalBackdrop.hidden = true;
    state.activeModalJobId = null;
    document.body.style.overflow = "";
  }

  function openApplyModal(jobId) {
    const job = state.jobs.find((j) => j.id === jobId);
    if (!job) return;

    if (state.appliedIds.has(jobId)) {
      showToast(`You have already applied to ${job.title} at ${job.company}`);
      return;
    }

    state.applyingJobId = jobId;
    dom.applyModalTitle.textContent = `Apply: ${job.title}`;
    dom.applyModalSubtitle.textContent = `${job.company} • ${job.location}`;
    dom.applyForm.reset();
    dom.applyModalBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
    dom.applicantName.focus();
  }

  function closeApplyModal() {
    dom.applyModalBackdrop.hidden = true;
    state.applyingJobId = null;
    if (dom.jobModalBackdrop.hidden) {
      document.body.style.overflow = "";
    }
  }

  function openPostJobModal() {
    dom.postJobForm.reset();
    dom.postJobModalBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("newJobTitle").focus();
  }

  function closePostJobModal() {
    dom.postJobModalBackdrop.hidden = true;
    document.body.style.overflow = "";
  }

  function syncClearInputButtons() {
    dom.clearKeywordBtn.hidden = dom.keywordInput.value.length === 0;
    dom.clearLocationBtn.hidden = dom.locationInput.value.length === 0;
  }

  function setView(newView) {
    state.view = newView;
    dom.navLinks.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === newView);
    });
    closeMobileNav();
    renderJobs();
  }

  function resetAllFilters() {
    state.keyword = "";
    state.location = "";
    state.workMode = [];
    state.jobType = [];
    state.experience = [];
    state.department = [];
    state.minSalary = 0;

    dom.keywordInput.value = "";
    dom.locationInput.value = "";
    dom.minSalarySelect.value = "0";
    dom.filterCheckboxes.forEach((cb) => {
      cb.checked = false;
    });

    if ((state.view === "saved" && state.savedIds.size === 0) || (state.view === "applied" && state.appliedIds.size === 0)) {
      setView("all");
      return;
    }

    syncClearInputButtons();
    renderJobs();
  }

  function closeMobileNav() {
    dom.mainNav.classList.remove("open");
    dom.hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  function bindEvents() {
    // Mobile Hamburger
    dom.hamburgerBtn.addEventListener("click", () => {
      const isOpen = dom.mainNav.classList.toggle("open");
      dom.hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Brand click
    dom.brandLogo.addEventListener("click", (e) => {
      e.preventDefault();
      setView("all");
    });

    // View Switching
    dom.navLinks.forEach((btn) => {
      btn.addEventListener("click", () => setView(btn.dataset.view));
    });

    dom.footerViewLinks.forEach((btn) => {
      btn.addEventListener("click", () => {
        setView(btn.dataset.footerView);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    // Search Form & Live Input
    dom.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      state.keyword = dom.keywordInput.value;
      state.location = dom.locationInput.value;
      renderJobs();
    });

    dom.keywordInput.addEventListener("input", () => {
      state.keyword = dom.keywordInput.value;
      syncClearInputButtons();
      renderJobs();
    });

    dom.locationInput.addEventListener("input", () => {
      state.location = dom.locationInput.value;
      syncClearInputButtons();
      renderJobs();
    });

    dom.clearKeywordBtn.addEventListener("click", () => {
      dom.keywordInput.value = "";
      state.keyword = "";
      syncClearInputButtons();
      dom.keywordInput.focus();
      renderJobs();
    });

    dom.clearLocationBtn.addEventListener("click", () => {
      dom.locationInput.value = "";
      state.location = "";
      syncClearInputButtons();
      dom.locationInput.focus();
      renderJobs();
    });

    // Quick Search Pills
    dom.quickTags.addEventListener("click", (e) => {
      const pill = e.target.closest(".tag-pill");
      if (!pill) return;
      if (pill.dataset.keyword) {
        dom.keywordInput.value = pill.dataset.keyword;
        state.keyword = pill.dataset.keyword;
      }
      if (pill.dataset.location) {
        dom.locationInput.value = pill.dataset.location;
        state.location = pill.dataset.location;
      }
      syncClearInputButtons();
      if (state.view !== "all") {
        setView("all");
      } else {
        renderJobs();
      }
    });

    // Sidebar Checkboxes & Salary
    dom.filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const group = checkbox.name;
        const checkedValues = Array.from(
          document.querySelectorAll(`input[name="${group}"]:checked`)
        ).map((el) => el.value);
        state[group] = checkedValues;
        renderJobs();
      });
    });

    dom.minSalarySelect.addEventListener("change", () => {
      state.minSalary = Number(dom.minSalarySelect.value) || 0;
      renderJobs();
    });

    dom.clearAllFiltersBtn.addEventListener("click", resetAllFilters);
    dom.emptyResetBtn.addEventListener("click", resetAllFilters);

    // Mobile Filter Drawer
    dom.mobileFilterToggle.addEventListener("click", () => {
      dom.filtersSidebar.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    dom.applyMobileFiltersBtn.addEventListener("click", () => {
      dom.filtersSidebar.classList.remove("open");
      document.body.style.overflow = "";
    });

    // Active Chips Removal
    dom.activeChips.addEventListener("click", (e) => {
      const removeBtn = e.target.closest("button[data-remove-type]");
      if (!removeBtn) return;

      const { removeType, removeValue } = removeBtn.dataset;
      if (removeType === "keyword") {
        state.keyword = "";
        dom.keywordInput.value = "";
        syncClearInputButtons();
      } else if (removeType === "location") {
        state.location = "";
        dom.locationInput.value = "";
        syncClearInputButtons();
      } else if (removeType === "minSalary") {
        state.minSalary = 0;
        dom.minSalarySelect.value = "0";
      } else if (Array.isArray(state[removeType])) {
        state[removeType] = state[removeType].filter((item) => item !== removeValue);
        const cb = document.querySelector(`input[name="${removeType}"][value="${CSS.escape(removeValue)}"]`);
        if (cb) cb.checked = false;
      }

      renderJobs();
    });

    // Sort Select
    dom.sortSelect.addEventListener("change", () => {
      state.sortBy = dom.sortSelect.value;
      renderJobs();
    });

    // Job Cards Event Delegation
    dom.jobsList.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      if (!actionEl) return;

      const { action, id } = actionEl.dataset;
      if (action === "toggle-save") {
        toggleSaveJob(id);
      } else if (action === "view-details") {
        openJobDetailsModal(id);
      } else if (action === "apply-job") {
        openApplyModal(id);
      }
    });

    // Job Details Modal Actions
    dom.closeJobModalBtn.addEventListener("click", closeJobDetailsModal);
    dom.jobModalBackdrop.addEventListener("click", (e) => {
      if (e.target === dom.jobModalBackdrop) closeJobDetailsModal();
    });

    dom.modalSaveBtn.addEventListener("click", () => {
      if (state.activeModalJobId) {
        toggleSaveJob(state.activeModalJobId);
      }
    });

    dom.modalApplyBtn.addEventListener("click", () => {
      if (state.activeModalJobId) {
        openApplyModal(state.activeModalJobId);
      }
    });

    // Apply Modal Actions
    dom.closeApplyModalBtn.addEventListener("click", closeApplyModal);
    dom.cancelApplyBtn.addEventListener("click", closeApplyModal);
    dom.applyModalBackdrop.addEventListener("click", (e) => {
      if (e.target === dom.applyModalBackdrop) closeApplyModal();
    });

    dom.applyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!state.applyingJobId) return;

      const job = state.jobs.find((j) => j.id === state.applyingJobId);
      state.appliedIds.add(state.applyingJobId);
      persistApplied();
      updateNavBadges();

      const completedId = state.applyingJobId;
      closeApplyModal();

      if (state.activeModalJobId === completedId) {
        updateModalApplyButton(completedId);
      }

      renderJobs();
      if (job) {
        showToast(`Application submitted for ${job.title} at ${job.company}`);
      }
    });

    // Post Job Modal Actions
    dom.openPostJobBtn.addEventListener("click", () => {
      closeMobileNav();
      openPostJobModal();
    });
    dom.footerPostJobBtn.addEventListener("click", openPostJobModal);
    dom.closePostJobModalBtn.addEventListener("click", closePostJobModal);
    dom.cancelPostJobBtn.addEventListener("click", closePostJobModal);
    dom.postJobModalBackdrop.addEventListener("click", (e) => {
      if (e.target === dom.postJobModalBackdrop) closePostJobModal();
    });

    dom.postJobForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("newJobTitle").value.trim();
      const company = document.getElementById("newJobCompany").value.trim();
      const location = document.getElementById("newJobLocation").value.trim();
      const workMode = document.getElementById("newJobWorkMode").value;
      const jobType = document.getElementById("newJobType").value;
      const experience = document.getElementById("newJobExperience").value;
      const department = document.getElementById("newJobDepartment").value;
      const minSal = Number(document.getElementById("newJobMinSalary").value) || 8;
      const maxSal = Math.max(minSal, Number(document.getElementById("newJobMaxSalary").value) || minSal);
      const rawSkills = document.getElementById("newJobSkills").value;
      const summary = document.getElementById("newJobSummary").value.trim();

      const skills = rawSkills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const words = company.split(/\s+/).filter(Boolean);
      const initials =
        words.length >= 2
          ? (words[0][0] + words[1][0]).toUpperCase()
          : company.slice(0, 2).toUpperCase();

      const newJob = {
        id: `job-${Date.now()}`,
        title,
        company,
        initials,
        location,
        workMode,
        jobType,
        experience,
        department,
        minSalary: minSal,
        maxSalary: maxSal,
        postedDaysAgo: 0,
        skills: skills.length > 0 ? skills : ["General"],
        summary,
        responsibilities: [
          `Drive execution and ownership within the ${department} team at ${company}.`,
          "Collaborate across engineering, product, and operations stakeholders to deliver measurable outcomes.",
          "Maintain high standards of quality, documentation, and peer review."
        ],
        requirements: [
          `Demonstrated track record suited for a ${experience} ${title} role.`,
          `Hands-on proficiency with ${skills.slice(0, 3).join(", ") || "relevant domain tools"}.`,
          "Strong problem-solving mindset and clear communication."
        ]
      };

      state.jobs.unshift(newJob);
      persistCustomJobs();
      closePostJobModal();
      setView("all");
      showToast(`Published "${title}" at ${company}`);
    });

    // Global Escape Key for Modals & Drawers
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;

      if (!dom.applyModalBackdrop.hidden) {
        closeApplyModal();
      } else if (!dom.jobModalBackdrop.hidden) {
        closeJobDetailsModal();
      } else if (!dom.postJobModalBackdrop.hidden) {
        closePostJobModal();
      } else if (dom.filtersSidebar.classList.contains("open")) {
        dom.filtersSidebar.classList.remove("open");
        document.body.style.overflow = "";
      } else if (dom.mainNav.classList.contains("open")) {
        closeMobileNav();
      }
    });
  }

  // Initialize
  loadStorage();
  updateNavBadges();
  syncClearInputButtons();
  bindEvents();
  renderJobs();
})();