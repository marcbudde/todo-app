import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { StarComponent } from './star/star.component';
import { EnvironmentIndicatorComponent } from './environment-indicator/environment-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CreateTaskComponent,
    StarComponent,
    EnvironmentIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
