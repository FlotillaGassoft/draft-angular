import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavbarContainer } from './navbar-container/navbar-container.component'
import { ActionCard } from './action-card/action-card.component'
import { PageTitle } from './page-title/page-title.component'
import { SubmitButton } from './submit-button/submit-button.component'

@NgModule({
  declarations: [NavbarContainer, ActionCard, PageTitle, SubmitButton],
  imports: [CommonModule, RouterModule],
  exports: [NavbarContainer, ActionCard, PageTitle, SubmitButton],
})
export class ComponentsModule {}
