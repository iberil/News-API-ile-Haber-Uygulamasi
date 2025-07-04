import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:index', component: NewsDetailComponent }
];
