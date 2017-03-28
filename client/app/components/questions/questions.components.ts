/**
 * Created by laurachen on 3/28/17.
 */
import {Component} from '@angular/core';
import {QuestionService} from '../../service/questions/question.service';
import { Question } from './questions'
@Component({
    moduleId: module.id,
    selector: 'questions',
    templateUrl: `./questions.components.html`,
    styleUrls:[`../../stylesheet.css`],
})

export class QuestionsComponent{
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

    deleteQuestion(id){
        var questions = this.questions;
        this.questionService.deleteQuestion(id)
            .subscribe( data => {
                if(data.n == 1){
                    for(var i = 0; i < questions.length; i++){
                        if(questions[i]._id == id){
                            questions.splice(i, 1);
                        }
                    }
                }
            });
        }
}