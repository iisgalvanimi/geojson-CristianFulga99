import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AgmCoreModule.forRoot({apiKey: 'AIzaSyCYLeJQdYOUqA8OPRQADb1tb70UMf4ogDA'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
