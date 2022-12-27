import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-support-carrousel',
  templateUrl: './support-carrousel.component.html',
  styleUrls: ['./support-carrousel.component.scss']
})
export class SupportCarrouselComponent 
implements OnInit, OnDestroy {
  @Input() cards: Array<any> = [];

  timerSubs!: Subscription;


  private _indexActiveCard: number = 0;
  get indexActiveCard() {
    return this._indexActiveCard;
  }

  set indexImagemAtiva(value: number) {
    this._indexActiveCard =
      value < this.cards.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(1000).subscribe(() => {
      this.ativarImagem(
        this.indexActiveCard + 1
      );
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }


}
