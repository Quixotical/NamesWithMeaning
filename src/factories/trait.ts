import { SQLite } from 'ionic-native';
import { Trait } from '../models/trait';

export class TraitFactory {
  db: SQLite;

  constructor(database: SQLite){

    this.db.executeSql(
      'CREATE TABLE IF NOT EXISTS trait(id INTEGER PRIMARY KEY, name VARCHAR(32), gender VARCHAR(32))', {}
    ).then(
      () => {
        console.log('trait table created');
      },
      () => {
        console.error('failed to create trait table');
      }
    )
  }
}
