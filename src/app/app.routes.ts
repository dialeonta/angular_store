import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/layout/layout.component').then(c =>  c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component').then(c =>  c.ListComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('@shared/pages/about/about.component').then(c =>  c.AboutComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component').then(c =>  c.ProductDetailComponent)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./domains/info/pages/not-found/not-found.component').then(c =>  c.NotFoundComponent)
  }
];
