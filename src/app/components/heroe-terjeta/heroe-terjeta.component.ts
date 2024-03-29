import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-terjeta',
  templateUrl: './heroe-terjeta.component.html',
  styleUrls: ['./heroe-terjeta.component.css']
})
export class HeroeTerjetaComponent implements OnInit {

  @Input() heroe:any = {}
  @Input() index:number = 0

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {

  }
  verHeroe(){
    // console.log(this.index);
     this.router.navigate(['/heroe', this.index])
    // this.heroeSeleccionado.emit(this.index)


  }

}
