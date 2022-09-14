import {Component, OnInit} from '@angular/core';
import {LolService} from "../services/lol.service";
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import {closeSidePanel, openSidePanel} from "../../redux/home.actions";
import {RootState} from "../../redux";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openPanel: boolean = false;
  torneos: any[] = [];
  public addTournament!: FormGroup;

  showFiller = false;

  constructor(private lolService: LolService,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private store: Store) {
    this.addTournament = this.formBuilder.group({
      title: '',
      from: '',
      to: ''
    });
  }

  ngOnInit() {
    this.lolService.getAllTorneos().subscribe(res => {
      console.log(res)
      this.torneos = res
    })

    this.store.select((s: any) => s.home).subscribe(s => {
      //console.log('STORE: ', s)
      this.openPanel = s.sidePanel;
      //console.log('RESPONSE CARS: ', s, this.openPanel)
    })

  }

  /**
   * Logout to go to Login view
   * @public
   */
  public onLogout(): void {
    this.authService.logout();
  }

  onOpenSidePanel() {
    this.store.dispatch(openSidePanel())
  }

  onCloseSidePanel() {
    this.store.dispatch(closeSidePanel())
  }

  createTournament(){
    console.log(this.addTournament.value)
    this.lolService.createTournament({
      title: this.addTournament.value.title,
      startDate: this.addTournament.value.from,
      endDate: this.addTournament.value.to
    }).subscribe( res => {
      this.openPanel = false;
      window.location.reload()
    })
  }


}
