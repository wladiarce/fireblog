import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.blog_data.title;
  author = environment.blog_data.author;
  custom = '<div>HelloWorld</div>';

  public constructor(private titleService: Title ) {
    titleService.setTitle(this.title + ' - ' + environment.blog_data.subtitle);
   }
}
