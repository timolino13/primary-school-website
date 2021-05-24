import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Coin} from '../../../models/Coin';

@Component({
    selector: 'app-riconoscere-soldi',
    templateUrl: './riconoscere-soldi.component.html',
    styleUrls: ['./riconoscere-soldi.component.scss']
})
export class RiconoscereSoldiComponent implements OnInit {

    coins: Coin[] = [];

    drawer: Coin[] = [];

    priceToPay = 0;
    pricePaid = 0;

    paid = false;

    constructor() {
    }

    ngOnInit(): void {
        this.initCoins();
        this.next();
    }

    initCoins(): void {
        this.coins.push(new Coin('0.05', 0.05, 'assets/conoscenzeGenerali/coins/005.png'));
        this.coins.push(new Coin('0.1', 0.1, 'assets/conoscenzeGenerali/coins/010.png'));
        this.coins.push(new Coin('0.2', 0.2, 'assets/conoscenzeGenerali/coins/020.png'));
        this.coins.push(new Coin('0.5', 0.5, 'assets/conoscenzeGenerali/coins/050.png'));
        this.coins.push(new Coin('1', 1, 'assets/conoscenzeGenerali/coins/1.png'));
        this.coins.push(new Coin('2', 2, 'assets/conoscenzeGenerali/coins/2.png'));
        this.coins.push(new Coin('5', 5, 'assets/conoscenzeGenerali/coins/5.png'));
    }

    drop(event: CdkDragDrop<Coin[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else if (event.previousContainer.id === 'cdk-drop-list-1') {
            copyArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
            this.drawer.sort(this.compare);
        } else if (event.previousContainer.id === 'cdk-drop-list-0') {
            if (event.previousIndex > -1) {
                this.drawer.splice(event.previousIndex, 1);
            }
        }
        this.checkPaid();
    }

    compare(a: Coin, b: Coin): number {
        if (a.value < b.value) {
            return -1;
        }
        if (a.value > b.value) {
            return 1;
        }
        return 0;
    }

    generatePrice(): void {
        this.priceToPay = Math.random() * (15);
        this.priceToPay = Math.round((this.priceToPay + Number.EPSILON) * 10) / 10;

        if (Math.round(Math.random())) {
            this.priceToPay += 0.05;
        }
    }

    checkPaid(): void {
        this.pricePaid = 0;
        for (const coin of this.drawer) {
            this.pricePaid += coin.value;
        }

        if (this.pricePaid === this.priceToPay) {
            this.paid = true;
        }
    }

    next(): void {
        this.drawer = [];
        this.paid = false;
        this.pricePaid = 0;
        this.priceToPay = 0;
        this.generatePrice();
    }
}
