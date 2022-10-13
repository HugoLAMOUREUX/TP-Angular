import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiseuseComponent } from './components/liseuse/liseuse.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PlancheComponent } from './components/planche/planche.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LiseuseComponent,
    ToolbarComponent,
    PlancheComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
