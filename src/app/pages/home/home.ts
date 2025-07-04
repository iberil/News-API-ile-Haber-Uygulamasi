import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap, tap, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../shared/components/news-card/news-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  newsGrid: any[][] = [];
  trendingHeadlines: any[] = [];
  news: any[] = [];
  categories = [
    'Politics',
    'World',
    'Business',
    'Science&Tech',
    'Food',
    'Economy',
    'Sports',
    'Travel',
    'Climate',
    'Lifestyle',
  ];
  selectedCategory = '';
  searchControl = new FormControl('');

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        startWith(''),
        switchMap((query) =>
          this.newsService.getTopHeadlines(this.selectedCategory, query ?? '')
        ),
        tap((data) => console.log('Fetched data:', data))
      )
      .subscribe((news) => {
        this.news = news;
        console.log(news[0].urlToImage); // veya kullandığın alan
      });

    this.groupNews();

    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % 5;
    }, 3000);
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.searchControl.setValue(this.searchControl.value); // trigger search
  }

  groupNews() {
    // İlk haber ana featured olarak ayrılıyor
    const grid = this.news.slice(1); // 1. elemandan sonrası
    this.newsGrid = [];

    for (let i = 0; i < grid.length; i += 2) {
      this.newsGrid.push(grid.slice(i, i + 2));
    }

    // Örnek trending
    this.trendingHeadlines = this.news.slice(-6); // son 6 haber
  }

  nextSlide() {
    if (this.news && this.currentSlide < this.news.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.news && this.currentSlide > 0) {
      this.currentSlide--;
    } else if (this.news) {
      this.currentSlide = this.news.length - 1;
    }
  }
}
