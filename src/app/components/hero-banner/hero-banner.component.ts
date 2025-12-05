import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
      <div class="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden group shadow-2xl">
        <img 
          ngSrc="/images/hero-banner.png" 
          fill
          priority
          alt="Hero Banner"
          class="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-2xl">
          <span class="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4 w-fit">
            Sự kiện đặc biệt
          </span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Siêu Sale <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">12.12</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Khám phá những ưu đãi tốt nhất trong năm. Giảm giá lên đến 50% cho các sản phẩm công nghệ hàng đầu.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button class="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
              Mua ngay
            </button>
            <button class="px-6 py-2.5 sm:px-8 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-colors">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    `,
  styles: [
    `
    :host {
      display: block;
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBannerComponent {}
