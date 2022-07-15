import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'scan-card',
  templateUrl: 'scan-card.component.html',
  styleUrls: ['scan-card.component.css'],
})
export class ScanCard {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ScanCard - Presentation Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ScanCard - Presentation Page',
      },
    ])
  }
}
