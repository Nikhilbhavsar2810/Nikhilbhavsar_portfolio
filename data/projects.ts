export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  index: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  features: ProjectFeature[];
  responsibilities: string[];
  stack: string[];
  tags: string[];
  challenges: string[];
  impact: string;
  accent: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "abss-crm-books",
    name: "ABSS CRM & Books",
    category: "Business ERP / CRM / Accounting Platform",
    shortDescription:
      "A large-scale business management ecosystem combining CRM and accounting/bookkeeping capabilities.",
    overview:
      "ABSS CRM & Books is a large-scale business management ecosystem combining CRM and accounting/bookkeeping capabilities for businesses. The platform includes modules for managing customers, companies, products, invoices, transactions, accounting workflows, business settings, reporting and other operational processes.",
    problem:
      "Businesses needed a unified platform to manage their customer relationships, financial records and accounting workflows without juggling multiple disconnected tools.",
    solution:
      "A comprehensive full-stack platform integrating CRM, invoicing, transaction management, accounting workflows, and business reporting into a single cohesive ecosystem.",
    role: "Full-Stack Developer — developing and maintaining production features across both frontend and backend systems.",
    features: [
      { title: "CRM Module", description: "Customer and company management with relationship tracking" },
      { title: "Accounting Engine", description: "Invoicing, transactions, and bookkeeping workflows" },
      { title: "Business Settings", description: "Company-level data isolation and configuration" },
      { title: "Reporting", description: "Business analytics and operational reporting" },
      { title: "Role-Based Access", description: "Permission-based access control across modules" },
      { title: "Export System", description: "Data export functionality for business records" },
    ],
    responsibilities: [
      "Building and improving React-based business interfaces",
      "Developing backend APIs using Node.js and Express",
      "Implementing CRM and accounting workflows",
      "Developing reusable UI components",
      "Working with Redux Toolkit and application state",
      "Implementing form validation and business rules",
      "Building export functionality",
      "Working with pagination, filtering and sorting",
      "Implementing role-based permissions",
      "Integrating APIs and handling loading/error states",
      "Working with MongoDB and backend services",
      "Improving existing modules and fixing production issues",
      "Maintaining reusable and scalable frontend architecture",
    ],
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Ant Design", "Tailwind CSS", "REST APIs", "Git/GitHub"],
    tags: ["CRM", "Accounting", "Business Management", "ERP"],
    challenges: [
      "Managing complex business workflows across multiple interconnected modules",
      "Ensuring data consistency across CRM and accounting features",
      "Building scalable frontend architecture for a large application",
      "Implementing company-level data isolation for multi-tenant support",
    ],
    impact: "Production platform serving business users with integrated CRM and accounting capabilities, streamlining operations that previously required multiple disconnected tools.",
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    index: "02",
    slug: "munky",
    name: "Munky",
    category: "E-Commerce + POS + ERP Platform",
    shortDescription:
      "A business platform combining e-commerce, Point of Sale, and ERP capabilities into a connected ecosystem.",
    overview:
      "Munky is a business platform combining e-commerce, Point of Sale (POS), and ERP capabilities into a connected ecosystem. The system supports businesses across their online sales, physical retail operations and internal business management workflows.",
    problem:
      "Businesses operating across online and physical retail needed a unified system to manage e-commerce, POS operations, inventory, orders, and internal workflows without fragmented tooling.",
    solution:
      "An integrated platform connecting e-commerce storefront, POS terminal operations, inventory tracking, order management, and administrative workflows through a single application.",
    role: "Full-Stack Developer — building and improving web application features, APIs, dashboards and business workflows.",
    features: [
      { title: "E-Commerce Engine", description: "Online storefront with product browsing and checkout" },
      { title: "POS System", description: "Point of Sale operations for physical retail" },
      { title: "Inventory Management", description: "Real-time inventory tracking across channels" },
      { title: "Order Management", description: "Unified order processing for online and in-store" },
      { title: "Admin Dashboard", description: "Administrative controls and business reporting" },
      { title: "Sales Management", description: "Sales tracking and customer management" },
    ],
    responsibilities: [
      "Developing responsive React interfaces",
      "Building backend APIs with Node.js and Express",
      "Developing admin dashboards",
      "Implementing business workflows",
      "Working with product and inventory data",
      "Building e-commerce functionality",
      "Working with POS-related workflows",
      "API integration and form validation",
      "Role-based access control",
      "Reusable component architecture",
      "Production bug fixing and improvements",
    ],
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux", "REST APIs", "Tailwind CSS", "Ant Design", "Git/GitHub"],
    tags: ["E-Commerce", "POS", "ERP", "Inventory", "Orders", "Admin Dashboard"],
    challenges: [
      "Coordinating data flow between e-commerce, POS, and inventory systems",
      "Building interfaces for fundamentally different user workflows (online vs. retail)",
      "Managing complex state across interconnected business modules",
    ],
    impact: "Enterprise platform supporting businesses across online and physical retail channels with unified management capabilities.",
    accent: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    index: "03",
    slug: "vyaparveda",
    name: "VyaparVeda",
    category: "Education Management Platform",
    shortDescription:
      "A full-stack education management platform connecting students, colleges, faculty and administrators.",
    overview:
      "VyaparVeda is a full-stack education management platform designed to connect students, colleges, faculty and administrators through a centralized digital system. The platform includes role-based dashboards and workflows for different users.",
    problem:
      "Educational institutions needed a centralized platform to manage students, faculty, courses, seminars, payments, and administrative workflows across multiple user roles.",
    solution:
      "A role-based education management system with dedicated dashboards for students, colleges, faculty, and administrators — covering registration, course management, payments, and batch workflows.",
    role: "Full-Stack Developer — building both frontend and backend across multiple modules with role-based access.",
    features: [
      { title: "Role-Based Dashboards", description: "Dedicated interfaces for students, colleges, faculty, and admins" },
      { title: "Course Management", description: "Course creation, enrollment, and batch management" },
      { title: "Payment Integration", description: "Razorpay-powered payment processing for courses" },
      { title: "Seminar Management", description: "Seminar scheduling and participant management" },
      { title: "Student Profiles", description: "Comprehensive student profile and registration workflows" },
      { title: "Admin Controls", description: "Administrative dashboard with full system oversight" },
    ],
    responsibilities: [
      "Developing Next.js interfaces",
      "Building Express.js APIs",
      "Designing MongoDB data models",
      "Implementing REST APIs",
      "Building role-based dashboards",
      "Developing student profile workflows",
      "Implementing course and payment workflows",
      "Working with Razorpay payment integration",
      "Building seminar management",
      "Implementing authentication and authorization",
      "Creating reusable frontend components",
      "Developing admin functionality",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Razorpay", "REST APIs", "Tailwind CSS", "Git/GitHub"],
    tags: ["Student", "College", "Faculty", "Admin"],
    challenges: [
      "Designing a system accommodating four distinct user roles with different permissions",
      "Building complex course enrollment and payment workflows",
      "Implementing real-time data management across interconnected modules",
    ],
    impact: "Full-stack platform enabling educational institutions to manage their entire operational workflow through a single system.",
    accent: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  {
    index: "04",
    slug: "hollyhop",
    name: "HollyHop",
    category: "Corporate / Manufacturing Website",
    shortDescription:
      "A professional website for a toy manufacturing company showcasing products and brand identity.",
    overview:
      "HollyHop is a professional website created for a toy manufacturing company. The website focuses on presenting the company's products, manufacturing capabilities, brand identity and business information through a modern responsive interface.",
    problem:
      "A toy manufacturing company needed a modern, responsive website to present their products, manufacturing capabilities, and brand identity to potential clients and partners.",
    solution:
      "A visually polished, responsive company website built with Next.js, focusing on product showcasing, brand presentation, and optimized image delivery.",
    role: "Frontend Developer — building and improving the website experience, implementing responsive layouts and integrating visual content.",
    features: [
      { title: "Product Showcase", description: "Visual product gallery with optimized imagery" },
      { title: "Responsive Design", description: "Mobile-first responsive layouts across all pages" },
      { title: "Brand Presentation", description: "Company identity and manufacturing capabilities" },
      { title: "Image Optimization", description: "Optimized image presentation and loading" },
    ],
    responsibilities: [
      "Developing responsive website interfaces",
      "Building reusable React/Next.js components",
      "Implementing responsive layouts",
      "Working with company/product imagery",
      "Improving image presentation and dimensions",
      "Implementing smooth UI interactions",
      "Improving the overall visual presentation",
      "Maintaining the website for production deployment",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "JavaScript", "Git/GitHub"],
    tags: ["Manufacturing", "Brand Website", "Corporate", "Responsive"],
    challenges: [
      "Optimizing image-heavy content for fast loading without sacrificing visual quality",
      "Creating a design that communicates manufacturing credibility while remaining modern",
    ],
    impact: "Professional manufacturing brand website delivering a polished digital presence for the company's products and capabilities.",
    accent: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
  },
];
