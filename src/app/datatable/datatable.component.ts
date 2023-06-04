import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DATA_MOVIES } from './model/data-movies';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements AfterViewInit {
  public dataSource = new MatTableDataSource(DATA_MOVIES)
  public displayedNameColumns: string[] = ['name', 'category', 'rating', 'year', 'director']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator
  }

}
