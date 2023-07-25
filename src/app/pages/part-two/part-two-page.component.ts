import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two-page.component.html',
  styleUrls: ['./part-two-page.component.css']
})
export class PartTwoPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    }

  switcher(){
      this.router.navigate(['switcher'], {relativeTo:this.route});
  }

  graphs(){
      this.router.navigate(['graphs'], {relativeTo:this.route});
  }

  counter(){
    this.router.navigate(['counter'], {relativeTo:this.route});
  }

 
}

