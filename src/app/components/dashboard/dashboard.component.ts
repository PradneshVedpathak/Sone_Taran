import { Component } from '@angular/core';
import { DashCardsComponent } from "../dash-cards/dash-cards.component";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashCardsComponent, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', image: 'https://via.placeholder.com/150', content: 'This is card 1 content.' },
    { title: 'Card 2', image: 'https://via.placeholder.com/150', content: 'This is card 2 content.' },
    { title: 'Card 3', image: 'https://via.placeholder.com/150', content: 'This is card 3 content.' },
    { title: 'Card 4', image: 'https://via.placeholder.com/150', content: 'This is card 4 content.' },
  ];
}
