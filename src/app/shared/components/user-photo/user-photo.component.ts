

import {Component, Input} from '@angular/core';
@Component({
  selector: 'user-photo',
  styleUrls: ['./user-photo.component.scss'],
  templateUrl: './user-photo.component.html'
})
export class UserPhotoComponent{
  @Input() imageUrl: (string|null) = null;
  @Input() width: string = '128px';
  @Input() height: string = '128px';

}
