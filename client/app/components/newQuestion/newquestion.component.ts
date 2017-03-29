/**
 * Created by jeanliu on 3/22/17.
 */
import {Component} from '@angular/core';
import { QuestionService } from '../../service/questions/question.service';
import { Question } from '../questions/questions'
@Component({
  moduleId: module.id,
  selector: 'new-question',
  templateUrl: './newquestion.component.html',
  styleUrls: ['../../stylesheet.css']
})
export class NewQuestionComponent {
  questions: Question[];
  Name: string;
  Description: string;
  Requester: string;
  TimeLine: string;
  Prize: number;


  constructor(private questionService: QuestionService){
    this.questionService.getQuestions()
        .subscribe( questions => {
            this.questions = questions;
        });
  }

  addQuestion(event){
      event.preventDefault();
      var newQuestion = {
              Name:this.Name, //The Question name
              Description: this.Description, //A field to describe the Question
              Requester: this.Requester,
              TimeLine: this.TimeLine, //The Question timeline
              Prize: this.Prize
      };
      this.questionService.addQuestion(newQuestion)
          .subscribe( question => {
              this.questions.push(question);
              this.Name = '';
              this.Description = this.Description, //A field to describe the Question
              this.Requester = this.Requester,
              this.TimeLine = this.TimeLine, //The Question timeline
              this.Prize = this.Prize
          });
  }
}
