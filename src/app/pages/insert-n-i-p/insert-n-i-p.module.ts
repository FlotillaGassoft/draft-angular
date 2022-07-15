import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { InsertNIP } from './insert-n-i-p.component'

const routes = [
  {
    path: '',
    component: InsertNIP,
  },
]

@NgModule({
  declarations: [InsertNIP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [InsertNIP],
})
export class InsertNIPModule {}
