import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, catchError, of } from "rxjs";
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
import { ErroDialogComponent } from "src/app/shared/components/erro-dialog/erro-dialog.component";
import { Diretor } from "../model/diretor";
import { DiretorService } from "../services/diretor.service";

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export default class DiretorComponent implements OnInit{
  listaDiretor$: Observable<Diretor[]>;
  displayedColumns = ['nome','actions'];

  editMode = false;

  constructor(
    private diretorService: DiretorService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ){
    //this.atorService = new AtorService();
    this.listaDiretor$ = this.diretorService.list().pipe(
      catchError(erro => {
        this.onErro('Erro ao carregar Diretores:');
        return of([])
      }),
    );
  }
  ngOnInit(): void {}


  onErro(msg: string){
    this.dialog.open(ErroDialogComponent, {
      data: msg
    });
  }

  onAdd(){
    this.router.navigate(['newDiretorForm'],{relativeTo: this.route});
    //console.log("oi");
  }





  onEdit(id: string) {
    this.router.navigate(['editarDiretor',id], { relativeTo: this.route });
  }

  onDelete(diretor: Diretor) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse diretor?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.diretorService.remove(diretor._id).subscribe(
          () => {
            this.refresh(); 
            this.snackBar.open('Diretor removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          (erro) => this.onErro(erro.error) 
        );
      }
    });
  }

  refresh() {
    this.listaDiretor$ = this.diretorService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Diretores.');
          return of([])
        })
      );
  }

}
