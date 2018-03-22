import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id1: string;
  posts: Observable<any[]>;
  post: any;
  mdUrl: Observable<string | null>;
  storageRef: any;
  trustedBg: any;

constructor( private route: ActivatedRoute, private location: Location,
                db: AngularFirestore, sanitizer: DomSanitizer) {
  // retrieves the id from the url, queries the post with that id and stores it
    this.id1 = this.route.snapshot.paramMap.get('id');
    this.posts = db.collection('posts', ref => ref.where('url_id', '==', this.id1)).valueChanges();
    this.posts.subscribe(query => {
      this.post = query[0];
      this.trustedBg = '';
      if (query[0].banner !== '#' && query[0].banner !== '') {
        this.trustedBg = sanitizer.bypassSecurityTrustStyle('background-image: url(' + query[0].banner + ')');
      }
    });
  }
  ngOnInit() {}

}
