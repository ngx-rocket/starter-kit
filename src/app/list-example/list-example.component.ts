import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExampleServiceService } from './example-service.service';
import { User } from './user.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit, OnDestroy {
  usersServices: User[] = [];
  users: User[] = [];
  user: User = {
    id: 0,
    login: '',
    type: '',
  }
  isEdit = false;
  userForm: FormGroup;

  @ViewChild(DataTableDirective, { static: false }) datatableElement: DataTableDirective;
  isDtInitialized = false;
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {
    pagingType: 'simple_numbers',
    pageLength: 10,
    processing: true,
    language: {
      emptyTable: 'Nenhum registro encontrado',
      info: 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
      infoEmpty: 'Mostrando 0 até 0 de 0 registros',
      infoFiltered: '(Filtrados de _MAX_ registros)',
      infoPostFix: '',
      lengthMenu: '_MENU_ resultados por página',
      loadingRecords: 'Carregando...',
      processing: 'Processando...',
      zeroRecords: 'Nenhum registro encontrado',
      search: 'Pesquisar',
      paginate: {
        next: 'Próximo',
        previous: 'Anterior',
        first: 'Primeiro',
        last: 'Último',
      },
      aria: {
        sortAscending: ': Ordenar colunas de forma ascendente',
        sortDescending: ': Ordenar colunas de forma descendente',
      },
    },
  };
  dtInstance: DataTables.Api;
  dtTriggerUser = new Subject();

  closeResult = '';
  private ngProcessosUnsubscribe = new Subject();

  constructor(private exampleService: ExampleServiceService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      login: new FormControl(null),
      type: new FormControl(null),
    });
    this.getUsers();
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  getUsers() {
    this.exampleService
      .getUsers()
      .pipe(takeUntil(this.ngProcessosUnsubscribe))
      .subscribe((users) => {
        console.log(users);
        const data = users;
        this.usersServices = JSON.parse(JSON.stringify(data));
        this.users = [];
        this.users = this.usersServices.slice(15);
      });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTriggerUser.next();
    });
  }

  open(content: any, user?: User) {
    if(user)
    {
      this.user = user;
      this.isEdit = true;
      this.userForm.controls.login.setValue(user.login);
      this.userForm.controls.type.setValue(user.type);
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {}
    );
  }

  save()
  {
    const user: User = {
      id: 999,
      login: this.userForm.get('login').value,
      type: this.userForm.get('type').value
    }
if(this.isEdit)
{
  const useredit = this.users.indexOf(this.user)
  this.users.splice(useredit, 1, user);
  this.isEdit = false;
  this.userForm.controls.login.setValue(null);
  this.userForm.controls.type.setValue(null);
}
else
{
  this.users.push(user);

}

    this.modalService.dismissAll();
  }

  confirmDelete() {
    const isDeleting = confirm('Would you like to delete this user?');
    if (!isDeleting) {
      return;
    }

    this.delete();
  }

  private delete() {
    const userremove = this.users.indexOf(this.user)
  this.users.splice(userremove, 1);
    }

  ngOnDestroy(): void {
    this.dtTriggerUser.unsubscribe();
    this.ngProcessosUnsubscribe.next();
    this.ngProcessosUnsubscribe.complete();
  }
}
