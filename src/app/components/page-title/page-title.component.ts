import { Component, Input } from '@angular/core'

@Component({
  selector: 'page-title',
  templateUrl: 'page-title.component.html',
  styleUrls: ['page-title.component.css'],
})
export class PageTitle {
  @Input()
  heading: string = 'Hola, '
  @Input()
  rootClassName: string = ''

  constructor() {}
}
