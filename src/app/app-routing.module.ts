import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page';
import { NewsPageComponent } from './pages/news/news-page';
import { PlaysPageComponent } from './pages/plays/lady-plays-page';
import { AboutPageComponent } from './pages/about/about-page';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'news', component: NewsPageComponent},
  { path: 'plays', component: PlaysPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, NewsPageComponent, PlaysPageComponent, AboutPageComponent];

