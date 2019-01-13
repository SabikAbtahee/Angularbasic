import { Component ,Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
otherTheme: boolean = false;
 @Input() theme:string="";
 @Input() themes: Array<number> = [0,0];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    if (localStorage.getItem("theme") == null) {
      localStorage.setItem("theme","theme1");
    } 
    else{
      this.theme=localStorage.getItem("theme");
    }
    this.changeTheme2();
    
  }

  

  changeTheme(themeSelect:string="") {
    this.theme=themeSelect;
    localStorage.setItem("theme",this.theme);
    this.changeTheme2();
  }
  changeTheme2(){
    if(this.theme=="theme1"){
      this.themes[0]=1;
      this.themes[1]=0;
    }
    else if(this.theme=="theme2"){
      this.themes[1]=1
      this.themes[0]=0;
    }



    
  }

}
