import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [fadeUp]
})
export class ProjectComponent {
  isPublic: boolean = false;
  projects: any[] = [
    {
      title: "AI-Powered OSS Risk Analyzer & RAG Chatbot",
      duration: "Jul 2025 – Present",
      description: [
        "Developed a <strong>Retrieval-Augmented Generation (RAG)</strong> chatbot to analyze open-source software vulnerabilities.",
        "Built <strong>FastAPI microservices</strong> with modular architecture (knowledge_graph, nlp_explainer, risk_model, security_scanner).",
        "Implemented <strong>regex + NLP hybrid extractors</strong> for fixVersion and remediation recommendations.",
        "Integrated <strong>Hugging Face NLP models</strong> for human-friendly vulnerability explanations.",
        "Designed <strong>Angular 19</strong> frontend with interactive graph visualizations using ECharts and Chart.js.",
        "Automated deployment using <strong>Docker and CI/CD pipelines</strong>."
      ],
      tech: "Angular 19, FastAPI (Python), PostgreSQL, Hugging Face NLP, Docker, CI/CD, Linux",
      links: [
        { label: "GitHub", url: "https://github.com/Alan-Babu/oss-risk-analyzer" },
        { label: "Architecture", url: "#" }
      ]
    },
    {
      title: "Homeware Software – Vantiva",
      duration: "Feb 2023 – Present",
      description: [
        "Built embedded router UI for real-time device management.",
        "Developed backend APIs using <strong>Lua</strong> for device interaction.",
        "Enhanced usability with Angular components and optimized UI performance."
      ],
      tech: "Angular, Lua, HTML, CSS, JavaScript, Linux",
      links: []
    },
    {
      title: "Server Deployment Automation",
      duration: "Mar 2022 – Oct 2023",
      description: [
        "Automated JVM deployment and configuration in Linux environments.",
        "Reduced manual server setup effort by <strong>~40%</strong>."
      ],
      tech: "Linux, Shell Scripting",
      links: []
    }
  ]
}
