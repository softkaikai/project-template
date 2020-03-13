import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';


@Component({
    selector: 'uui-button',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class ButtonComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

    constructor () {

    }


    ngAfterViewInit (): void {

    }

    ngOnChanges (changes: SimpleChanges): void {

    }

    ngOnDestroy (): void {
    }
}
