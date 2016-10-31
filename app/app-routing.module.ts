import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './component/welcome.component';
import { GalleryComponent } from './component/gallery.component';
import { CraftListComponent } from './component/craft-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: WelcomeComponent },
  { path: 'cathegory/:id', component: CraftListComponent },
  { path: 'gallery',     component: GalleryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}