import {Injectable} from '@angular/core';
import {SqliteDatabase} from './database';
import {TraitFactory} from '../factories/trait';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SetupServices {

  sqlStorage: SqliteDatabase;

  constructor(private http: Http){}

  /**
   * Sets up the authentication & Creates the database & all of the data in the table.
   *
   * @returns {Promise<SqliteDatabase>}
   */
  setupApp() {
    this.sqlStorage = new SqliteDatabase();
    return this.sqlStorage.ready().then(() => {
      let traitFactory = this.sqlStorage.traitFactory;

      this.createOrUpdateTraits(traitFactory);
      localStorage.setItem('db_created', 'true');

      return this.sqlStorage;
    });
  }


  /**
   * Insert database rows for trait table if they do not exist else update existing rows
   *
   * @param traitFactory
   */
  private createOrUpdateTraits(traitFactory: TraitFactory) {
    this.getStuff().subscribe(
      (data) => {
        console.log(data);
        let traits = data;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  getStuff(){

    return this.http.get('http://localhost:3000/traits')
      .map((res:Response) => res.json());

  }
}
