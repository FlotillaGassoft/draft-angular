import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ScanCard } from './scan-card.component'

const routes = [
  {
    path: '',
    component: ScanCard,
  },
]

@NgModule({
  declarations: [ScanCard],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ScanCard],
})
export class ScanCardModule {}
