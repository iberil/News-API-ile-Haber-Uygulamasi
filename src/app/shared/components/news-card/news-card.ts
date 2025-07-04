import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NewsItem } from '../../../models/news.model';
@Component({
  standalone: true,
  selector: 'app-news-card',
  templateUrl: './news-card.html',
  styleUrls: ['./news-card.scss'],
  imports: [CommonModule, DatePipe],
})
export class NewsCardComponent {
  @Input() article: NewsItem = {
    title: '',
    description: '',
    url: '',
    publishedAt: '',
  };

  placeholder = 'https://placehold.co/390x340';
}
