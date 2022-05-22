import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/component/confirm-dialog/confirm-dialog.component';
import { Employee } from 'src/app/service/employee';
import { EmployeeService } from 'src/app/service/employee.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['no', 'name', 'username', 'email', 'birthDate', 'basicSalary', 'status', 'group', 'description', 'action'];
  dataSource: any;

  employee: Employee[];
  searchForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: EmployeeService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('auth') !== 'yes') {
      this.router.navigate(['./login']);
      this.snackbar.open('Anda harus login terlebih dahulu', 'Tutup', {duration: 5000})
    } else {
      this.initSearchForm();
      if (history.state.search) {
        this.searchForm.get('search')?.setValue(history.state.search)
      }
      this.getData(this.searchForm.get('search')?.value)
    }
  }

  initSearchForm() {
    this.searchForm = this.fb.group({
      search: [null, Validators.required]
    })
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  addEmployee() {
    this.router.navigate(['./action'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        m: 'add',
      },
    });
  }

  editEmployee(id: any) {
    this.router.navigate(['./action'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        m: 'edit',
        id: id
      },
    });
  }

  deleteEmployee(id: any) {
    this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'danger-dialog',
      autoFocus: false,
      width: '420px',
      disableClose: true,
    })
    .afterClosed().subscribe((result) => {
      if (result) {
        this.service.delete(id).subscribe((result) => {
          if (result) {
            this.snackbar.open('Data berhasil dihapus', 'Tutup', {duration: 5000, panelClass: "delete"})
            this.getData()
          }
        })
      }
    })
  }

  getData(search?: any) {
    this.service.getData(search).subscribe((result: any) => {
      this.employee = result
      this.dataSource = new MatTableDataSource<Employee>(this.employee)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  search(event: any) {
    this.getData(event.target.value)
  }

  viewDetail(id: any) {
    this.router.navigate(['detail'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        id: id
      },
      state: {
        search: this.searchForm.get('search')?.value
      }
    })
  }

}
