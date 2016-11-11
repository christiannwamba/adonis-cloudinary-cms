'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments();
      table.string('title');
      table.string('body');
      table.string('image');
      table.timestamps();
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
