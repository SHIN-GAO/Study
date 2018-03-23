'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const result = await this.app.model.Movie.findAll();
    await ctx.render('home/movielist.tpl', { list: result });
  }
}

module.exports = HomeController;
