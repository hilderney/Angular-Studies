import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'frontend-test';
  themes = [];
  themeAplied: string;
  sidenavEvents: string[] = [];
  sidenavOpened = true;
  private mediaSub: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver
  ){
    this.themes.push({ value: 'dark', text: 'dark-theme' });
    this.themes.push({ value: 'light', text: 'light-theme' });
    this.themeAplied = 'dark-theme';
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change.mediaQuery);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  ngAfterViewInit(): void {

  }

  updateTheme($event): void {
    console.log($event.value);
    if ($event.value === 'dark') {
      this.themeAplied = 'dark-theme';
    } else if ($event.value === 'light') {
      this.themeAplied = 'light-theme';
    }
  }
}
