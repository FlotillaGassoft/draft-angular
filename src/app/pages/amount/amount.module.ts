import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Amount } from './amount.component'

const routes = [
  {
    path: '',
    component: Amount,
  },
]

@NgModule({
  declarations: [Amount],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Amount],
})
export class AmountModule {}
