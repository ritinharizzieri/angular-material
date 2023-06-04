import { Component } from '@angular/core';
import { DATA_MOVIES } from './model/data-movies';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  public dataSource = DATA_MOVIES
  public displayedNameColumns: string[] = ['name', 'category', 'rating', 'year', 'director']
}
