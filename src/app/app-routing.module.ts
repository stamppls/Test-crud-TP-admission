import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { AuthGuardService } from "ng6-md-auth";
import { AdmissionComponent } from "./pages/admission/admission.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "app-admission",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "app-admission", component: AdmissionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
