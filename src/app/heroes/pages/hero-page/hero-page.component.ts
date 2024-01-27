import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params // get id route
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id)), // get hero
      )
      .subscribe(hero => {
        if (!hero) return this.router.navigate(['/heroes/list']); // if hero not exist navigate to list
        this.hero = hero; // else asign hero
        return;

      });
  }

}
