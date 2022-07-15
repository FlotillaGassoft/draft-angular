import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ScanDriver } from './scan-driver.component'

const routes = [
  {
    path: '',
    component: ScanDriver,
  },
]

@NgModule({
  declarations: [ScanDriver],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ScanDriver],
})
export class ScanDriverModule {}
