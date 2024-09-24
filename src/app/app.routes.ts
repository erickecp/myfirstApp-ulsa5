import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'support',
    component: SupportComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'  // Redirect to home page if no matching route is found
  }
];
