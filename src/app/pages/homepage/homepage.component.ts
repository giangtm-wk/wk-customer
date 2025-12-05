import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { DockMenuComponent } from '../../components/dock-menu/dock-menu.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchBoxComponent, DockMenuComponent],
  template: `
    <div class="min-h-screen bg-[#0f172a] text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      <!-- Background Elements -->
      <div class="fixed inset-0 z-0 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s"></div>
        <div class="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-pink-500/10 rounded-full blur-[80px] animate-float"></div>
      </div>

      <!-- Main Content Container -->
      <div class="relative z-10 flex flex-col h-screen">
        
        <!-- Top Bar / Search -->
        <header class="w-full flex justify-center transition-all duration-300"
          [class.px-4]="showSearch()"
          [class.py-4]="showSearch()">
          @if (showSearch()) {
            <app-search-box class="w-full max-w-2xl animate-fade-in-down"></app-search-box>
          }
        </header>

        <!-- Scrollable Content Area -->
        <main class="flex-1 overflow-y-auto scrollbar-hide">
          <div class="max-w-7xl mx-auto w-full min-h-full px-4 pt-6 pb-40">
            <router-outlet></router-outlet>
          </div>
        </main>

        <!-- Bottom Dock -->
        <footer class="fixed bottom-0 left-0 right-0 h-24 pointer-events-none flex justify-center items-end pb-8 z-50">
          <div class="pointer-events-auto">
            <app-dock-menu></app-dock-menu>
          </div>
        </footer>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  private router = inject(Router);

  showSearch = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(
        (event: NavigationEnd) =>
          event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/',
      ),
      startWith(this.router.url === '/home' || this.router.url === '/'),
    ),
    { initialValue: false },
  );
}
