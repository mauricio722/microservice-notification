exports.up = (knex) => knex.schema.createTable('device', (table) => {
    table.increments('idDevice').unsigned().notNullable();
    table.text('deviceToken').unsigned().notNullable();
    table.integer('idusuario').unsigned().notNullable();
    
  });
  exports.down = (knex) => knex.schema.dropTable('device');
  