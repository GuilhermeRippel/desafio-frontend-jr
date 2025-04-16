import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio2',
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio2.component.html',
  styleUrl: './desafio2.component.css'
})
export class Desafio2Component {
  //Incializei as variáveis que irei temporáriamente salvar os valores digitados nos inputs
  nome: string = ''
  idade: string = ''
  telefone: string = ''
  email: string = ''
  endereco: string = ''
  numero: string = ''
  bairro: string = ''
  cidade: string = ''
  etapaFormulario = 1

  //Criei o objeto para ficar facil de acessar os dados (Só é preenchido após todas validações)
  dadosExibidos: {nome: string; idade: string; telefone: string; email: string; endereco: string; numero:string; bairro: string; cidade: string} | null = null 


  exibirDados(){
    if(!this.endereco.trim() || !this.numero || !this.bairro.trim() || !this.cidade.trim()){
      alert('Preencha todos os campos')
      return
    }
    this.etapaFormulario++
    this.dadosExibidos = {
      nome: this.nome,
      idade: this.idade,
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade
    }
  }

  //Função para trocar a visualização de etapa do formulário
  avancarFormulario(){
      //Parte da lógica para validar o formato do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      //Duas validações: Formato de email e se todos campos estão preenchidos
      if(!this.nome.trim() || !this.idade || !this.telefone.trim() || !this.email.trim()){
        alert('Preencha todos os campos')
        return
      } else if (!emailRegex.test(this.email)) {
        alert('Formato de e-mail inválido');
        return;
      }else {
        //Atualiza a variável para alterar o conteúdo no HTML
        this.etapaFormulario++
      }
  }

  voltarFormulario(){
    //Basicamente a mesma coisa da outra função para trocar o conteúdo do HTMl mas de maneira inversa
    this.etapaFormulario--
  }
}
