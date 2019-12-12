import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SignupStepOneComponent } from "./signup-step-one/signup-step-one.component";
import { SignupStepTwoComponent } from "./signup-step-two/signup-step-two.component";
import { SignupStepThreeComponent } from "./signup-step-three/signup-step-three.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SearchComponent } from "./search/search.component";

export const COMPONENTS = [
  LoginComponent,
  WelcomeComponent,
  SearchComponent,
  SignupStepOneComponent,
  SignupStepTwoComponent,
  SignupStepThreeComponent
];

const routes: Routes = [
  {
    path: "",
    redirectTo: "/welcome",
    pathMatch: "full"
  },
  {
    path: "signup-step-one",
    component: SignupStepOneComponent
  },
  {
    path: "signup-step-two",
    component: SignupStepTwoComponent
  },
  {
    path: "signup-step-three",
    component: SignupStepThreeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "tabs",
    loadChildren: "~/app/tabs/tabs.module#TabsModule"
  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
