import { WeatherService } from './../../service/weather.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-desafio1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio1.component.html',
  styleUrls: ['./desafio1.component.css']
})
export class Desafio1Component {
  city: string = '';
  weatherData: any = null;

  // Injeta o serviço de clima na classe para poder utilizá-lo
  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (this.city.trim()) {
      // Chama o serviço para buscar o clima da cidade
      this.weatherService.getCurrentWeather(this.city).subscribe({
        // Se a requisição der certo, salva os dados na variável weatherData
        next: (data: any) => this.weatherData = data,

        // Se der erro exibe alerta e limpa os dados anteriores
        error: (err: any) => {
          console.error('Erro:', err);
          alert('Cidade não encontrada.');
          this.weatherData = null;
        }
      });
    }
  }
}
