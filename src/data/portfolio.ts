export const personalInfo = {
  fullName: 'Saurabh Dubey',
  title: 'AI Automation Engineer',
  subtitle: 'Python, Django, ETL & Deployment',
  location: 'Mumbai, India',
  phone: '+91-9503371603',
  email: 'dubeysaurabhrajendra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saurabhrajendradubey',
  github: 'https://github.com/SaurabhRajendra7584',
  brandTagline: 'Building Reliable Systems. Automating Complex Workflows.',
  heroHeadline: 'Engineering Intelligent Systems Through Python & Automation.',
  heroDescription:
    'I design, build, test, and deploy production-ready business applications and data automation systems. From Django-powered platforms and ETL pipelines to cloud data engineering and workflow automation, I focus on turning complex business processes into reliable, scalable solutions.',
  heroSupporting:
    'An Automation Engineer working across Python, Django, ETL pipelines, and production deployment. I build practical business systems that replace repetitive manual processes with reliable, data-driven applications.',
  aboutBio: [
    "I am an Automation Engineer with hands-on experience designing, testing, and deploying production business systems using Python and Django.",
    'At Ravasco Transmission & Packing Pvt. Ltd., I work as the primary technical lead for an ETL-driven costing platform that replaced a legacy Excel-based workflow containing over 1,300 rows. I also built and maintain a separate internal platform for automating technical data sheets.',
    'My experience includes backend development, ETL pipelines, data validation, REST APIs, authentication systems, CI/CD-based deployment, and production debugging.',
    'Alongside my professional work, I have developed data engineering projects using Microsoft Azure, AWS, and Google BigQuery.',
    'I enjoy solving practical business problems through clean engineering, reliable automation, and efficient data systems.',
  ],
  aboutHighlights: [
    'Production Django Applications',
    'ETL & Data Engineering',
    'Backend Development',
    'CI/CD & Deployment',
    'Data Validation & Testing',
    'Cloud Data Pipelines',
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories = [
  {
    label: 'A',
    title: 'Backend & APIs',
    skills: ['Python', 'Django', 'Django REST Framework', 'REST API Design', 'JWT Authentication', 'Role-Based Access Control', 'Two-Factor Authentication (OTP)'],
  },
  {
    label: 'B',
    title: 'ETL & Data Engineering',
    skills: ['ETL / ELT Pipelines', 'Pandas', 'PySpark', 'CSV Processing', 'Data Cleaning', 'Schema Mapping', 'Data Validation', 'SQL', 'PostgreSQL', 'SQLite', 'Database Migrations', 'dbt', 'Medallion Architecture'],
  },
  {
    label: 'C',
    title: 'Testing & Quality Assurance',
    skills: ['Oracle-Based Reconciliation Testing', 'Regression Validation', 'Defect Tracking', 'Root-Cause Analysis', 'Field-by-Field Data Validation'],
  },
  {
    label: 'D',
    title: 'Deployment & CI/CD',
    skills: ['Render', 'GitHub-to-Render Auto Deployment', 'Gunicorn', 'WhiteNoise', 'Build Pipelines', 'Environment-Based Configuration', 'Scheduled Jobs', 'Git', 'GitHub', 'Linux'],
  },
  {
    label: 'E',
    title: 'Cloud Technologies',
    skills: ['Azure Data Factory', 'ADLS Gen2 (Azure Data Lake Storage Gen2)', 'Databricks', 'Synapse Analytics', 'AWS S3', 'AWS Redshift', 'AWS QuickSight', 'BigQuery', 'Google Cloud Storage'],
  },
  {
    label: 'F',
    title: 'Reporting & Other Tools',
    skills: ['PDF Generation', 'WeasyPrint', 'Jinja2', 'Power BI', 'Microsoft Excel', 'JIRA', 'Confluence', 'JavaScript'],
  },
];

export const experiences = [
  {
    title: 'AI Automation Engineer',
    company: 'Ravasco Transmission & Packing Pvt. Ltd.',
    team: 'AI Implementation Team',
    location: 'Mumbai, India',
    period: 'May 2026 – Present',
    description:
      'Working as a technical contributor and primary technical lead for internal automation platforms, focusing on business process digitization, ETL-driven applications, deployment, and production reliability.',
    achievements: [
      {
        heading: 'Primary Technical Lead',
        body: 'Primary technical lead for the CDS (Costing & Datasheet) platform. Also built and maintain the TDS Automation App, a separate internal platform for technical data sheets.',
      },
      {
        heading: 'Deployment & CI/CD',
        body: 'Deploy Django applications through a GitHub-to-Render auto-deployment pipeline. The build process includes dependency installation, static collection, database migrations, and cache setup. Applications are served using Gunicorn, with secrets maintained through environment variables.',
      },
      {
        heading: 'Cost Optimization',
        body: 'Reviewed Render memory and CPU utilization and right-sized hosting from the Pro plan to the Starter plan, reducing recurring hosting costs without performance impact.',
      },
      {
        heading: 'Production Support',
        body: 'Debugged a token-refresh incident caused by a library upgrade resolving to the wrong user model. Fixed an authentication bypass on a cached endpoint. Made revision snapshots atomic using database transactions.',
      },
    ],
  },
  {
    title: 'Business Analyst Intern',
    company: 'GRT Global Logistics Pvt. Ltd.',
    team: '',
    location: '',
    period: 'November 2025 – January 2026',
    description: '',
    achievements: [
      { heading: '', body: 'Converted business requirements into functional specifications, user stories, and acceptance criteria.' },
      { heading: '', body: 'Supported reporting and analytics work in Agile sprints.' },
      { heading: '', body: 'Worked with JIRA, Confluence, and Moqup.' },
      { heading: '', body: 'Standardized documentation templates and KPI tracking metrics.' },
      { heading: '', body: 'Improved consistency of reporting across teams.' },
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Cognifyz Technologies',
    team: '',
    location: '',
    period: 'June 2025 – August 2025',
    description: '',
    achievements: [
      { heading: '', body: 'Performed end-to-end exploratory analysis on a dataset containing over 50,000 records.' },
      { heading: '', body: 'Examined statistical relationships between ratings, votes, pricing, and service features.' },
      { heading: '', body: 'Derived business insights from structured data analysis.' },
    ],
  },
];

export const featuredProjects = [
  {
    id: 'cds-platform',
    title: 'CDS – ETL-Driven Costing & Quotation Platform',
    organization: 'Ravasco Transmission & Packing Pvt. Ltd.',
    status: 'Live',
    technologies: ['Python', 'Django', 'SQLite', 'SQL', 'JavaScript', 'Render'],
    overview:
      'An ETL-driven costing and quotation platform designed to replace a legacy Excel-based workflow with a structured, master-driven application.',
    caseStudy: {
      businessProblem: 'A legacy Excel-based costing workflow with over 1,300 rows was error-prone, difficult to maintain, and lacked structured data validation. The business needed a reliable, auditable system to replace manual calculations.',
      legacyLimitations: 'The legacy workbook contained inconsistent grade values, silent-zero fallbacks on missing lookups, and unit mismatches that went undetected. There was no validation chain or audit trail.',
      architecture: 'A Django-based web application with a master-driven database design, replacing the flat Excel register with normalized master tables for grades, models, and pricing parameters.',
      etlPipeline: 'Designed a four-stage Parse → Map → Validate → Feed pipeline to load a legacy Excel register containing over 1 million rows and 200+ columns into master-driven database tables.',
      validation: 'Used the legacy workbook as an oracle and validated a 26-step calculation chain field by field, achieving a 100% match across 2,000+ quotations for the M-24 grade.',
      challenges: [
        'Normalized 55 inconsistent grade values into canonical master keys.',
        'Identified and corrected a null lookup that silently zeroed weights.',
        'Identified and corrected a per-kg versus per-metre unit mismatch that inflated prices by approximately 376%.',
        'Replaced silent-zero fallbacks with strict validation stops.',
      ],
      outcomes: [
        '100% oracle match across 2,000+ quotations for the M-24 grade.',
        'Eliminated silent data quality defects that had been inflating costs.',
        'Designed an email-based ingestion agent as a single entry point for incoming models, feeding the CDS data format.',
      ],
    },
    githubUrl: '',
  },
  {
    id: 'tds-automation',
    title: 'TDS Automation App – Technical Data Sheet Platform',
    organization: 'Ravasco Transmission & Packing Pvt. Ltd.',
    status: 'Live Internal Application',
    technologies: ['Python', 'Django 5.2', 'Django REST Framework', 'PostgreSQL', 'JWT', 'WeasyPrint', 'Jinja2', 'Render'],
    overview:
      'A dedicated platform for generating conveyor-belt technical data sheets and Quality Assurance Plan PDFs according to applicable IS, ISO, DIN, and ASTM standards.',
    caseStudy: {
      businessProblem: 'Technical data sheets and QAP documents were being generated manually, which was time-consuming and inconsistent across product lines.',
      legacyLimitations: 'Manual document generation lacked version control, role-based access, and standardized formatting across standards (IS, ISO, DIN, ASTM).',
      architecture: 'A Django 5.2 + Django REST Framework application with PostgreSQL, JWT authentication, role-based access control, and WeasyPrint/Jinja2 for PDF generation.',
      etlPipeline: 'Asynchronous batch PDF export pipeline for generating multiple technical data sheets concurrently.',
      validation: 'Audited the codebase and fixed 10 defects including non-atomic writes, out-of-order asynchronous responses, and unbounded database queries.',
      challenges: [
        'Implemented device-aware OTP login for secure access.',
        'Role-based access control for different user types.',
        'Asynchronous batch PDF export for performance.',
      ],
      outcomes: [
        'Automated technical data sheet generation.',
        'QAP PDF generation according to international standards.',
        'Fixed 10 production defects including non-atomic writes and unbounded queries.',
        'Production deployment with PostgreSQL integration.',
      ],
    },
    githubUrl: '',
  },
  {
    id: 'cds-tds-integration',
    title: 'CDS + TDS Platform Integration',
    organization: 'Ravasco Transmission & Packing Pvt. Ltd.',
    status: 'Ongoing',
    technologies: ['Python', 'Django', 'SQLite', 'PostgreSQL', 'Authentication Systems', 'Database Integration'],
    overview:
      'An ongoing integration initiative connecting two independently developed internal platforms into a unified system.',
    caseStudy: {
      businessProblem: 'Two independently developed internal platforms (CDS and TDS) needed to be connected into a unified system to streamline operations.',
      legacyLimitations: 'The platforms used different authentication models, different databases (SQLite and PostgreSQL), and had incompatible data layers.',
      architecture: 'Planning a unified application architecture that reconciles both platforms\' data models and authentication systems.',
      etlPipeline: 'Mapping and reconciling data layer differences between SQLite and PostgreSQL-based systems.',
      validation: 'Reconciling authentication model differences to enable unified access.',
      challenges: [
        'Mapping authentication model differences.',
        'Integrating SQLite and PostgreSQL-based systems.',
        'Reconciling data layer differences.',
      ],
      outcomes: [
        'Planning a unified application architecture.',
        'Ongoing integration work to connect both platforms.',
      ],
    },
    githubUrl: '',
  },
];

export const independentProjects = [
  {
    id: 'azure-pipeline',
    title: 'Azure Batch Data Pipeline – Medallion Architecture',
    technologies: ['Azure Data Factory', 'ADLS Gen2', 'Databricks', 'PySpark', 'Synapse Analytics'],
    description:
      'Built an end-to-end batch ETL pipeline using a medallion architecture with Bronze, Silver, and Gold data layers.',
    features: [
      'Parameterized Azure Data Factory ingestion.',
      'Blob Storage and REST API ingestion.',
      'PySpark-based cleansing.',
      'Schema enforcement.',
      'Data transformation.',
      'Azure Synapse loading.',
      'Monitoring and alerting.',
    ],
    githubUrl: 'https://github.com/SaurabhRajendra7584/azure-batch-data-pipeline',
    category: 'Cloud Data Engineering',
    status: 'Completed',
  },
  {
    id: 'sales-pipeline',
    title: 'Automated Sales Data Pipeline',
    technologies: ['Python', 'AWS S3', 'AWS Redshift', 'AWS QuickSight'],
    description:
      'An automated e-commerce sales reporting pipeline that lands raw order CSVs in Amazon S3, then uses Python, Pandas, and AWS Lambda to clean missing values, remove duplicates, and standardize fields. Processed data is loaded into Amazon Redshift for analysis, with scheduled daily runs and an Amazon QuickSight dashboard tracking revenue, order volume, cancellations, and customer retention.',
    features: [],
    githubUrl: 'https://github.com/SaurabhRajendra7584/automated-sales-data-pipeline',
    category: 'Cloud Data Engineering',
    status: 'Completed',
  },
  {
    id: 'refinr',
    title: 'Refinr – CSV Cleaning ETL',
    technologies: ['Python', 'ETL', 'CSV Processing', 'Data Cleaning'],
    description:
      'A Flask-based CSV cleaning and ETL web app where users upload raw files for automated processing with Python, Pandas, and NumPy. It handles missing values and data type conversion, saves cleaned files separately, loads processed records into MySQL, and provides charts for exploring the resulting data. APScheduler can run ETL jobs on a recurring schedule.',
    features: [],
    githubUrl: 'https://github.com/SaurabhRajendra7584/Refinr---ETL-pipelines-for-Data-processing-and-CSV-cleaning',
    category: 'Data Processing',
    status: 'Completed',
  },
  {
    id: 'elt-warehouse',
    title: 'ELT Data Warehouse – Public Transport Data',
    technologies: ['dbt', 'BigQuery', 'Google Cloud Storage', 'Python'],
    description:
      'Built an ELT data warehouse using public transport datasets, Google Cloud Storage, and BigQuery.',
    features: [
      'Data ingestion into GCS.',
      'Star schema modeling using dbt.',
      'Incremental models.',
      'Data quality tests.',
      'BigQuery partitioning.',
      'Query clustering optimization.',
    ],
    githubUrl: 'https://github.com/SaurabhRajendra7584/public-transport-data-warehouse',
    category: 'Cloud Data Engineering',
    status: 'Completed',
  },
];

export const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Thakur College of Science & Commerce',
    subInstitution: 'University of Mumbai',
    period: '2022 – 2025',
    coursework: [
      'Artificial Intelligence',
      'Data Science',
      'Database Management Systems',
      'Discrete Mathematics',
      'Data Structures & Algorithms',
      'NoSQL (MongoDB)',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: '',
    subInstitution: '',
    period: '2021',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
];

export const certifications = [
  { name: 'IBM Data Fundamentals', org: 'IBM', year: '2026', url: '' },
  { name: 'Linux Administration', org: 'IIT Bombay', year: '2025', url: '' },
  { name: 'Deloitte Data Analytics Simulation', org: 'Deloitte', year: '2025', url: '' },
  { name: 'TCS Data Visualization', org: 'TCS', year: '2025', url: '' },
  { name: 'AWS Academy Cloud', org: 'AWS Academy', year: '2024', url: '' },
];

export const languages = [
  { name: 'English', level: 'C1', symbol: 'EN' },
  { name: 'Hindi', level: 'C2', symbol: 'हि' },
  { name: 'Sanskrit', level: 'B1', symbol: 'सं' },
  { name: 'Spanish', level: 'A2', symbol: 'ES' },
];

export const services = [
  {
    title: 'Python Backend Development',
    items: ['Django applications', 'REST API development', 'Authentication and access control', 'Database integration'],
  },
  {
    title: 'ETL & Data Pipeline Development',
    items: ['Data ingestion', 'Data transformation', 'Data cleaning', 'Data validation', 'ETL/ELT automation'],
  },
  {
    title: 'Business Workflow Automation',
    items: ['Replacing repetitive manual workflows', 'Excel-based process automation', 'Data processing automation', 'Automated reporting'],
  },
  {
    title: 'API & Application Integration',
    items: ['REST APIs', 'Webhooks', 'Third-party application integrations', 'Data synchronization'],
  },
  {
    title: 'PDF & Document Automation',
    items: ['Automated PDF generation', 'Technical data sheets', 'Jinja2 templates', 'WeasyPrint'],
  },
  {
    title: 'Deployment & CI/CD',
    items: ['GitHub integration', 'Render deployment', 'Gunicorn', 'Production configuration', 'Environment management'],
  },
];
