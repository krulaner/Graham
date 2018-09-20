import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    component:HomeComponent
  },
  {
    path:'authors/new',
    component:NewAuthorComponent
  },
  {
    path:'authors/:author_id',
    component:ShowAuthorComponent
  },
  {
    path:'quotes/new/:author_id',
    component:NewQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
