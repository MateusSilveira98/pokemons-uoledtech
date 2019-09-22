import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemons.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '../_store/app.state';
import { Store } from '@ngrx/store';
import { Pokemon } from '../_models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  Pokemon: Pokemon = new Pokemon();
  pokemon: any = {};
  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.pokemonService.getById(+this.route.params['value'].id).subscribe(response => {
      this.pokemon = response;
      this.pokemon.favorite = this.Pokemon.getFavorite(this.pokemon);
    })
  }
  setFavorite(pokemon) {
    this.Pokemon.setFavorite(pokemon);
    pokemon.favorite = this.Pokemon.getFavorite(pokemon);
  }
  goToHome() {
    this.router.navigate(['/'])
  }
}
