import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { QuerySnapshot } from '@firebase/firestore-types';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = environment.blog_data.title;
  subtitle = environment.blog_data.subtitle;
  posts: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.posts = db.collection('posts', ref => ref.orderBy('time', 'desc')).valueChanges();
    }

  ngOnInit() {
  }

}
