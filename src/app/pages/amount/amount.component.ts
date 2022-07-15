import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-amount',
  templateUrl: 'amount.component.html',
  styleUrls: ['amount.component.css'],
})
export class Amount {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Amount - Presentation Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Amount - Presentation Page',
      },
    ])
  }
}
