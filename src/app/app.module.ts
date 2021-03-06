import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuComponent} from './menu/menu.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatInputModule, MatListModule, MatOptionModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatSelectModule, MatProgressSpinnerModule, MatSliderModule
} from "@angular/material";
import {DishdetailComponent} from './dishdetail/dishdetail.component';
import {DishService} from "./services/dish.service";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {PromotionService} from "./services/promotion.service";
import {LeaderService} from "./services/leader.service";
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {baseURL} from "./shared/baseUrl";
import {ProcessHttpmsgService} from "./services/process-httpmsg.service";
import {RestangularConfigFactory} from "./services/restConfig";
import {RestangularModule} from "ngx-restangular";
import {HighlightDirective} from './directives/highlight.directive';
import {FeedbackService} from "./services/feedback.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DishService, PromotionService, LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHttpmsgService, FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
