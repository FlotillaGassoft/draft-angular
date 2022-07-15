import { Component, Input } from '@angular/core'

@Component({
  selector: 'action-card',
  templateUrl: 'action-card.component.html',
  styleUrls: ['action-card.component.css'],
})
export class ActionCard {
  @Input()
  goToActionButton: string = 'Go to Action'
  @Input()
  stepName: string = 'Step Number Text'
  @Input()
  actionName: string = 'Action Name'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
