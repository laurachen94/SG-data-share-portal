import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {
    constructor(private http:Http){
        console.log('Question Service Initralize....')
    }
    getQuestions(){
        return this.http.get('http://localhost:3000/api/questions')
            .map(res=> res.json());
    }

    addQuestion(newQuestion){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/question', JSON.stringify(newQuestion), {headers:headers})
            .map(res => res.json())
    }

    deleteQuestion(id){
        return this.http.delete('/api/question/'+id)
            .map(res => res.json());
    }
    // getQuestionsSlowly(): Promise<Question[]> {
    //     return new Promise(resolve => {
    //         // Simulate server latency with 2 second delay
    //         setTimeout(() => resolve(this.getQuestions()), 2000);
    //     });
    // }
}
