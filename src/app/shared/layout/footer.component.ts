import {Component, HostBinding, NgZone} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @HostBinding('class.show') showHideFooter: boolean = this.checkRouterUrlForShowFooter(this.router.url);

  constructor(private router: Router, private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.router.events.subscribe((routerEvent: any) => {
        if (routerEvent instanceof NavigationEnd) {
          console.log(routerEvent.url, 'express', (routerEvent.url === '/article' ||
            routerEvent.url === '/account') && !this.showHideFooter);
          if (this.checkRouterUrlForShowFooter(routerEvent.url) && !this.showHideFooter) {
            this.ngZone.run(() => {
              console.log('show');
              this.showHideFooter = true;
            });
          }
          else if (this.showHideFooter) {
            this.ngZone.run(() => {
              console.log('hide');
              this.showHideFooter = false;
            });
          }
        }
      })
    });
  }

  checkRouterUrlForShowFooter(routerUrl: string): boolean {
    return routerUrl === '/article' ||
      routerUrl === '/account';
  }


}
