import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit {

  public markdown = '';
  htmlText: string;
  postCol: any;
  postID: string;
  uploadedImg: any;

  constructor(db: AngularFirestore) {
    this.postCol = db.collection('posts');
    this.uploadedImg = db.collection('img').snapshotChanges().map(image => {
      return image.map(img => {
        const data = img.payload.doc.data();
        const id = img.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() { }
  generateID(title) {
    const my_date = new Date();
    this.postID = my_date.getDate() + (my_date.getMonth() + 1).toString() + (my_date.getFullYear() - 2000).toString()
                  + '-' + title.toLowerCase().replace(/ /gi, '-');
  }

  postContent(title, sum, banner, postid) {
    this.htmlText = document.getElementById('post-content').innerHTML;
    // this.date
    this.postCol.add({  title: title, summary: sum, banner: banner, content: this.htmlText,
                        author: environment.blog_data.author, time: new Date(), url_id: postid});
  }

  addImg() {
    const URL = prompt('Enter a URL:', 'http://');
    const sText = document.getSelection();
    document.getElementById('post-content').focus();
    document.execCommand('insertImage', false, URL);
  }

}
