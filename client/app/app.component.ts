import { Component } from '@angular/core';
import { QuestionService } from './service/questions/question.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers: [QuestionService]
})
export class AppComponent{ }
