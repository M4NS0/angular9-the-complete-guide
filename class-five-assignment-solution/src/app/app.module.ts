import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameOddComponent } from './game-odd/game-odd.component';
import { GameEvenComponent } from './game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    GameOddComponent,
    GameEvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
