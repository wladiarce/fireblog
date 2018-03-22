import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  author = environment.blog_data.author;
  constructor(private titleService: Title) {
    titleService.setTitle(environment.blog_data.title + ' - ' + environment.blog_data.author);
  }

  ngOnInit() {
  }

}
