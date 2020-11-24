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
  darkTheme: boolean;
  themeAplied: string;
  sidenavEvents: string[] = [];
  sidenavOpened: boolean;
  sidenavMobile: boolean;
  sidenavStyle: string;
  sidenavToogleBtn: boolean;
  private mediaSub: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver
  ){
    this.darkTheme = true;
    this.themeAplied = 'dark-theme';
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.controlSidenavBehavior();
  }

  ngOnDestroy(): void {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  ngAfterViewInit(): void {

  }

  controlSidenavBehavior(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change.mediaQuery);
        if (change.mqAlias === 'xs' || change.mqAlias === 'sm'){
          this.sidenavOpened = false;
          this.sidenavMobile = true;
          this.sidenavStyle = 'over'
          this.sidenavToogleBtn = true;
        } else {
          this.sidenavOpened = true;
          this.sidenavMobile = false;
          this.sidenavStyle = 'side'
          this.sidenavToogleBtn = false;
        }
      }
    );
  }

  updateTheme(): void {
    if (this.darkTheme) {
      this.darkTheme = false;
      this.themeAplied = 'light-theme';
    }
    else {
      this.darkTheme = true;
      this.themeAplied = 'dark-theme';
    }
  }
}
