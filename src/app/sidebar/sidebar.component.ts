import { Component, OnInit } from '@angular/core';
import { faAlignJustify, faSearch, faStar,faCommentDots, faUniversity, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faAlignJustify = faAlignJustify;
  faSearch = faSearch;
  faStar = faStar;
  faCommentDots = faCommentDots;
  faUniversity = faUniversity;
  faExchangeAlt = faExchangeAlt;

  constructor() { }

  ngOnInit(): void {
  }

  habilitaMenu(){

  }
}
