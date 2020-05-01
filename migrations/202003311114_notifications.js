exports.up = (knex) => knex.schema.alterTable('device', (table) => {

    table.string('deviceToken').unsigned().notNullable().alter();
    
  });


  exports.down = (knex) => knex.schema.alterTable('device', (table) => {

    table.dropColumn('deviceToken').unsigned().notNullable();
  });