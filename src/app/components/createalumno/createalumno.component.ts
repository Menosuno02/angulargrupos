import { Component, ViewChild, ElementRef } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { ServiceGrupos } from 'src/app/services/service.grupos';

@Component({
  selector: 'app-createalumno',
  templateUrl: './createalumno.component.html',
  styleUrls: ['./createalumno.component.css'],
})
export class CreatealumnoComponent {
  @ViewChild('cajaid') cajaIdRef!: ElementRef;
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaapellidos') cajaApellidosRef!: ElementRef;
  @ViewChild('cajaimagen') cajaImagenRef!: ElementRef;
  @ViewChild('selectactivo') selectFuncionesRef!: ElementRef;
  @ViewChild('cajacurso') cajaCursoRef!: ElementRef;

  constructor(private _service: ServiceGrupos) {}

  insertarAlumno(): void {
    var id = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var ape = this.cajaApellidosRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;
    var activo = parseInt(this.selectFuncionesRef.nativeElement.value);
    var curso = parseInt(this.cajaCursoRef.nativeElement.value);

    var newAlumn = new Alumno(id, nom, ape, imagen, activo, curso);

    console.log(newAlumn);

    this._service.create(newAlumn).subscribe((response) => {
      this;
    });
  }
}
