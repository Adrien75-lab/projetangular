import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PangolinListComponent } from './pangolin-list/pangolin-list.component';
import { SinglePangolinComponent } from './book-list/single-pangolin/single-pangolin.component';
import { PangolinFormComponent } from './book-list/pangolin-form/pangolin-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './services/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PangolinsService } from './services/pangolins.service';
import { AuthService } from './services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'pangolins', component: PangolinListComponent },
  { path: 'pangolins/new', component: PangolinFormComponent },
  { path: 'pangolins/view/:id', component: SinglePangolinComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PangolinListComponent,
    SinglePangolinComponent,
    PangolinFormComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, PangolinsService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
