import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailPageComponent } from './song/song-detail-page/song-detail-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'song',
    loadChildren: () => import('./song/song.module').then((m) => m.SongModule),
  },
  {
    path: 'detail/:id',
    component: SongDetailPageComponent
  },
  {
    path:'**', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
