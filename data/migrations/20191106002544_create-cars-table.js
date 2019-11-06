
exports.up = function(knex) {
  // change we want to make to schema
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.text('vin', 128)
        .unique()
        .notNullable();
    tbl.text('make', 128)
        .unique()
        .notNullable();
    tbl.text('model', 128)
        .unique()
        .notNullable();
    tbl.integer('mileage', 128)
        .unique()
        .notNullable();               
    tbl.text('transmission');
    tbl.text('title');       
  });
};

exports.down = function(knex) {
  // undoing that change
  return knex.schema.dropTableIfExists('users');
};
