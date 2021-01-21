import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  AccordionModule,
  ButtonModule,
  DocumentationModule,
  DropdownModule
} from "carbon-components-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    AccordionModule,
    DocumentationModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
