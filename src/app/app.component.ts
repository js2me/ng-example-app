import {Component, Input, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private title: Title,
              private meta: Meta,
              private router: Router,
              private ngZone: NgZone,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.router.events.subscribe((event: any) => {
        if (event instanceof ActivationEnd) {
            this.ngZone.run(()=>{
              this.title.setTitle(event.snapshot.data.title);
              this.meta.updateTag({
                name: 'description',
                content: event.snapshot.data.description
              });
            });
        }
      })
    });
  }

}
