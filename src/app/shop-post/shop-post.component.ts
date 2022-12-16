import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CrossoverService} from '../services/crossover.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-shop-post',
  templateUrl: './shop-post.component.html',
  styleUrls: ['./shop-post.component.scss']
})
export class ShopPostComponent implements OnInit {

  urls = [
    'https://leanconnect.s3.amazonaws.com/media/8011_1648902163.jpeg',
    'https://leanconnect.s3.amazonaws.com/media/naruto_1648902349.png',
    'https://leanconnect.s3.amazonaws.com/media/8011_1648902163.jpeg',
    'https://leanconnect.s3.amazonaws.com/media/naruto_1648902349.png'
  ];

  userId = '';

  advertisementProduct = false;

  posts = [] as Post[];
  currentPosts = [] as Post[];

  constructor(
    public domSanitizer: DomSanitizer,
    private router: Router,
    private crossoverService: CrossoverService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( data => {
      this.userId = data.id;
    });
    this.getPosts();
  }

  getPosts(): any {
    this.posts = this.crossoverService.getShopPosts();
    if (this.userId) {
      this.currentPosts = this.posts?.filter(post => post?.user?.user_id === +this.userId);
    } else {
      this.currentPosts = this.posts;
    }
  }

  addLikes(post): any {
    if (!post?.is_liked) {
      this.crossoverService.shopPosts.filter(data => {
        if (data?.id === post?.id) {
          data.like = data.like + 1;
          data.is_liked = true;
        }
      });
    }
  }

  routeToShop(userId): any {
    this.router.navigate(['/crossover/shop-post'], {
      queryParams: {
        id: userId
      }
    });
  }

}
