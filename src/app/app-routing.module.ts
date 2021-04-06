import { CustomersComponent } from './components/customers/customers.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './components/layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "orders",
        component: OrdersComponent,
      },
      {
        path: "reports",
        component: ReportsComponent,
      },
      {
        path: "customers",
        component: CustomersComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "stock",
        component: StockHomeComponent,
        children: [
          {
            path: "create",
            component: StockCreateComponent,
          },
          {
            path: "edit",
            component: StockEditComponent,
          },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
