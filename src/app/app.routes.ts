import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMainComponent } from './components/about/about-main.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutMainComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'resume', component: ResumeComponent },
    {
        path: 'technotes',
        children: [
        {
            path: '',
            loadComponent: () =>
            import('./components/tech-notes/tech-notes.component')
                .then(m => m.TechNotesComponent)
        },
        {
            path: ':id',
            loadComponent: () =>
            import('./components/tech-notes/tech-note-detail/tech-note-detail.component')
                .then(m => m.TechNoteDetailComponent)
        }
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for any unknown routes

];
