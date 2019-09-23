import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemons.service';
import { Pokemon } from '../_models/pokemon.model';
import { AppState } from '../_store/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import _ from 'lodash';
import { StartLoadingAction, StopLoadingAction } from '../_store/actions/loading.action';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Pokemon: Pokemon = new Pokemon();
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new StartLoadingAction());
    this.pokemonService.getAll().subscribe(response => {
      this.filteredPokemons = this.pokemons = response['results'].map(item => {
        item.id = this.Pokemon.getId(item.url);
        item.favorite = this.Pokemon.getFavorite(item);
        return item
      });
    })
    setTimeout(() => {
      this.store.dispatch(new StopLoadingAction());
    }, 1000)
  }
  searchPokemon(search) {
    search = search.toLowerCase();
    let split = search.split('');
    if (search.length >= 3) {
      const regex = new RegExp(`${ split.map(item => `(?=.*${item})`).toString().split(',').join('') }.*`, "g");
      this.filteredPokemons = this.pokemons.filter(item =>
        item.name.toLowerCase().match(regex)
      );
    } else {
      this.filteredPokemons = this.pokemons;
    }
  }
  setPokemonsOrder(orderBy) {
    switch(orderBy) {
      case "name": this.filteredPokemons = _.orderBy(this.filteredPokemons, [orderBy], ["asc"]); break;
      case "favorite": this.filteredPokemons = _.orderBy(this.filteredPokemons, [orderBy, 'name'], ["desc"]); break;
      case "types": this.filteredPokemons = this.pokemons; break;
    }
  }
  setFavorite(pokemon) {
    this.Pokemon.setFavorite(pokemon);
    pokemon.favorite = this.Pokemon.getFavorite(pokemon);
  }
  goToPokemonDetails(id: number) {
    this.router.navigate([`detalhes/${id}`])
  }
}
