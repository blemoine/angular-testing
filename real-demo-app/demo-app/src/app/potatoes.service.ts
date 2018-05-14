import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export type Potato = string;

@Injectable()
export class PotatoesService {

    constructor(private http: HttpClient) {
    }

    getPotatoes(): Observable<Array<Potato>> {
        return this.http.get<Array<Potato>>('/potatoes');
    }
}
