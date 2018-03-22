import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from '@firebase/util';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-content-upload',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})
export class ContentUploadComponent implements OnInit {

  uploadPercent: any;
  snapshot: any;
  uploadedImg: any;
  downloadURL: any;
  task: AngularFireUploadTask;
  id?: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
    this.uploadedImg = db.collection('img').snapshotChanges().map(image => {
      return image.map(img => {
        const data = img.payload.doc.data();
        const id = img.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() {
  }

  uploadNew() {
    const file = (<HTMLInputElement>document.getElementById('fileUpload')).files[0];
    const filePath = 'img/' + file.name;
    const ref = this.storage.ref(filePath);
    this.task = ref.put(file);

    this.uploadPercent = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges();

    this.task.downloadURL().subscribe(url => {
      this.downloadURL = url;
      this.db.collection('img').add( { path: filePath, url: url });
      }
    );
  }

  deleteIMG(img, path) {
      this.db.collection('img').doc(img).delete();
      this.storage.ref(path).delete();
  }
}
