import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvServiceProvider } from './env.service.provider';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EnvServiceProvider],
})
export class AppRoutingModule { }
