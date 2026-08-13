export interface WorkEntry {
  id: string;
  title: string;
  tagline: string;
  period: string;
  category: "Research" | "ML / CV" | "Full-Stack" | "Systems";
  badge?: string;
  venue?: string;
  bullets: string[];
  tools: string[];
  links?: {
    label: string;
    href: string;
  }[];
  note?: string;
}

export const work: WorkEntry[] = [
  {
    id: "environmental-drivers",
    title: "Environmental Drivers of Respiratory Disease",
    tagline: "A district-level analysis across 11 years of Sri Lankan health & air-quality data",
    period: "Jan 2026 — May 2026",
    category: "Research",
    badge: "Best Paper Award Nominee",
    venue: "Accepted, MERCon 2026 — Moratuwa Engineering Research Conference",
    bullets: [
      "Assembled an 11-year panel dataset across all 25 Sri Lankan districts from satellite, pollutant, and health admission sources.",
      "Built temporally validated XGBoost models for respiratory admission rate (R² = 0.937) and monthly PM2.5 (R² = 0.976).",
      "Used SHAP to identify air quality burden as the dominant driver, accounting for 80.1% of feature importance.",
    ],
    tools: ["XGBoost", "SHAP", "Pandas", "NumPy", "Python"],
    links: [{ label: "arXiv:2607.04416", href: "https://arxiv.org/abs/2607.04416" }],
  },
  {
    id: "audiolit",
    title: "Audiolit",
    tagline: "Multimodal explainable-AI workbench for speech recognition, emotion analytics & deepfake detection",
    period: "Jul 2026 — Oct 2026",
    category: "ML / CV",
    bullets: [
      "Built an XAI platform extending the ECHO 1.0 baseline to concurrently run ASR, speech emotion recognition, and audio deepfake detection, with acoustic profiling and accent-bias auditing.",
      "Implemented an asynchronous Celery/RQ task fabric for non-blocking inference, plus a deterministic SHA-256 content-addressed cache.",
      "Shipped visual XAI methods — Grad-CAM and Integrated Gradients — alongside interactive 2D/3D latent-space projections of hidden states.",
      "Built the React web client with canvas-driven spectrogram mutation and real-time WebSocket progress tracking.",
    ],
    tools: ["React", "TypeScript", "FastAPI", "PyTorch", "Hugging Face", "Captum", "Celery", "Redis", "MongoDB", "Librosa", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/AudioLIT-DSE-Project/audiolit-workspace" }],
  },
  {
    id: "goldnest",
    title: "GoldNest",
    tagline: "Micro-investment fintech platform for fractional gold — web, iOS & Android",
    period: "March 2025",
    category: "Full-Stack",
    badge: "1st Place, Dev{thon} 2.0",
    note: "Startup Spark 2.0 finalist · team Code Mavericks",
    bullets: [
      "Built a platform for micro-investing in fractional gold from Rs. 100, with wallets, automated savings plans, and physical redemption.",
      "Tokenised holdings on Polygon for verifiable ownership; added AI-driven market analysis and a gamification layer.",
      "Shipped the companion iOS and Android client with biometric login, live pricing charts, and instant buy/sell.",
    ],
    tools: ["Next.js", "React", "Node.js", "Express", "MongoDB", "OpenZeppelin", "Polygon", "Groq SDK", "Chart.js", "JWT"],
    links: [{ label: "GitHub", href: "https://github.com/Abd-Ur-Rahim/goldnest-fullstack" }],
  },
  {
    id: "medibridge",
    title: "MediBridge",
    tagline: "Interoperable digital health passport for cross-institution patient records",
    period: "Feb 2025 — Apr 2025",
    category: "Systems",
    bullets: [
      "Engineered the backend entirely in Ballerina so patients consolidate records across institutions and grant providers scoped access.",
      "Split records, consent, and assist into independent services behind a central gateway, with role-based access control.",
    ],
    tools: ["Ballerina", "REST APIs", "Docker", "Microservices"],
    links: [{ label: "GitHub", href: "https://github.com/Abd-Ur-Rahim/MediBridge" }],
  },
  {
    id: "diffdetect-yolo",
    title: "DiffDetect-YOLO",
    tagline: "Zero-shot visual difference detection pipeline for paired images",
    period: "Apr 2025 — May 2025",
    category: "ML / CV",
    bullets: [
      "Developed a computer vision pipeline to automate detection of visual differences between paired images for a Kaggle competition.",
      "Leveraged YOLOv8-World for open-vocabulary zero-shot detection, localizing anomalies and generating bounding boxes for altered image regions.",
    ],
    tools: ["YOLOv8-World", "Python", "OpenCV", "Computer Vision"],
    links: [{ label: "GitHub", href: "https://github.com/Abd-Ur-Rahim/DiffDetect-YOLO" }],
  },
];
