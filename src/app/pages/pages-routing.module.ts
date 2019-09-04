import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './pages.routing';

@NgModule({
  imports: [APP_ROUTES],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
