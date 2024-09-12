// DO YOUR MAGIC
exports.up = function(knex){
    return knex.schema.createTable("cars", table =>{
        table.increments() //it creates the primary key
        table.string("vin").unique().notNullable();
        table.string("make").notNullable();
        table.string("model").notNullable();
        table.integer("milage").notNullable();
        table.string("title").defaultTo(null);
        table.string("transmission").defaultTo(null);
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("cars");
};