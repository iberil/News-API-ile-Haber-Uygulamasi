# NewsApp

## News-API-ile-Haber-Uygulamasi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Proje Geliştirme Aşamaları

1. **Proje Kurulumu ve Yapılandırma**
   - Angular CLI ile proje oluşturuldu.
   - Gerekli bağımlılıklar ve temel yapılandırmalar yapıldı.

2. **Haber Servisinin Oluşturulması**
   - `NewsService` ile NewsAPI üzerinden haber verilerinin çekilmesi sağlandı.
   - Kategori ve arama sorgusu ile filtreleme desteği eklendi.

3. **Model ve Tip Tanımlamaları**
   - `news.model.ts` ile haber verisi için tip/model tanımlamaları yapıldı.

4. **Ana Sayfa (Home Page) Geliştirmesi**
   - Arama, kategori seçimi ve haber listeleme özellikleri eklendi.
   - Farklı kart ve slider görünümleriyle zenginleştirildi.

5. **Haber Detay Sayfası**
   - (Not: `news-detail` sayfası için şablon henüz tamamlanmamış görünüyor.)

6. **Bileşenlerin Oluşturulması**
   - `news-list`, `news-item` ve `news-card` gibi yeniden kullanılabilir bileşenler geliştirildi.

7. **Paylaşılan (Shared) Yapılar**
   - Ortak kullanılan kart, pipe (`truncate.pipe.ts`) ve direktif (`highlight.directive.ts`) gibi yardımcı yapılar eklendi.

8. **Stil ve Responsive Tasarım**
   - SCSS dosyaları ile modern ve responsive bir arayüz tasarlandı.

9. **Testler**
   - Temel birim testleri için spec dosyaları oluşturuldu.

## Uygulama Arayüzü

### Ana Sayfa
![Ana Sayfa](screenshots/home.png)

### Latest News Bölümü
![Latest News](screenshots/latest-news.png)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
