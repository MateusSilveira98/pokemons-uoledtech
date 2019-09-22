import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../_models/pokemon.model';


@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Pokemon[]>(`${environment.apiUrl}/`);
  }

  getById(id: number) {
    return this.http.get<Pokemon>(`${environment.apiUrl}/${id}`);
  }
}
