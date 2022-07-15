import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'insert-n-i-p',
  templateUrl: 'insert-n-i-p.component.html',
  styleUrls: ['insert-n-i-p.component.css'],
})
export class InsertNIP {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('InsertNIP - Presentation Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'InsertNIP - Presentation Page',
      },
    ])
  }
}
