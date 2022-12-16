import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {PostsComponent} from './posts/posts.component';
import {ShopPostComponent} from './shop-post/shop-post.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'shop-post', component: ShopPostComponent },
    ]
  },
  { path: 'crossover', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'shop-post', component: ShopPostComponent },
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
