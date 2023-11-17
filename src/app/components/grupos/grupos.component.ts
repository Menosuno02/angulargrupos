import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { ServiceGrupos } from 'src/app/services/service.grupos';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  public alumnos!: Alumno[];
  public grupos: string[][] = [[], [], [], [], [], [], [], []];

  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(
    private _service: ServiceGrupos,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this._service.getAlumnos().subscribe((response) => {
      this.alumnos = response;
    });
  }

  generarGrupos(): void {
    this.playAudio();
    let tamanyoGrupos = Math.floor(this.alumnos.length / this.grupos.length);
    let intervalo = setInterval(() => {
      let index = Math.floor(Math.random() * this.alumnos.length);
      let alumno: Alumno = this.alumnos[index];
      this.alumnos.splice(index, 1);
      while (this.alumnos.length >= 0) {
        let indexGroup = Math.floor(Math.random() * this.grupos.length);
        if (this.alumnos.length == 0) {
          this.grupos[indexGroup].push(`${alumno.nombre} ${alumno.apellidos}`);
          clearInterval(intervalo);
          break;
        } else if (this.grupos[indexGroup].length < tamanyoGrupos) {
          this.grupos[indexGroup].push(`${alumno.nombre} ${alumno.apellidos}`);
          if (this.grupos[indexGroup].length == tamanyoGrupos + 1)
            tamanyoGrupos--;
          break;
        }
      }
    }, 500);
  }

  devolverAlumnos(): void {
    this._service.getAlumnos().subscribe((response) => {
      this.alumnos = response;
      this.grupos = [[], [], [], [], [], [], [], []];
    });
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('derecha');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  playAudio() {
    if (isPlatformBrowser(this.platformId)) {
      const audio = new Audio();
      audio.src = '/assets/audio/audio.mp3'; // Ruta al archivo de audio
      audio.load();
      audio.play();
    }
  }
}
