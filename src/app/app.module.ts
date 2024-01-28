import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PracticeOneComponent } from './practice-one/practice-one.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SineUpComponentComponent } from './sine-up-component/sine-up-component.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { HeadPhoneComponent } from './product/head-phone/head-phone.component';
import { DirectiveOneDirective } from './directive-one.directive';
import { PipePipe } from './pipe.pipe';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule} from 'ag-grid-angular'
import { ByteArrayToUrlPipe } from './byteArrayToUrl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PracticeOneComponent,
    NavBarComponent,
    LoginComponent,
    AdminInfoComponent,
    ErrorComponent,
    ProductComponent,
    ContactComponent,
    SineUpComponentComponent,
    MobileComponent,
    HeadPhoneComponent,
    DirectiveOneDirective,
    PipePipe,
    ByteArrayToUrlPipe,
    AgGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
