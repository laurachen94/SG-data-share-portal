import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { QuestionsComponent} from './components/questions/questions.components'
import { NewQuestionComponent } from './components/newQuestion/newquestion.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    QuestionsComponent,
    NewQuestionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }