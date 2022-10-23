import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteioComponent } from './jogo/sorteio/sorteio.component';

const routes: Routes = [
  {
    path: 'jogo/sorteio',
    component: SorteioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
