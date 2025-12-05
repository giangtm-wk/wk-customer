import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="flex items-center gap-3 mb-6">
      <h2 class="text-2xl font-bold text-white">Dành cho bạn</h2>
      <span class="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-md border border-red-500/20 animate-pulse">HOT</span>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      @for (product of products(); track product.id) {
        <div class="group bg-white/5 border border-white/10 rounded-2xl p-3 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
          <!-- Image -->
          <div class="aspect-square rounded-xl overflow-hidden mb-3 relative bg-gray-800">
            <img 
              ngSrc="/images/product-placeholder.png" 
              [width]="300" 
              [height]="300"
              alt="{{product.name}}"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            @if (product.discount) {
              <div class="absolute top-2 right-2 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                -{{product.discount}}%
              </div>
            }
            <button class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-500 hover:border-blue-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </button>
          </div>
          
          <!-- Content -->
          <div class="space-y-1">
            <h3 class="text-white font-medium truncate group-hover:text-blue-400 transition-colors">{{product.name}}</h3>
            <div class="flex items-center gap-1">
              <div class="flex text-yellow-400 text-xs">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                }
              </div>
              <span class="text-white/40 text-xs">(4.8)</span>
            </div>
            <div class="flex items-end justify-between pt-1">
              <div class="flex flex-col">
                @if (product.oldPrice) {
                  <span class="text-white/40 text-xs line-through">{{product.oldPrice}}</span>
                }
                <span class="text-blue-400 font-bold text-lg">{{product.price}}</span>
              </div>
            </div>
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
export class ProductListComponent {
  products = signal([
    {
      id: 1,
      name: 'Áo thun nam cotton cao cấp',
      price: '149.000 ₫',
      oldPrice: '199.000 ₫',
      discount: 25,
    },
    {
      id: 2,
      name: 'Giày sneaker nữ thể thao',
      price: '299.000 ₫',
      oldPrice: '450.000 ₫',
      discount: 34,
    },
    {
      id: 3,
      name: 'Nồi cơm điện Panasonic 1.8L',
      price: '890.000 ₫',
      oldPrice: '1.200.000 ₫',
      discount: 26,
    },
    {
      id: 4,
      name: 'Bộ chăn ga gối cotton Hàn Quốc',
      price: '450.000 ₫',
      oldPrice: null,
      discount: null,
    },
    {
      id: 5,
      name: 'Son môi lì Maybelline',
      price: '129.000 ₫',
      oldPrice: '179.000 ₫',
      discount: 28,
    },
    {
      id: 6,
      name: 'Túi xách nữ da PU cao cấp',
      price: '249.000 ₫',
      oldPrice: null,
      discount: null,
    },
    {
      id: 7,
      name: 'Quần jean nam slim fit',
      price: '199.000 ₫',
      oldPrice: '299.000 ₫',
      discount: 33,
    },
    {
      id: 8,
      name: 'Bình giữ nhiệt Lock&Lock 500ml',
      price: '159.000 ₫',
      oldPrice: '220.000 ₫',
      discount: 28,
    },
  ]);
}
