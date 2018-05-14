import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tartiflette} from '../tartiflette.service';

@Component({
    selector: 'tartiflette',
    template: `
        <h2>Tartiflette</h2>
        <p *ngIf="tartiflette" class="tartiflette">{{tartiflette}}</p>

        <input type="button" value="cook!" (click)="cook.emit()"/>
    `,
})
export class TartifletteComponent {
    @Input()
    public tartiflette: Tartiflette;
    @Output()
    public cook: EventEmitter<void> = new EventEmitter();
}
