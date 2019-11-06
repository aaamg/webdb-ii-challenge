
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { vin: 'aford', make: 'ford', model: 'gt', mileage: '5000'},
        { vin: 'ahonda', make: 'honda', model: 'civic', mileage: '12000'},
        { vin: 'atoyota', make: 'toyota', model: 'camry', mileage: '80000'}
      ]);
    });
};

//use truncate over delete