import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dock-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 px-1 py-1 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-end gap-1 sm:gap-2 transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105 hover:shadow-blue-500/10 z-50">
      @for (item of menuItems(); track item.label) {
        <a 
          [routerLink]="item.route"
          routerLinkActive="active-dock-item"
          class="group relative flex flex-col items-center justify-end transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-110 p-1.5"
        >
          <!-- Icon Container -->
          <div class="w-12 h-12 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-white/40 transition-all duration-300 relative overflow-hidden">
            <!-- Glass reflection effect -->
            <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Icon -->
            <div class=" text-xs text-center text-white drop-shadow-md transition-transform duration-300 group-hover:scale-110">{{ item.label }}</div>
          </div>
          
          <!-- Active Indicator -->
          <div class="w-1 h-1 rounded-full bg-white/50 mt-1 opacity-0 transition-all duration-300 group-[.active-dock-item]:opacity-100 group-[.active-dock-item]:w-1 group-[.active-dock-item]:h-1 group-[.active-dock-item]:bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
        </a>
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
export class DockMenuComponent {
  menuItems = signal([
    {
      label: 'Trang chủ',
      route: '/home',
    },
    {
      label: 'Sản phẩm',
      route: '/products',
    },
    {
      label: 'Yêu thích',
      route: '/favorites',
    },
    {
      label: 'Chuyển link',
      route: '/affiliate-link',
    },
  ]);
}
