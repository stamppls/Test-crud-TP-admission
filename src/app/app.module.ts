import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderToolbarComponent } from "./components/header-toolbar/header-toolbar.component";
import { environment } from "src/environments/environment";
import { AuthModule } from "ng6-md-auth";
import { AdmissionComponent } from './pages/admission/admission.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

const apiSrvCfg = environment;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderToolbarComponent,
    AdmissionComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule,
    NgxSpinnerModule,
    AuthModule.forRoot(apiSrvCfg),
    ScrollDispatchModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
