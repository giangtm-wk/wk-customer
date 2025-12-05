import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full max-w-xl mx-auto group">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg transition-all duration-500 group-hover:blur-xl opacity-50 group-hover:opacity-100"></div>
      <div class="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 shadow-lg transition-all duration-300 focus-within:bg-white/20 focus-within:shadow-blue-500/20 focus-within:border-white/30">
        <svg class="w-5 h-5 text-white/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input 
          type="text" 
          placeholder="Tìm kiếm mọi thứ..." 
          class="w-full bg-transparent border-none outline-none text-white placeholder-white/50 text-sm font-light"
        />
        <div class="flex gap-2">
          <div class="hidden sm:flex items-center px-1.5 py-0.5 rounded-md bg-white/10 border border-white/10 text-[10px] text-white/70 font-mono">
            ⌘ K
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    :host {
      display: block;
      width: 100%;
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {}
