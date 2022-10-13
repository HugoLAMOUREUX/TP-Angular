import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiseuseComponent } from './components/liseuse/liseuse.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LiseuseComponent },
  { path: 'liseuse', component: LiseuseComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
