export const portfolioSections = [
  {
    name: "featured",
    title: "Featured Projects",
    items: [
      {
        id: "scenario-planning",
        title: "Scenario Planning Platform",
        type: "featured",
        subtitle: "Real-time planning across complex enterprise datasets",
        description:
          "Design and delivery of a real-time scenario planning system enabling enterprise teams to model capacity, allocation, and timelines across complex datasets. Built cross-repo frontend architecture and coordinated with backend reporting systems to unlock flexible, interactive planning workflows.",
        tags: ["React", "TypeScript", "System Design", "Data Visualization", "Frontend Architecture", "Cross-Team Collaboration"],
        bg: "#0c1b33",
        image: require("../assets/rmsp-scenario.webp"),
        colSpan: 7,
      },
      {
        id: "capacity-view",
        title: "Capacity & Allocation Insights",
        type: "featured",
        subtitle: "High-performance data visualization at scale",
        description:
          "Developed a high-performance data interface for analyzing resource allocation across projects, roles, and disciplines. Implemented advanced filtering and drill-down capabilities while optimizing rendering for large, data-heavy views.",
        tags: ["React", "Performance Optimization", "Large Data Rendering", "Derived State", "UI Architecture", "Data Modeling"],
        bg: "#0d2b1d",
        image: require("../assets/cv.webp"),
        colSpan: 5,
      },
      {
        id: "copy-and-post",
        title: "Social Content Platform",
        type: "featured",
        subtitle: "Co founded a full-stack system for automated content publishing",
        description:
          "Built a full-stack content generation and scheduling platform supporting automated publishing across multiple social channels. Designed a serverless scheduling system to reliably process and distribute high volumes of scheduled content.",
        tags: ["React", "GraphQL", "AWS Lambda", "Aurora (RDS)", "Serverless Architecture", "System Design"],
        bg: "#1e0533",
        image: require("../assets/copypost.png"),
        colSpan: 5,
      },
      {
        id: "auth-system",
        title: "Authentication & Login System",
        type: "featured",
        subtitle: "Scalable and secure login experience",
        description:
          "Rebuilt the Smartsheet login experience with a focus on scalability, security, and maintainability. Established reusable UI patterns and improved developer workflows while aligning closely with backend authentication systems.",
        tags: ["React", "TypeScript", "Frontend Architecture", "Security", "UX Systems", "Design Systems"],
        bg: "#2d0a0a",
        colSpan: 7,
        image: require("../assets/login.png"),
      },
    ],
  },
  {
    name: "secondary",
    title: "Systems & Projects",
    items: [
      {
        id: "flexera-integration",
        title: "Legacy Platform Integration",
        type: "system",
        subtitle: "Integrating legacy systems under tight deadlines",
        description:
          "Integrated a legacy enterprise application into a modern React platform under tight delivery timelines. Pivoted from a failing approach to a seamless embedded solution, accelerating delivery while maintaining a cohesive user experience.",
        tags: ["React", "System Integration", "Architecture Decisions", "Problem Solving", "Legacy Systems", "Delivery Execution"],
        bg: "#0a1f2e",
        colSpan: 4,
        image: require("../assets/flexera.avif"),
        caseStudy: true
      },
      {
        id: "localization",
        title: "Global Localization Pipeline",
        type: "system",
        subtitle: "Scaling a product for international markets",
        description:
          "Led the effort to scale a legacy product for global use by building a custom string extraction and localization pipeline. Unified multiple frontend systems into a consistent localization workflow.",
        tags: ["Localization", "Build Systems", "Automation", "Legacy Codebases", "Tooling", "System Design"],
        bg: "#0f2b1e",
        colSpan: 4,
        image: require("../assets/loc.png"),
      },
      {
        id: "ai-research",
        title: "AI Scenario Generation Research",
        type: "experimental",
        subtitle: "Exploring intelligent planning systems",
        description:
          "Explored AI-driven approaches to scenario generation by evaluating LLM-based and deterministic models. Documented tradeoffs and informed long-term architectural direction for intelligent planning features.",
        tags: ["AI", "LLMs", "Research", "Prototyping", "System Design", "Product Strategy"],
        bg: "#2a1800",
        colSpan: 4,
        image: require("../assets/ai.webp"),
      },
      {
        "id": "component-library",
        "title": "Component Library & Design System",
        "type": "system",
        "subtitle": "Reusable UI system built from spec to docs",
        "description": "Designed and built reusable UI components from UX specifications for Flexera's internal component library, consumed across multiple product lines. Went beyond implementation to rebuild the developer documentation from scratch — improving discoverability, usage consistency, and adoption across teams. Treated the library as a product: spec-driven component design, thorough API documentation, and a developer experience layer that made the right patterns the easy ones to reach for.",
        "tags": ["React", "TypeScript", "Design Systems", "Storybook", "Component Architecture", "Developer Experience", "Documentation", "UX Specs"],
        "bg": "#1b1b2e",
        image: require("../assets/flexera-comp-lib.png"),
      }
    ],
  },
  {
    name: "playground",
    title: "Engineering Playground",
    items: [
      // {
      //   id: "order-book",
      //   title: "Real-Time Order Book Simulation",
      //   type: "playground",
      //   subtitle: "High-frequency UI with streaming updates",
      //   description:
      //     "Built a trading-style interface that streams and renders live buy/sell data with dynamic updates. Focused on performance using memoization and efficient state management.",
      //   tags: ["React", "Real-Time Data", "Performance Optimization", "WebSockets", "Memoization", "Financial UI"],
      //   bg: "#0f1b33",
      //   colSpan: 8,
      // },
      // {
      //   id: "throttle",
      //   title: "Throttle Utility Implementation",
      //   type: "algorithm",
      //   subtitle: "Controlling execution frequency in UI systems",
      //   description:
      //     "Implemented a throttle utility from scratch to manage high-frequency events and improve performance in real-time applications.",
      //   tags: ["JavaScript", "Performance", "Algorithms", "Event Handling"],
      //   bg: "#1c1c1c",
      //   colSpan: 4,
      // },
    ],
  },
];

