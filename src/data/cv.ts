export const cvMeta = {
  name: "Mattia Pagetti",
  tagline: "Senior Data Engineer",
  email: "pagetti.mattia@gmail.com",
  phone: "+39 331 710 9356",
  linkedin: "mattia-pagetti-40891019b",
  github: "Paggio",
  location: "Milano, IT",
  birthplace: "Sondrio (SO), Italy",
  dob: "21/02/1994",
  website: "paggio.github.io/personal-page",
  profile:
    "Data engineer with six years of building data platforms on **AWS** and **Azure**: from **Spark**/**Iceberg** lakehouses and **Airflow** pipelines to **Databricks** platforms landed inside locked-down, multi-account cloud estates. Physics engineer by training, platform engineer by habit: I like infrastructure that is reproducible, secure by default and pleasant to use.",
  now: "Building Databricks platforms on AWS @ Nearform",
};

export interface ExperienceEntry {
  title: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current?: boolean;
  /** short handle for the window title bar */
  id?: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Senior Data Engineer",
    company: "Nearform",
    logo: "logos/nearform_logo.png",
    period: "03/2026 – Present",
    location: "Tramore, IE / Milano, IT",
    current: true,
    description: [
      "I help clients build modern, scalable **Databricks** platforms with solid CI/CD foundations: AI-ready from day one and shipped faster with AI-native developer tooling.",
      "For a UK healthcare provider I designed and built, end to end, a **Databricks on AWS** platform in **Terraform**: a customer-managed-VPC workspace per environment on a shared **Unity Catalog** metastore, one landing-zone KMS key for all storage and managed services, back-end **PrivateLink** and Object-Locked audit logs, all deployed through **GitHub Actions** (OIDC, tflint, checkov).",
      "Authored the **AWS Landing Zone Accelerator** changes Databricks needed in a locked-down multi-account organisation: scoped RCP exceptions, private VPC endpoints, and closing a remediation path that gave cluster nodes a privileged IAM role.",
    ],
    tags: ["Databricks", "Terraform", "Unity Catalog", "AWS LZA", "PrivateLink", "GitHub Actions", "DBT", "LangGraph"],
  },
  {
    title: "Senior Data Engineer ← Data Engineer",
    company: "TrueLayer",
    logo: "logos/truelayer_logo.png",
    period: "02/2022 – 01/2026",
    location: "London, UK / Milano, IT",
    description: [
      "Built and ran pipelines aggregating microservice databases, queues, third-party APIs and Elasticsearch into S3 (Parquet/**Iceberg**), processed with **Spark** on **EMR**, queried via Athena and orchestrated by **Airflow** DAGs or **Kubernetes** services.",
      "Promoted to Senior in February 2023, I designed and implemented a new data platform from the ground up: automated Aurora snapshots loaded into **Redshift** via **ECS**, **Glue** and Step Functions, models in **DBT**, infrastructure in **Terraform**.",
    ],
    tags: ["Spark", "EMR", "Airflow", "Iceberg", "Redshift", "DBT", "Terraform", "Athena", "Kubernetes"],
  },
  {
    title: "Big Data Engineering Junior Specialist",
    company: "Illimity",
    logo: "logos/illimity_logo.png",
    period: "05/2020 – 02/2022",
    location: "Milano, IT",
    description: [
      "Developed and maintained Illimity's data streams on Azure with **Databricks**, **Data Factory**, **Delta Lake** and **MongoDB**, with all workflows managed through Azure DevOps.",
    ],
    tags: ["Databricks", "Azure Data Factory", "Delta Lake", "MongoDB", "Azure DevOps"],
  },
  {
    title: "Doctoral Student",
    company: "Max Planck Institute for the Structure and Dynamics of Matter",
    id: "max_planck_mpsd",
    logo: "logos/max_planck.png",
    period: "09/2019 – 04/2020",
    location: "Hamburg, Germany",
    description: [
      "Theoretical and computational analysis of RIXS cross-sections, running advanced simulations of realistic condensed-matter systems.",
    ],
    tags: ["Python", "Scientific Computing", "RIXS"],
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Main Stack",
    items: ["Spark", "Databricks", "Terraform", "Airflow", "Iceberg", "DBT", "Kubernetes", "Unity Catalog", "LangGraph", "SDD"],
  },
  {
    category: "AWS",
    items: ["Landing Zone (LZA)", "SCP / RCP", "PrivateLink", "KMS", "EMR", "Redshift", "Athena", "Glue", "S3", "ECS", "EKS", "Lambda", "Step Functions"],
  },
  {
    category: "Azure & more",
    items: ["Data Factory", "Data Lake", "Synapse", "Purview", "MongoDB", "RabbitMQ", "GitHub Actions"],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "MSc Physics Engineering",
    institution: "Politecnico di Milano",
    period: "02/2017 – 04/2019",
    grade: "108/110",
    note: "Specialisation: Nanophysics & Nanotechnology",
  },
  {
    degree: "BSc Physics Engineering",
    institution: "Politecnico di Milano",
    period: "10/2013 – 02/2017",
    grade: "91/110",
  },
];

export interface Publication {
  title: string;
  institution: string;
  year: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Determining the Electron-Phonon Coupling in Superconducting Cuprates by Resonant Inelastic X-ray Scattering: Methods and Results on Nd₁₊ₓBa₂₋ₓCu₃O₇₋δ",
    institution: "Politecnico di Milano",
    year: "2019",
    url: "https://arxiv.org/abs/1906.01270",
  },
];
