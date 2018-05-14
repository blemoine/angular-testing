import { Injectable } from '@angular/core';

export type Reblochon = 'reblochon';
@Injectable()
export class CheeseService {
  getReblochon(): Reblochon {
    return 'reblochon';
  }
}
