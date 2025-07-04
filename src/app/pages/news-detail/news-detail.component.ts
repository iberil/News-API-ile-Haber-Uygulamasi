import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsItem: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    // Haber verisini localStorage'dan alıyoruz (daha iyi bir yöntem: shared service veya state)
    const news = JSON.parse(localStorage.getItem('newsList') || '[]');
    this.newsItem = news[index];
    if (!this.newsItem) {
      // Eğer veri yoksa ana sayfaya yönlendir
      this.router.navigate(['/']);
    }
  }
}
