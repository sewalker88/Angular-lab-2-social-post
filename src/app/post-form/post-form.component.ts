import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}

  submitPost(form: NgForm) {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
      votes: form.value.votes,
    };
    this.submitted.emit(newPost);
    form.reset;
  }
}
