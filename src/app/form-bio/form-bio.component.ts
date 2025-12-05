import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'form-bio',
  templateUrl: './form-bio.component.html',
  styleUrls: ['./form-bio.component.css'],
})
export class FormBioComponent {
  formObject = {
    lab: "",
    docente: "",
    compCurr: "",
    titulo: "",
    finalidade: "",
    data: "",
    horario: "",
    qtdEqM: "",
    qtdRS: "",
    outros: "",
    dataHoje: "",
    docenteAss: "",
    siape: "",
    email: "",
    phone: "",
    emailTo: "anappm@ufrb.edu.br, evandroq@ufrb.edu.br"
  }
  ngOnInit(){
    var button = <HTMLButtonElement>document.querySelector("button");
    var pr = false;
    button.addEventListener("click", (e) => {
    var obr = document.getElementsByClassName("obr");
    var error = <HTMLSpanElement>document.querySelector(".error");   
        for (let i = 0; i < obr.length; i++) {    
          if(!(<HTMLInputElement>obr[i]).value){
              pr = false; 
              error.innerText = "Preencha os campos obrigatórios"; 
              e.preventDefault();
              break;           
          }
          else {pr = true;}
        } 
      if(pr) this.sendEmail(e);
    });
        
    var errorI = <HTMLSpanElement>document.querySelector(".errorTI");
    var errorII = <HTMLSpanElement>document.querySelector(".errorTII");
    const comp = <HTMLInputElement>document.querySelector("input[name=comp]");
    const termo = <HTMLInputElement>document.querySelector("input[name=termo]");
       
    comp!.addEventListener("click", function(e){
      if(!comp.checked){
        button.disabled = true;
        errorI.innerHTML = "Selecione para continuar.";
        button.style.backgroundColor='#808080';
      }
      else{
        errorI.innerHTML = "";
        if(!termo.checked){
          button.disabled = true;
          button.style.backgroundColor='#808080';
        }
        else{
          if(pr){
            button.disabled = false;
            button.style.backgroundColor='#0000ff';
        }
        }
      }
    });
    termo.addEventListener("click", function(e){
      if(!termo.checked){
        errorII.innerHTML = "Selecione para continuar.";
        button.disabled = true;
        button.style.backgroundColor='#808080';
      }
      else{
        errorII.innerHTML = "";
        if(!comp.checked){
          button.disabled = true;
          button.style.backgroundColor='#808080';
        }
        else{
          button.disabled = false;
          button.style.backgroundColor='#0000ff';
        }
      }
    });
    const tel = <HTMLInputElement>document.getElementById('tel') // Seletor do campo de telefone

    tel.addEventListener('keypress', (ev) => mascaraTelefone((<HTMLInputElement>ev.target).value)) // Dispara quando digitado no campo
    tel.addEventListener('change', (ev) => mascaraTelefone((<HTMLInputElement>ev.target).value)) // Dispara quando autocompletado o campo

    const mascaraTelefone = (valor: string) => {
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
        tel.value = valor // Insere o(s) valor(es) no campo
    }
  }
  public sendEmail(e: Event) {
    var button = <HTMLButtonElement>document.querySelector("button");
    button.innerText = "Enviando...";
    const lab = document.querySelector("input[name=lab]:checked");
    if (lab != null) { this.formObject["lab"] = (<HTMLElement>document.querySelector("label[for=" + lab.id + "]"))!.innerText; }
    const docente = document.querySelector("textarea[name=docente]");
    this.formObject["docente"] = (<HTMLTextAreaElement>docente)!.value;
    const compCurr = document.querySelector("textarea[name=compCurr]");
    this.formObject["compCurr"] = (<HTMLTextAreaElement>compCurr)!.value;
    const titulo = document.querySelector("textarea[name=titulo]");
    this.formObject["titulo"] = (<HTMLTextAreaElement>titulo)!.value;
    const finalidade = document.querySelector("input[name=finalidade]:checked");
    if (finalidade != null) this.formObject["finalidade"] = (<HTMLElement>document.querySelector("label[for=" + finalidade.id + "]")).innerText;
    const data = document.querySelector("input[name=data]");
    this.formObject["data"] = (<HTMLInputElement>data).value;
    const horario = document.querySelector("input[name=horario]");
    this.formObject["horario"] = (<HTMLInputElement>horario).value;
    const qtdEqM = document.querySelector("textarea[name=qtdEqM]");
    this.formObject["qtdEqM"] = (<HTMLTextAreaElement>qtdEqM).value;
    const qtdRS = document.querySelector("textarea[name=qtdRS]");
    this.formObject["qtdRS"] = (<HTMLTextAreaElement>qtdRS).value;
    const outros = document.querySelector("textarea[name=outros]");
    this.formObject["outros"] = (<HTMLTextAreaElement>outros).value;
    const dataHoje = document.querySelector("input[name=dataHoje]");
    this.formObject["dataHoje"] = (<HTMLInputElement>dataHoje).value;
    const docenteAss = document.querySelector("input[name=docenteAss]");
    this.formObject["docenteAss"] = (<HTMLInputElement>docenteAss).value;
    const siape = document.querySelector("input[name=siape]");
    this.formObject["siape"] = (<HTMLInputElement>siape).value;
    const email = document.querySelector("input[name=email]");
    this.formObject["email"] = (<HTMLInputElement>email).value;
    const phone = document.querySelector("input[name=tel]");
    this.formObject["phone"] = (<HTMLInputElement>phone).value;
    e.preventDefault();
    var form = <HTMLFormElement> document.querySelector("form");
    emailjs
      .send('service_u70ats4', 'template_7mnzhd9', this.formObject, {
        publicKey: 'diTY7nqCn3m7kVJc2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.innerHTML = "<h2 class='success'>Formulário enviado com sucesso!</h2>";
        },
        (error) => {
          console.log('FAILED...', error, (error as EmailJSResponseStatus).text);
          form.innerHTML = "<h2 class='error'>Falha no envio do formulário. Tente novamente.</h2>";
        },
      );
  }
}