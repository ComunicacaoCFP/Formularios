import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  ngOnInit(){
    var links = document.querySelectorAll("a");
    links.forEach(element => { 
      element.addEventListener("click", () =>{
        element.className = "active"; 
        links.forEach(el => {if(el != element){el.className=""}})
      });      
    });
  }
}
