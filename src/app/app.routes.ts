import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'resume', component: ResumeComponent },
    {path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for any unknown routes

];
