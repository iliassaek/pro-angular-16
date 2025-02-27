import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration
} from '@angular/platform-browser';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TermsGuard } from './terms.guard';
import { LoadGuard } from './load.guard';
import { PlatformService } from './plateform.service';
import { BrowserGuard } from './browser.guard';
import { SimpleComponent } from './simple.component';

@NgModule({
  declarations: [AppComponent, SimpleComponent],
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule, routing],
  providers: [
    TermsGuard,
    LoadGuard,
    provideClientHydration(),
    PlatformService,
    BrowserGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
