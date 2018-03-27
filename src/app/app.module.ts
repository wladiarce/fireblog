// MODULES
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';

// ENVIRONMENT
import { environment } from '../environments/environment';

// SERVICES
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { PostCreatorComponent } from './admin/post-creator/post-creator.component';
import { PostEditorComponent } from './admin/post-editor/post-editor.component';
import { ContentUploadComponent } from './admin/content-upload/content-upload.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: AdminComponent,
  // { path: 'dashboard', component: AdminComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'editor', component: PostEditorComponent},
        {path: 'creator', component: PostCreatorComponent},
        {path: 'upload', component: ContentUploadComponent}
      ] },
  { path: 'admin', component: LoginComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PostComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    PostCreatorComponent,
    PostEditorComponent,
    ContentUploadComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, AuthGuard, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
