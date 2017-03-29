"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jeanliu on 3/22/17.
 */
var core_1 = require('@angular/core');
var question_service_1 = require('../../service/questions/question.service');
var NewQuestionComponent = (function () {
    function NewQuestionComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questionService.getQuestions()
            .subscribe(function (questions) {
            _this.questions = questions;
        });
    }
    NewQuestionComponent.prototype.addQuestion = function (event) {
        var _this = this;
        event.preventDefault();
        var newQuestion = {
            Name: this.Name,
            Description: this.Description,
            Requester: this.Requester,
            TimeLine: this.TimeLine,
            Prize: this.Prize
        };
        this.questionService.addQuestion(newQuestion)
            .subscribe(function (question) {
            _this.questions.push(question);
            _this.Name = '';
            _this.Description = _this.Description,
                _this.Requester = _this.Requester,
                _this.TimeLine = _this.TimeLine,
                _this.Prize = _this.Prize;
        });
    };
    NewQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-question',
            templateUrl: './newquestion.component.html',
            styleUrls: ['../../stylesheet.css']
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());
exports.NewQuestionComponent = NewQuestionComponent;
//# sourceMappingURL=newquestion.component.js.map