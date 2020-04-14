import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() loading = false;
  @Output() addCommentar = new EventEmitter();

  commentForm = this.fb.group({
    name: ['', Validators.required],
    text: ['', Validators.required],
    date: [new Date(), Validators.required]
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addComment($event) {
    this.loading = true;
    this.addCommentar.emit(this.commentForm.value);
    this.commentForm.controls.name.reset();
    this.commentForm.controls.text.reset();
  }

}