// legacy flat export kept for any remaining references
export const portfolioItems = [
  {
    id: "davidcate-design",
    title: "davidcate.design",
    subtitle: "Personal Portfolio",
    description:
      "This site. A React + Framer Motion portfolio featuring interactive Vanta.js WebGL backgrounds, live customization controls, and animated page transitions.",
    tags: ["React", "Framer Motion", "Three.js", "Styled Components"],
    bg: "#0f3460",
    url: "https://davidcate.design",
  },
  {
    id: "flexera",
    title: "Flexera",
    subtitle: "Enterprise SaaS",
    description:
      "Front-end engineering on Flexera's software asset management platform. Built and maintained React component libraries consumed across multiple product lines.",
    tags: ["React", "TypeScript", "Jest", "Storybook"],
    bg: "#1b4332",
    url: "https://www.flexera.com",
  },
  {
    id: "medium",
    title: "Writing",
    subtitle: "Technical Articles",
    description:
      "Published articles on React patterns, performance optimisation, and front-end architecture on Medium / GitConnected.",
    tags: ["React", "JavaScript", "CSS"],
    bg: "#2d0057",
    url: "https://levelup.gitconnected.com/@david_cate",
  },
  {
    id: "github",
    title: "Open Source",
    subtitle: "GitHub",
    description:
      "Personal projects, experiments, and open-source contributions. Includes tooling utilities, animation playgrounds, and component libraries.",
    tags: ["JavaScript", "TypeScript", "React"],
    bg: "#3d0000",
    url: "https://github.com/catedm",
  },
  {
    id: "vanta-controls",
    title: "Vanta Controls",
    subtitle: "Interactive Demo",
    description:
      "Live customization panel built on top of Vanta.js, allowing real-time tuning of WebGL effect parameters including colors, speed, and geometry — with color slider pickers and spring-animated UI.",
    tags: ["React", "Three.js", "WebGL", "Framer Motion"],
    bg: "#0d2137",
    url: "https://github.com/catedm",
  },
  {
    id: "element360",
    title: "Element-360",
    subtitle: "Digital Marketing",
    description:
      "Internet marketing programming and campaign tooling for a digital marketing agency. Built internal dashboards, landing page generators, and A/B testing infrastructure.",
    tags: ["JavaScript", "jQuery", "HTML", "CSS"],
    bg: "#1a1a2e",
    url: "https://element-360.com",
  },
  {
    id: "appnet",
    title: "Appnet",
    subtitle: "Web Design & Development",
    description:
      "Early-career web design and front-end development for a full-service digital agency. Delivered responsive websites and brand identity work for regional clients.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    bg: "#3b1f0a",
    url: "https://appnet.com",
  },
  {
    id: "animation-lab",
    title: "Animation Lab",
    subtitle: "Experiments",
    description:
      "A personal playground for testing CSS and JS animation techniques — scroll-driven animations, canvas experiments, SVG morphing, and physics-based UI interactions.",
    tags: ["CSS", "Canvas", "GSAP", "Framer Motion"],
    bg: "#1c3a2f",
    url: "https://github.com/catedm",
  },
];
