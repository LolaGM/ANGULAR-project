import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one-page.component.html',
  styleUrls: ['./part-one-page.component.css']
})
export class PartOnePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    }

  display(){
      this.router.navigate(['display'], {relativeTo:this.route});
  }

  communication(){
      this.router.navigate(['communication'], {relativeTo:this.route});
  }

  crud(){
    this.router.navigate(['crud-form'], {relativeTo:this.route});
  }

  search(){
    this.router.navigate(['search-on'], {relativeTo:this.route});
  }

}
