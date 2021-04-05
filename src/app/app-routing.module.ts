import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './components/layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { StockComponent } from './components/pages/stock/stock.component';

const routes: Routes = [
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "stock",
        component: StockComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
