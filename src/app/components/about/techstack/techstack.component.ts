import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-techstack',
  imports: [CommonModule],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss'
})
export class TechstackComponent {
  techStacks: any[] = [
    {
      Tech:"Frontend",
      Stacks:["Angular","HTML5","CSS3","JavaScript","TypeScript","Tailwind CSS","Bootstrap"]
    },
    {
      Tech:"Backend",
      Stacks:["python","FastAPI","Java", "Spring Boot"]
    },
    {
      Tech:"Databases",
      Stacks:["MySQL","PostgreSQL","Faiss"]
    },
    {
      Tech:"Version Control",
      Stacks:["Git","GitHub"]
    },
    {
      Tech:"Cloud Platforms",
      Stacks:["Azure", "netlify"]
    },
    {
      Tech: "AI/NLP",
      Stacks: ["ChatGPT", "GPT-4", "Hugging Face","LangChain"]
    }
  ]
    
}
