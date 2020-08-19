import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'pizza',
      thought: 'pizza is good',
      votes: 0,
    },
    {
      title: 'Taco Tuesday',
      thought: 'fun for all',
      votes: 0,
    },
    {
      title: 'Netflix',
      thought: 'fun with friends',
      votes: 0,
    },
  ];
  socialPost: any;
  showForm: boolean = false;
  constructor() {}

  onSubmit(post: Post) {
    this.posts.unshift(post);
  }

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onUpVote(index: number) {
    this.posts[index].votes++;
  }
  onDownVote(index: number) {
    this.posts[index].votes--;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
