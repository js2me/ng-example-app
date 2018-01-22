import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';
@Directive({
  selector: '[showAuth]'
})
export class AuthDirective implements OnInit {
  condition = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.isAuth.subscribe(this.checkAuthed.bind(this));
  }

  @Input() set showAuth(condition: boolean) {
    this.condition = condition;
  }


  checkAuthed(isAuth){
    if ((isAuth && this.condition) || (!isAuth && !this.condition)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

}
