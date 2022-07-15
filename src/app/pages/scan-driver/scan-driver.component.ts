import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'scan-driver',
  templateUrl: 'scan-driver.component.html',
  styleUrls: ['scan-driver.component.css'],
})
export class ScanDriver {
  rawbe2h: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ScanDriver - Presentation Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ScanDriver - Presentation Page',
      },
    ])
  }
}
