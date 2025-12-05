import type { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { type MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-affiliate-link',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="max-w-3xl mx-auto space-y-8">
      <!-- Header Section -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          <h3 class="text-2xl">Chuyển đổi link sản phẩm</h3>
          Shopee hoặc TikTok
        </h1>
      </div>

      <!-- Input Card -->
      <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
        <div class="flex flex-col gap-6">
          <!-- Input Field -->
          <div class="relative">
            <mat-form-field appearance="outline" class="w-full custom-mat-field">
              <mat-label>Dán link sản phẩm vào đây</mat-label>
              <input 
                matInput 
                [(ngModel)]="sourceLink" 
                placeholder="https://shopee.vn/..."
                (keyup.enter)="convertLink()"
                [disabled]="isLoading()"
              >
              <mat-icon matPrefix class="text-white/50 mr-2">link</mat-icon>
              @if (sourceLink()) {
                <button mat-icon-button matSuffix (click)="sourceLink.set('')" [disabled]="isLoading()">
                  <mat-icon>close</mat-icon>
                </button>
              }
            </mat-form-field>
          </div>

          <!-- Action Button -->
          <button 
            mat-flat-button 
            color="primary" 
            class="w-full h-12 text-lg rounded-xl !bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
            [disabled]="!sourceLink() || isLoading()"
            (click)="convertLink()"
          >
            <ng-container>
              @if (isLoading()) {
                <div class="flex items-center">
                  <mat-spinner diameter="24" class="mr-2"></mat-spinner>
                  <span>Đang xử lý...</span>
                </div>
              }
              @if (!isLoading()) {
                <div class="flex items-center">
                  <mat-icon class="mr-2">transform</mat-icon>
                  <span>Chuyển đổi ngay</span>
                </div>
              }
            </ng-container>
          </button>
        </div>
      </div>

      <!-- Result Card -->
      @if (convertedLink()) {
        <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 md:p-8 shadow-2xl animate-fade-in-up">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3 text-green-400 mb-2">
              <div class="p-2 bg-green-500/20 rounded-full">
                <mat-icon>check_circle</mat-icon>
              </div>
              <h3 class="text-xl font-bold">Chuyển đổi thành công!</h3>
            </div>
            
            <div class="bg-black/20 rounded-xl p-4 flex items-center justify-between gap-4 border border-white/5">
              <code class="text-green-300 truncate font-mono text-sm md:text-base flex-1">
                {{ convertedLink() }}
              </code>
              <button 
                mat-icon-button 
                class="text-white/70 hover:text-white hover:bg-white/10"
                (click)="copyLink()"
                matTooltip="Sao chép"
              >
                <mat-icon>content_copy</mat-icon>
              </button>
            </div>

            <div class="flex gap-3 mt-2">
              <button mat-stroked-button class="flex-1 !border-white/20 !text-white hover:!bg-white/10" (click)="shareLink()">
                <mat-icon class="mr-2">share</mat-icon>
                Chia sẻ
              </button>
              <button mat-stroked-button class="flex-1 !border-white/20 !text-white hover:!bg-white/10" (click)="openLink()">
                <mat-icon class="mr-2">open_in_new</mat-icon>
                Mở link
              </button>
            </div>
          </div>
        </div>
      }
  `,
  styles: [
    `
    :host {
      display: block;

      ::ng-deep .mat-mdc-notch-piece.mdc-notched-outline__notch {
        border-right: none;
      }
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AffiliateLinkComponent {
  sourceLink = signal('');
  convertedLink = signal('');
  isLoading = signal(false);

  constructor(
    private snackBar: MatSnackBar,
    private clipboard: Clipboard,
  ) {}

  async convertLink() {
    if (!this.sourceLink()) return;

    this.isLoading.set(true);
    this.convertedLink.set('');

    // Simulate API call
    setTimeout(() => {
      // Mock conversion logic
      const original = this.sourceLink();
      let converted = '';

      if (original.includes('shopee')) {
        converted = `https://shope.ee/aff_id=123&url=${encodeURIComponent(original)}`;
      } else if (original.includes('tiktok')) {
        converted = `https://vm.tiktok.com/aff_id=123&url=${encodeURIComponent(original)}`;
      } else {
        converted = `https://wk.com/ref?url=${encodeURIComponent(original)}`;
      }

      this.convertedLink.set(converted);
      this.isLoading.set(false);

      this.snackBar.open('Đã tạo link thành công!', 'Đóng', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['bg-green-600', 'text-white'],
      });
    }, 1500);
  }

  copyLink() {
    if (this.convertedLink()) {
      this.clipboard.copy(this.convertedLink());
      this.snackBar.open('Đã sao chép vào bộ nhớ tạm', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['bg-gray-800', 'text-white'],
      });
    }
  }

  shareLink() {
    if (navigator.share && this.convertedLink()) {
      navigator
        .share({
          title: 'Mua ngay tại đây',
          text: 'Liên kết:',
          url: this.convertedLink(),
        })
        .catch(console.error);
    } else {
      this.copyLink();
    }
  }

  openLink() {
    if (this.convertedLink()) {
      window.open(this.convertedLink(), '_blank');
    }
  }
}
