import { SQLite } from 'ionic-native';
import { TraitFactory } from '../factories/trait';

export class SqliteDatabase {

  databaseDriver : SQLite;
  traitFactory: TraitFactory;

  constructor(){

    this.databaseDriver = new SQLite();
  }

  /**
   * Opens the database & then returns promise
   *
   * @returns {Promise<*|void>|Promise<*>}
   */
  ready(){
    return this.databaseDriver.openDatabase({
      name: 'names_with_meaning.data',
      location: 'default'
    }).then( () => this.createDatabase(),
      (error) => console.error(error))
  }

  /**
   * Returns a promise once the traitFactory has been setup
   *
   * @returns {any}
   */
  createDatabase(){
    return Promise.all([
      this.traitFactory = new TraitFactory(this.databaseDriver)
    ]);

  }
}
