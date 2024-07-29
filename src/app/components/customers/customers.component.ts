import { Component } from '@angular/core';
import { CustomerChartComponent } from "../customer-chart/customer-chart.component";
import { CustomerListComponent } from "../customer-list/customer-list.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerChartComponent, CustomerListComponent, MatCardModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

}
