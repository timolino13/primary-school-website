import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-leggere-orologio',
    templateUrl: './leggere-orologio.component.html',
    styleUrls: ['./leggere-orologio.component.scss']
})
export class LeggereOrologioComponent implements OnInit, AfterViewInit {
    @ViewChild('canvas', {static: true})

    canvas!: ElementRef<HTMLCanvasElement>;

    private ctx!: CanvasRenderingContext2D;

    radius: any;

    pickedTime = '00:00 AM';

    myEmitter = new EventEmitter();
    private hour = 0;
    private minute = 0;
    correctAnswer = '';
    answered = false;
    answeredCorrectly = false;

    constructor() {
    }

    ngOnInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
        this.radius = this.canvas.nativeElement.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;

        console.log(this.radius);
        console.log('answered:' + this.answered);
    }

    ngAfterViewInit(): void {
        this.next();
    }

    next(): any {
        this.pickedTime = '00:00 AM';
        this.answered = false;
        this.answeredCorrectly = false;
        this.drawFace(this.ctx, this.radius);
        this.drawNumbers(this.ctx, this.radius);
        this.drawTime(this.ctx, this.radius);
    }

    drawFace(ctx: CanvasRenderingContext2D, radius: number): any {

        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();

        ctx.lineWidth = radius * 0.1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }

    drawNumbers(ctx: CanvasRenderingContext2D, radius: number): any {
        let ang;
        ctx.font = radius * 0.15 + 'px arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        for (let num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }

    drawTime(ctx: CanvasRenderingContext2D, radius: number): any {
        this.hour = Math.round((Math.random() * 12));
        console.log('hour:', this.hour);

        this.minute = Math.ceil((Math.random() * 55) / 5) * 5;
        console.log('minute:', this.minute);

        const minuteStr = this.minute < 10 ? '0' + this.minute.toString() : this.minute;
        this.correctAnswer = this.hour.toString() + ':' + minuteStr.toString() + ' AM';

        // hour
        this.hour = this.hour % 12;
        const hour = (this.hour * Math.PI / 6) + (this.minute * Math.PI / (6 * 60));
        this.drawHand(ctx, hour, radius * 0.5, radius * 0.07, 'black');

        // minute
        const minute = (this.minute * Math.PI / 30);
        this.drawHand(ctx, minute, radius * 0.8, radius * 0.07, 'black');
    }

    drawHand(ctx: CanvasRenderingContext2D, pos: number, length: number, width: number, color: string): any {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

    check(): any {
        console.log('hour:', this.hour);

        if (this.pickedTime === this.correctAnswer) {
            this.answered = true;
            this.answeredCorrectly = true;
        } else {
            this.answered = true;
        }
    }
}
