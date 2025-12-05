import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-white">Danh mục nổi bật</h2>
      <button class="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">Xem tất cả</button>
    </div>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      @for (cat of categories(); track cat.id) {
        <div class="group cursor-pointer">
          <div class="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-1">
            <span class="text-3xl group-hover:scale-110 transition-transform duration-300">{{cat.icon}}</span>
            <span class="text-sm text-white/70 font-medium group-hover:text-white">{{cat.name}}</span>
          </div>
        </div>
      }
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
export class CategoryListComponent {
  categories = signal([
    { id: 1, name: 'Quần áo', icon: '👕' },
    { id: 2, name: 'Giày dép', icon: '👟' },
    { id: 3, name: 'Đồ gia dụng', icon: '🛋' },
    { id: 4, name: 'Nhà bếp', icon: '🍳' },
    { id: 5, name: 'Mỹ phẩm', icon: '💄' },
    { id: 6, name: 'Phụ kiện', icon: '👜' },
  ]);
}
