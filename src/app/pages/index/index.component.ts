import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
})
export class Index {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Presentation Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Presentation Page',
      },
    ])
  }
}
