import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dash-cards',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './dash-cards.component.html',
  styleUrl: './dash-cards.component.css'
})
export class DashCardsComponent {

}
