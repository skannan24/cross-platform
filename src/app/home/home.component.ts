import {Component, OnInit, TemplateRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Post, PostComment} from '../models/post';
import {CrossoverService} from '../services/crossover.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urls = [
    'https://leanconnect.s3.amazonaws.com/media/8011_1648902163.jpeg',
    'https://leanconnect.s3.amazonaws.com/media/naruto_1648902349.png',
    'https://leanconnect.s3.amazonaws.com/media/8011_1648902163.jpeg',
    'https://leanconnect.s3.amazonaws.com/media/naruto_1648902349.png'
  ];

  advertisementProduct = false;

  posts = [] as Post[];

  comments = [] as PostComment[];

  constructor(
    public domSanitizer: DomSanitizer,
    private router: Router,
    private crossoverService: CrossoverService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): any {
    this.posts = this.crossoverService.getHomeScreenPosts();
  }

  routeToShop(userId): any {
    this.router.navigate(['/crossover/shop-post'], {
      queryParams: {
        id: userId
      }
    });
  }

  addLikes(post): any {
    if (!post?.is_liked) {
      this.crossoverService.homeScreenPosts.filter(data => {
        if (data?.id === post?.id) {
          data.like = data.like + 1;
          data.is_liked = true;
        }
      });
    }
  }

  showComments(comment, template): any {
    this.comments = [] as PostComment[];
    this.comments = comment;
    this.openCompactModal(template);
  }

  openCompactModal(template: TemplateRef<any>): any {
    this.dialog.open(template, {
      maxWidth: '70vw',
      height: '85%',
      width: '70%'
    });
  }

  getVideoId(youtube): any {
    const ids = youtube.split('?v=');
    const id = ids?.split('&')[0];
    // return id;
    return 'zfgNDULi-U8';
  }

}
