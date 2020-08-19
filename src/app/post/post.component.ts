import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postRef: Post; //sending down info when goes through loop
  @Output() deleted = new EventEmitter<void>();
  @Output() upVoted = new EventEmitter<void>();
  @Output() downVote = new EventEmitter<void>();
  @Output() hide = new EventEmitter<void>();
  constructor() {}

  deletePost() {
    this.deleted.emit();
  }
  voteUp() {
    this.upVoted.emit();
  }

  voteDown() {
    this.downVote.emit();
  }
  nghide() {
    this.hide.emit();
  }

  ngOnInit(): void {}
}
