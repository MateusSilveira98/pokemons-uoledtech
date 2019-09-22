import { LocalStorage } from '../_utils/localstorage';

export class StatusColor {
  'speed': string = "bg-warning";
  'special-defense': string = "bg-info";
  'special-attack': string = "bg-secondary";
  'defense': string = "bg-primary";
  'attack': string = "bg-dark";
  'hp': string = "bg-danger"
}

export class Pokemon {
  id: number;
  name: string = '';
  weight: number;
  height: number;
  abilities: any[] = [];
  sprites: Object = {};
  stats: any[] = [];
  types: any[] = [];
  favorite: boolean = false;
  setFavorite = (pokemon: Pokemon) => {
    let favorites = LocalStorage.get('favorites') || [];
    let index = favorites.findIndex(() => !!favorites.find(item => item.id === pokemon.id));
    if (index < 0) favorites.push(pokemon);
    else favorites.splice(index, 1);
    LocalStorage.set('favorites', favorites);
  };
  getFavorite = (pokemon: Pokemon) => {
    let favoritesPokemons = LocalStorage.get('favorites') || [];
    return !!favoritesPokemons.find(favorite => favorite.id == pokemon.id);
  };
  getId = (url: string) => {
    let split = url.split("https://pokeapi.co/api/v2/pokemon/");
    let id = +split[1].toString().replace('/', '');
    return id;
  };
  getStatusColor(name) {
    let statusColor = new StatusColor();
    return statusColor[name]
  }
}
