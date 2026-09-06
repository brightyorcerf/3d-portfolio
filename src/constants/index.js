import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    twitter,
    typescript
} from "../assets/icons";

export const skills = [
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: express, name: "Express", type: "Backend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
];

export const experiences = [
    {
        title: "AI Infra Intern",
        company_name: "Digital Bullet Studios",
        icon: github,
        iconBg: "#accbe1",
        date: "May 2026 - Present",
        points: [
            "Shipped hands-on access to open-source text-to-image and text-to-video models by packaging them into hosted inference pipelines for Patreon subscribers, no local setup or GPU required.",
            "Built real-time Rive animation integrations synchronized to live generative model outputs for the subscriber-facing delivery interface.",
        ],
    },
    {
        title: "AI/ML Intern",
        company_name: "Walueo LLC",
        icon: github,
        iconBg: "#fbc3bc",
        date: "Dec 2025 - Jan 2026",
        points: [
            "Deployed a GPT-4o-mini ticket-triage pipeline (n8n, Node.js, AWS S3) returning structured category, sentiment, and urgency analysis in under 2 seconds, with a schema-validated fallback for malformed output.",
            "Designed content-normalized SHA-256 fingerprinting to dedupe near-identical tickets and a language-pattern urgency model that overrides self-reported priority flags, archiving every ticket to S3 for audit.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Sofac Technosys Pvt. Ltd.",
        icon: github,
        iconBg: "#b7e4c7",
        date: "Jun 2025 - Jul 2025",
        points: [
            "Built backend reporting tools for industrial SCADA systems in Node.js, SQL, and Python, generating numerical, trend, and alarm-summary reports from historical production databases.",
            "Delivered parameterised REST endpoints and optimised SQL routines that cut manual report turnaround from hours to seconds.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/brightyorcerf',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tejaansh-india',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/brightyorcerf',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Orbital Scene Preprocessor',
        description: 'INT8-quantized YOLOv8n edge engine that cuts satellite downlink payloads 1,484x at equal detection accuracy, with a RAG-grounded Gemini layer that narrates alerts without authority to touch the schedule.',
        link: 'https://github.com/brightyorcerf/orbital-preprocessor',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'Fleeting: Time-capsule iOS app',
        description: 'A native SwiftUI time-capsule app shipped solo to the App Store, with time-lock and paid-feature gates enforced in Postgres via Row-Level Security and SECURITY DEFINER RPCs.',
        link: 'https://apps.apple.com/in/app/fleeting-time-capsules/id6793420175',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Distributed Rate Limiting Middleware',
        description: 'A Node.js/Express Token Bucket rate limiter with atomic Redis Lua scripting for race-free throttling across horizontally scaled clusters, plus explicit fail-open/fail-closed behavior on Redis outages.',
        link: 'https://github.com/brightyorcerf/rate-limiter',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'BigOff: Gamified DSA platform',
        description: 'A full-stack Next.js and Django Channels platform for synchronous 1v1 algorithmic duels with live spectator modes, backed by a Celery/Redis code evaluation pipeline.',
        link: 'https://bigoff.vercel.app',
    },
];
