// Single source of truth for the Products section and the product detail pages.
// To add / change a product, edit this array only. Cards, detail pages and the contact form update automatically.
// Replace the sample products with the real ones provided by the trainer.
//   icon  = image on the home-page card      image = screenshot on the detail page
//   features / highlights use icon names from src/components/Icons.jsx

const commonWhy = [
  "Intuitive and easy-to-use interface",
  "Flexible for teams of all sizes",
  "Regular updates and new features",
  "Dedicated support",
];

export const products = [
  {
    id: "taskflow",
    name: "TaskFlow",
    category: "Productivity",
    subtitle: "Project & Task Management SaaS",
    tagline: "Plan. Track. Achieve.",
    intro:
      "TaskFlow helps teams stay organized, collaborate efficiently and get more done. Manage your projects, assign tasks and track progress, all in one place.",
    short: "A powerful solution to streamline your business operations and improve team collaboration.",
    icon: "/images/icon-taskflow.svg",
    image: "/images/taskflow-screen.svg",
    overviewTitle: "Simplify Project Management with TaskFlow",
    purpose:
      "TaskFlow is a modern project management tool designed to help teams plan, track and complete tasks with ease. Whether you are a small team or a growing business, TaskFlow gives you the clarity and control you need to stay on top.",
    highlights: [
      { icon: "bolt", title: "Boost Productivity", text: "Keep your team focused and aligned." },
      { icon: "users", title: "Better Collaboration", text: "Work together, share updates, get things done." },
      { icon: "shield", title: "Secure & Reliable", text: "Your data is always safe with us." },
    ],
    featuresTitle: "Everything You Need to Manage Your Projects",
    featuresIntro:
      "TaskFlow comes with powerful features to help you plan, organize and track your work, without the complexity.",
    features: [
      { icon: "task", title: "Task Management", text: "Create, assign and track tasks with ease." },
      { icon: "folder", title: "Project Organization", text: "Keep your projects structured and on schedule." },
      { icon: "progress", title: "Progress Tracking", text: "Monitor progress with visual reports." },
      { icon: "bell", title: "Real-time Updates", text: "Stay informed with instant notifications." },
      { icon: "cloud", title: "File Sharing", text: "Share files and resources seamlessly." },
      { icon: "mobile", title: "Mobile Friendly", text: "Access your work from any device." },
    ],
    whyTitle: "Built for Teams. Designed for Results.",
    whyText:
      "TaskFlow combines simplicity with powerful features to help your team work smarter, faster and more efficiently.",
    whyPoints: commonWhy,
    ctaText: "Experience the power of TaskFlow and take your team's productivity to the next level.",
  },
  {
    id: "datalens",
    name: "DataLens",
    category: "Analytics",
    subtitle: "Business Analytics SaaS",
    tagline: "See. Understand. Decide.",
    intro:
      "DataLens turns your spreadsheets and app data into clear dashboards, so your team can make confident decisions without a data expert.",
    short: "Gain valuable insights with real-time analytics and intelligent reporting.",
    icon: "/images/icon-datalens.svg",
    image: "/images/datalens-screen.svg",
    overviewTitle: "Understand Your Business with DataLens",
    purpose:
      "DataLens is an easy-to-use analytics tool that brings your numbers together in one place. Connect your data, pick a chart and share a live dashboard with your team in minutes.",
    highlights: [
      { icon: "chart", title: "Clear Insights", text: "Turn raw numbers into simple charts." },
      { icon: "users", title: "Shared Dashboards", text: "Everyone sees the same live numbers." },
      { icon: "shield", title: "Secure & Reliable", text: "Your data is always safe with us." },
    ],
    featuresTitle: "Everything You Need to Understand Your Data",
    featuresIntro:
      "DataLens comes with powerful features to help you collect, explore and share your data, without the complexity.",
    features: [
      { icon: "workflow", title: "Data Connections", text: "Connect spreadsheets and databases." },
      { icon: "chart", title: "Ready-made Dashboards", text: "Start fast with charts that are ready to use." },
      { icon: "bell", title: "Smart Alerts", text: "Get notified when key numbers change." },
      { icon: "mail", title: "Scheduled Reports", text: "Send reports to your inbox automatically." },
      { icon: "cloud", title: "Live Sharing", text: "Share a live link with anyone on your team." },
      { icon: "mobile", title: "Mobile Friendly", text: "View your dashboards on any device." },
    ],
    whyTitle: "Built for Teams. Designed for Results.",
    whyText:
      "DataLens combines simplicity with powerful features to help your team understand its numbers faster and act on them with confidence.",
    whyPoints: commonWhy,
    ctaText: "Experience the power of DataLens and start making decisions backed by clear data.",
  },
  {
    id: "securevault",
    name: "SecureVault",
    category: "Security",
    subtitle: "File Security & Compliance SaaS",
    tagline: "Store. Protect. Control.",
    intro:
      "SecureVault keeps your company files and records safe, and shows you who accessed what and when.",
    short: "Secure your data and business with advanced security and compliance features.",
    icon: "/images/icon-securevault.svg",
    image: "/images/securevault-screen.svg",
    overviewTitle: "Protect Your Business with SecureVault",
    purpose:
      "SecureVault is a secure place for important business files. You decide who can see and change each file, and every action is recorded so you stay in control and ready for audits.",
    highlights: [
      { icon: "lock", title: "Strong Protection", text: "Files are encrypted at all times." },
      { icon: "users", title: "Controlled Access", text: "Give each person only what they need." },
      { icon: "shield", title: "Secure & Reliable", text: "Your data is always safe with us." },
    ],
    featuresTitle: "Everything You Need to Keep Your Data Safe",
    featuresIntro:
      "SecureVault comes with powerful features to help you protect, manage and audit your files, without the complexity.",
    features: [
      { icon: "lock", title: "Encrypted Storage", text: "Keep every file protected." },
      { icon: "users", title: "Role-based Access", text: "Control who can view and edit." },
      { icon: "progress", title: "Activity Log", text: "See every change in one place." },
      { icon: "cloud", title: "Automatic Backups", text: "Never lose an important file." },
      { icon: "bell", title: "Security Alerts", text: "Get told about unusual activity." },
      { icon: "mobile", title: "Mobile Friendly", text: "Access your files from any device." },
    ],
    whyTitle: "Built for Teams. Designed for Results.",
    whyText:
      "SecureVault combines simplicity with strong security so your team can share files safely and stay compliant without extra effort.",
    whyPoints: commonWhy,
    ctaText: "Experience the peace of mind of SecureVault and keep your business data safe.",
  },
  {
    id: "autosync",
    name: "AutoSync",
    category: "Automation",
    subtitle: "Workflow Automation SaaS",
    tagline: "Connect. Automate. Save Time.",
    intro:
      "AutoSync connects the tools you already use and handles repeat tasks for you, so your team can focus on real work.",
    short: "Automate your workflows and save time with smart automation tools.",
    icon: "/images/icon-autosync.svg",
    image: "/images/autosync-screen.svg",
    overviewTitle: "Automate Your Daily Work with AutoSync",
    purpose:
      "AutoSync is a no-code automation tool. Set simple rules, connect your apps and let routine work run on its own, with a clear record of everything that ran.",
    highlights: [
      { icon: "clock", title: "Save Time", text: "Stop repeating the same manual steps." },
      { icon: "workflow", title: "Connected Apps", text: "Make your tools work together." },
      { icon: "shield", title: "Secure & Reliable", text: "Your data is always safe with us." },
    ],
    featuresTitle: "Everything You Need to Automate Your Work",
    featuresIntro:
      "AutoSync comes with powerful features to help you build, run and monitor automations, without the complexity.",
    features: [
      { icon: "task", title: "Simple Rules", text: "Build automations with plain rules." },
      { icon: "workflow", title: "App Connections", text: "Connect your favourite business apps." },
      { icon: "clock", title: "Scheduled Runs", text: "Run tasks at the times you choose." },
      { icon: "bell", title: "Failure Alerts", text: "Know right away if something fails." },
      { icon: "progress", title: "Run History", text: "See what ran and when." },
      { icon: "mobile", title: "Mobile Friendly", text: "Manage automations from any device." },
    ],
    whyTitle: "Built for Teams. Designed for Results.",
    whyText:
      "AutoSync combines simplicity with powerful automation to help your team work smarter and spend time on what matters.",
    whyPoints: commonWhy,
    ctaText: "Experience the power of AutoSync and give your team hours back every week.",
  },
];

export const getProduct = (id) => products.find((p) => p.id === id);
