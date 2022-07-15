import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar-container',
  templateUrl: 'navbar-container.component.html',
  styleUrls: ['navbar-container.component.css'],
})
export class NavbarContainer {
  @Input()
  heading: string = 'Flotilla - Despachador'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
