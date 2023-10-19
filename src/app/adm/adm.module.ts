import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AtorFormComponent } from "../Controle-Acervo/ator/ator-form/ator-form.component";
import { AtorComponent } from "../Controle-Acervo/ator/ator/ator.component";
import { ClasseFormComponent } from "../Controle-Acervo/classe/classe-form/classe-form.component";
import { ClasseComponent } from "../Controle-Acervo/classe/classe/classe.component";
import { DiretorFormComponent } from "../Controle-Acervo/diretor/diretor-form/diretor-form.component";
import DiretorComponent from "../Controle-Acervo/diretor/diretor/diretor.component";
import { ItemFormComponent } from "../Controle-Acervo/item/item-form/item-form.component";
import { ItemComponent } from "../Controle-Acervo/item/item/item.component";
import { TituloFormComponent } from "../Controle-Acervo/titulo/titulo-form/titulo-form.component";
import { TituloComponent } from "../Controle-Acervo/titulo/titulo/titulo.component";
import { AppMaterialModule } from "../shared/app-material/app-material.module";
import { SharedModule } from "../shared/shared.module";
import { AdmRoutingModule } from "./adm-routing.module";
import { AdmComponent } from "./adm/adm.component";



@NgModule({
  declarations: [
    AdmComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    ItemComponent,
    TituloComponent,
    //------------------------------------------
    AtorFormComponent,
    ClasseFormComponent,
    DiretorFormComponent,
    ItemFormComponent,
    TituloFormComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdmModule { }
