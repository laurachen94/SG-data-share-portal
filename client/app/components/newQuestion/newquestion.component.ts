/**
 * Created by jeanliu on 3/22/17.
 */
import {Component} from '@angular/core';
import { QuestionsComponent} from '../questions/questions.components'

@Component({
  moduleId: module.id,
  selector: 'new-question',
  templateUrl: './newquestion.component.html',
  styleUrls: ['../../stylesheet.css']
})
export class NewQuestionComponent {
  title = "Create New Question";
}
