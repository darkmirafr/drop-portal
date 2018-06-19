// Exact copy except import UserService from core
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RaceService } from './services/race.service';
import { Vote } from './vote';

@Component({
  templateUrl: './droprobot.component.html',
  providers: [RaceService]
})
export class DroprobotComponent {
  baseUrl: string = 'https://www.youtube.com/embed/';
  sCurrentVideo;
  race;
  public darkVotes: Vote;
  greenVotes;

  public barChartData: any[] = [
    { data: [1,0, 0, 0], label: 'Nombre de votes' }
  ];

  constructor(private sanitizer: DomSanitizer, private raceService: RaceService) {

    this.sCurrentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '-546aj22nOM');

    Observable.interval(1000).subscribe(x => {
      this.raceService.getRace().subscribe(data => {
        this.race = data;

        //DARKTEAM
        /*if (undefined != this.race.teams[0]) {
          let self = this;
          this.race.teams[0].players.forEach(player => {
            self.darkVotes[player.vote]++;
          });
          this.barChartData[0].data = [this.darkVotes.left, this.darkVotes.forward, this.darkVotes.right, this.darkVotes.back];
        }*/

        //GREEN TEAM



      })
    });


  }
  ngOnInit() {

  };

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['left', 'forward', 'right', 'back'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;


  public lineChartColors: Array<any> = [
    { 
      backgroundColor: '#87A61A',
      borderColor: '#87A61A',
      pointBackgroundColor: '#87A61A',
      pointBorderColor: '#87A61A',
      pointHoverBackgroundColor: '#87A61A',
      pointHoverBorderColor: '#87A61A'
    }
  ];
  public greenChartColor: Array<any> = [
    { 
      backgroundColor: '#000',
      borderColor: '#000',
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: '#000'
    }
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
