export interface SkillGroup {
  group: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { group: "Machine Learning", items: ["PyTorch", "scikit-learn", "XGBoost", "SHAP", "Pandas", "NumPy", "Jupyter", "YOLO"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Figma"] },
  { group: "Backend", items: ["FastAPI", "Flask", "REST APIs", "Microservices", "Apache Kafka"] },
  { group: "Database", items: ["PostgreSQL", "MySQL"] },
  { group: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "AWS"] },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Ballerina"] },
  { group: "Tools", items: ["VS Code", "PyCharm", "CLion", "Chrome DevTools", "Hugging Face"] },
];

export const spokenLanguages = ["English", "Sinhala", "Tamil"];
