import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PracticeOneComponent } from './practice-one/practice-one.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SineUpComponentComponent } from './sine-up-component/sine-up-component.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { HeadPhoneComponent } from './product/head-phone/head-phone.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';

const routes: Routes = [
  {path:'', redirectTo :'Login', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Practice', component: PracticeOneComponent},
  {path:'AgGrid', component: AgGridComponent},
  {path:'Admin', component: AdminInfoComponent},
  {path:'Product', component: ProductComponent,children : [
     {path : 'Mobile',component :MobileComponent},
     {path : 'HeadPhone',component :HeadPhoneComponent}
  ]},
  {path:'Contact/:id', component: ContactComponent},
  {path:'SineUp', component: SineUpComponentComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
