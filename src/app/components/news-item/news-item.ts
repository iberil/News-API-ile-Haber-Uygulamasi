import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.html',
  styleUrls: ['./news-item.scss'],
})
export class NewsItemComponent {
  @Input() news!: NewsItem; // dışarıdan haber verisi alınacak
}
