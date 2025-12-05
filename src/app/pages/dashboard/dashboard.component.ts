import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, CategoryListComponent, ProductListComponent],
  template: `
    <div class="space-y-8 pb-32">
      <!-- Hero Section -->
      <app-hero-banner></app-hero-banner>

      <!-- Categories -->
      <app-category-list></app-category-list>

      <!-- Flash Sale / Featured -->
      <app-product-list></app-product-list>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
