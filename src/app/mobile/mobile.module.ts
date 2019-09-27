import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobilePage } from './mobile.page';

const routes: Routes = [
  {
    path: '',
    component: MobilePage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: '../pages/home/home.module#HomePageModule'
      },
      {
        path: 'collections',
        loadChildren: '../pages/collections/collections.module#CollectionsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MobilePage]
})
export class MobilePageModule {}
