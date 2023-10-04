import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    {name: 'Home', route: 'home', selected: true},
    //{name: 'Blog', route: 'blog', selected: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  navLink(link: { route: string; name: string; selected: boolean }) {
    for (const l of this.links) {
      l.selected = false;
    }
    link.selected = true;
  }
}
