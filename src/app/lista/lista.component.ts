import { Component , OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  implements OnInit{
 itens: any[] = [];
 itemEscolhido:string ='';
 @Output() itemSelecionado: any = new EventEmitter<number>();
 @Input() dados: any[]= [{ id: 0 , nome:'' , descricao:''}];

  ngOnInit(){  
    
 ;   this.dados.forEach(elementoDados => {
      this.itens.push(elementoDados);
    });

    console.log(this.itens);
    console.log(this.itemSelecionado);
  
  }

 emissorDeId(itemEmissorId: any){
  this.itemSelecionado.emit(itemEmissorId.id);
 }

 mudaCorItemEscolhido( itemEscolhido:string): any{
   this.itemEscolhido = itemEscolhido;
}
}