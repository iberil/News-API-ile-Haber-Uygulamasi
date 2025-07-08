import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() article: any; // Tek bir haber
  @Input() articles: any[] = []; // Slider için birden çok haber
  @Input() cardType: 'slider' | 'text-only' | 'highlighted' | 'secondary' =
    'text-only';
  @Input() index: number = 0;

  @Output() cardClick = new EventEmitter<number>();

  onCardClick(): void {
    this.cardClick.emit(this.index);
  }

  getImage(): string {
    return this.article?.urlToImage || 'assets/images/placeholder.png';
  }
}
