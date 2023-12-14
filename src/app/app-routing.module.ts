import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: 'tables', component: TablesComponent,
  },
  {
    path: 'profile', component: ProfileComponent,
  },
  {
    path: 'forms', component: FormsComponent,
  },
  {
    path: '', component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
