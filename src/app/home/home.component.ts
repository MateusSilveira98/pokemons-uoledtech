import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemons.service';
import { Pokemon } from '../_models/pokemon.model';
import { AppState } from '../_store/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Pokemon: Pokemon = new Pokemon();
  pokemons: Pokemon[] = [];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.pokemonService.getAll().subscribe(response => {
      this.pokemons = response['results'].map(item => {
        item.id = this.Pokemon.getId(item.url);
        item.favorite = this.Pokemon.getFavorite(item);
        return item
      });
    })
  }
  setFavorite(pokemon) {
    this.Pokemon.setFavorite(pokemon);
    pokemon.favorite = this.Pokemon.getFavorite(pokemon);
  }
  goToPokemonDetails(id: number) {
    this.router.navigate([`detalhes/${id}`])
  }
}
