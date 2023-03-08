import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  itensPai: any[] =[
    {id:2,nome:'Ciclano',descricao:'Eu sou o Ciclano...'} ,
    {id:3,nome:'Beltrano',descricao:'Eu sou o Beltrano...'},
    {id:4,nome:'Fulanis',descricao:'Eu sou o Fulanis...'}
];
  itemSelecionado:number = 0;

  ngOnInit(){

  }

 noItemSelecinado( id: number){
  this.itemSelecionado = id;
  console.log(`Id Selecionaco: ${id}`)

 }
zerarArray(){
  this.itensPai = [];
  console.log(this.itensPai);
}

}
