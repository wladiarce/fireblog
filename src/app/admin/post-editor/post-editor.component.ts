import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  posts: any;
  post_object: any;
  htmlText: string;

  constructor(private db: AngularFirestore) {
    this.post_object = {content: ''};
    this.posts = db.collection('posts').snapshotChanges().map(posts => {
      return posts.map(post => {
        const data = post.payload.doc.data();
        const id = post.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() {
  }

  saveContent() {
    this.htmlText = document.getElementById('post-content').innerHTML;
    // this.date
    console.log(this.post_object);
    this.db.collection('posts').doc(this.post_object.id).update({
                        content: this.htmlText
                        });
  }

  addLink() {
    const linkURL = prompt('Enter a URL:', 'http://');
    const sText = document.getSelection();
    document.getElementById('post-content').focus();
    document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
  }

  addImg() {
    const URL = prompt('Enter a URL:', 'http://');
    const sText = document.getSelection();
    document.getElementById('post-content').focus();
    document.execCommand('insertImage', false, URL);
  }

}
