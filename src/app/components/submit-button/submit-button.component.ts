import { Component, Input } from '@angular/core'

@Component({
  selector: 'submit-button',
  templateUrl: 'submit-button.component.html',
  styleUrls: ['submit-button.component.css'],
})
export class SubmitButton {
  @Input()
  submitButton: string = 'Submit Text'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
