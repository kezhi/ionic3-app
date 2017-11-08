import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentCommissionPage } from './agent-commission';

@NgModule({
  declarations: [
    AgentCommissionPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentCommissionPage),
  ],
})
export class AgentCommissionPageModule {}
