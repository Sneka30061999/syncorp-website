// Single source of truth for the Products section and the product detail pages.
// Add a product here — cards, detail pages and contact form all update automatically.
//
//  icon         = card thumbnail
//  image        = hero screenshot on detail page
//  featureGroups = numbered sections on detail page (title + array of { label, text })
//  whoFor       = "Who It's For" checklist items
//  ctaText      = Get Started paragraph

export const products = [
  // ── 1. HMS ────────────────────────────────────────────────────────────────
  {
    id: "datalens",
    name: "Hotel Management System (HMS) with AI & n8n Automation",
    category: "Hospitality • Cloud SaaS",
    tag: "Hospitality",
    subtitle:
      "An all-in-one Cloud Hotel Management System and PMS with built-in AI guest concierges, automated WhatsApp contactless check-ins, dynamic pricing, and real-time POS sync.",
    short: "An all-in-one Cloud Hotel Management System and PMS with built-in AI guest concierges, automated WhatsApp contactless check-ins, dynamic pricing, and real-time...",
    icon:  "/syncorp-website/images/image-02.avif",
    image: "/syncorp-website/images/image-02.avif",
    purpose:
      "Our Hotel Management System (HMS) is a modern cloud Property Management System (PMS) engineered to eliminate high OTA commissions (15–25%) and automate front desk operations. Built with a native AI & n8n Automation Engine, it turns complex daily hotel tasks into frictionless, self-running workflows.",

    featureSectionTitle: "Built-in Automation Use Cases",
    featureGroups: [
      {
        title: "Contactless WhatsApp Check-In & Check-Out Engine",
        points: [
          { label: "The Workflow:",  text: "24 hours prior to arrival, an automated n8n webhook triggers a personalised WhatsApp message to the guest." },
          { label: "AI Document Verification:", text: "The guest uploads their government ID photo; vision AI extracts details and pre-fills the registration card." },
          { label: "Express Keycard / QR Pass:", text: "Guests skip 20-minute reception queues upon arrival and settle their unified bill via a 1-click WhatsApp payment link at checkout." },
        ],
      },
      {
        title: "Real-Time Multi-Channel OTA Sync (Zero Overbooking)",
        points: [
          { label: "The Workflow:", text: "When a room is booked on your direct website, our webhook router broadcasts the updated inventory across Booking.com, Airbnb, and Agoda in under 500 milliseconds." },
          { label: "Dynamic Pricing Automation:", text: "Automatically adjusts room rates based on local city events, seasonal occupancy rates, and competitor pricing trends." },
        ],
      },
      {
        title: "Unified Restaurant, Bar & Spa POS Automation",
        points: [
          { label: "", text: "Food & beverage tabs, spa treatments, and minibar expenses post directly to the guest's central room folio in real time, eliminating billing discrepancies at checkout." },
        ],
      },
      {
        title: "Housekeeping Task Routing & AI Room Inspection",
        points: [
          { label: "", text: "When a guest checks out, the room is automatically flagged as \"Dirty\" in the housekeeping mobile app. Once cleaned, the supervisor approves it, and front desk reservation calendars reflect \"Ready for Check-In\" instantly." },
        ],
      },
    ],

    whoFor: [
      "Boutique hotels, independent resorts, and vacation rental chains looking to eliminate OTA commissions.",
      "Business hotels needing fast contactless guest turnover and automated corporate billing.",
      "Serviced apartments requiring automated long-stay invoicing and utility tracking.",
    ],
    ctaText:
      "Experience the power of automated hospitality operations. Contact our Engineering Team to book a live demo or request early access.",
  },

  // ── 2. HRMS ───────────────────────────────────────────────────────────────
  {
    id: "securevault",
    name: "Multi-Tenant HRMS Platform",
    category: "Human Resources • Cloud SaaS",
    tag: "Enterprise & SaaS",
    subtitle:
      "A scalable Human Resource Management System (HRMS) designed for modern workforce management.",
    short: "A scalable Human Resource Management System (HRMS) designed for modern workforce management.",
    icon:  "/syncorp-website/images/image-3.avif",
    image: "/syncorp-website/images/image-3.avif",
    purpose:
      "Our Multi-Tenant HRMS Platform streamlines the entire employee lifecycle. From recruitment and onboarding to performance reviews and payroll, this SaaS platform empowers HR teams to focus on people rather than paperwork.",

    featureSectionTitle: "Key Features",
    featureGroups: [
      {
        title: "Core HR & Employee Self-Service",
        points: [
          { label: "", text: "Maintain a centralised directory of employee records. Give staff the ability to request time off, view pay slips, and update personal information through an intuitive self-service portal." },
        ],
      },
      {
        title: "Recruitment & Onboarding",
        points: [
          { label: "", text: "Automate job postings, applicant tracking, and digital document signing. Ensure new hires have a smooth, professional onboarding experience from day one." },
        ],
      },
      {
        title: "Performance & Attendance Tracking",
        points: [
          { label: "", text: "Set organisational goals, conduct 360-degree performance reviews, and integrate with biometric or IP-based attendance systems for accurate time tracking." },
        ],
      },
    ],

    whoFor: [
      "Growing startups and mid-market enterprises.",
      "HR agencies managing multiple client companies.",
      "Distributed teams requiring cloud-based HR operations.",
    ],
    ctaText:
      "Transform your HR department into a strategic asset. Schedule a demo of our HRMS platform today.",
  },

  // ── 3. ERP ────────────────────────────────────────────────────────────────
  {
    id: "enterprise",
    name: "Institutional ERP with Campus Automation Engine",
    category: "Enterprise • Cloud SaaS",
    tag: "Enterprise & SaaS",
    subtitle:
      "A cloud-native multi-tenant Institutional ERP system for universities, colleges, and school networks featuring automated fee collection, admissions CRM, Outcome-Based Education (OBE), and accreditation audit exports.",
    short: "A cloud-native multi-tenant Institutional ERP system for universities, colleges, and school networks featuring automated fee collection, admissions CRM, Outcome-...",
    icon:  "/syncorp-website/images/image-5.avif",
    image: "/syncorp-website/images/image-5.avif",
    purpose:
      "Our Institutional ERP System is a modular, multi-tenant cloud platform engineered to eliminate operational silos across educational institutions. Equipped with a native Campus Automation Engine, it streamlines admissions, fee reconciliation, academic grading, and statutory compliance on autopilot.",

    featureSectionTitle: "Built-in Automation Use Cases",
    featureGroups: [
      {
        title: "End-to-End Digital Admissions: CRM & Lead Routing",
        points: [
          { label: "The Workflow:", text: "Inquiries from college fairs, social media ads, and web portals land in our central admissions funnel." },
          { label: "Automated Routing & Scheduling:", text: "Leads are scored and allocated to counselors in real time. Prospects automatically receive WhatsApp invitations to book campus tours and virtual interviews." },
        ],
      },
      {
        title: "Automated Fee Schedule Reconciliation & WhatsApp Reminders",
        points: [
          { label: "The Workflow:", text: "The system calculates term fees, scholarship concessions, and transport charges automatically." },
          { label: "Instant Payment Links:", text: "Automated WhatsApp payment notices with integrated UPI and Net Banking links are sent to parents, reducing administrative fee collection backlogs by over 90%." },
        ],
      },
      {
        title: "Outcome-Based Education (OBE) & Accreditation Exports",
        points: [
          { label: "1-Click Audit Preparation:", text: "Course Outcomes (COs) and Program Outcomes (POs) are continuously tracked across exams and internal assignments. When NAAC, NIRF, or NBA audit inspections arrive, comprehensive compliance dossiers are generated in seconds without manual spreadsheet collection." },
        ],
      },
      {
        title: "Smart Transport Tracking & Hostel Gate-Pass Automation",
        points: [
          { label: "Transport Automation:", text: "Live GPS vehicle streams with automated geo-fenced WhatsApp arrival notifications sent to parents." },
          { label: "Hostel Security:", text: "Digital out-pass workflows with automated SMS/WhatsApp authorisation requests sent to parents' smartphones." },
        ],
      },
    ],

    whoFor: [
      "Premier engineering colleges, universities, and multi-campus school networks.",
      "Large autonomous educational trusts requiring multi-tenant branch oversight.",
      "Vocational institutes and polytechnics seeking complete academic digitisation.",
    ],
    ctaText:
      "Transform your campus operations with unified automation. Contact our Education Technology Team or explore our Fixed Milestone Development Pricing to modernise your institution.",
  },
];

export const getProduct = (id) => products.find((p) => p.id === id);
