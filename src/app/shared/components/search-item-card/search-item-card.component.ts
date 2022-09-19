import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../models/SearchItem';
import { SEARCH_ORIGIN_CARD } from '../../utils/util';
import stringHash from 'string-hash';

@Component({
  selector: 'app-search-item-card[itemCard]',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.css']
})
export class SearchItemCardComponent implements OnInit {

  // @Input() @Required itemCard: SearchItem;
  @Input() itemCard!: SearchItem;
  color: string;
  constructor() { 
    this.color = 'FFFFFF';
  }

  ngOnInit(): void {
    this.color = SEARCH_ORIGIN_CARD[stringHash(this.itemCard.origin) % SEARCH_ORIGIN_CARD.length]
  }

}
