import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component'; // gives the Router somewhere to go once we configure the routes.
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule, Routes } from '@angular/router'; // allows the application routing capability


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // makes the application navigate to the dashboard automatically when it starts
  { path: 'dashboard', component: DashboardComponent }, // route array that matches a path to the DashboardComponent
  { path: 'detail/:id', component: ArticleDetailComponent },
  {path: 'articles', component: ArticlesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot()
  exports: [RouterModule]  // exports RouterModule to be available throughout the application
})
export class AppRoutingModule { }
