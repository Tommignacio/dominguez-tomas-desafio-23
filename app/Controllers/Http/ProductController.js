'use strict'

const Products = use("App/Models/Product")

class ProductController {
  async read({ params: { id } }) {
    if(id) return await Products.find(id)
    return await Products.all();
  }
  async create({ request: { body } }) {
    const { title, price, thumbnail } = body;
    return (await Products.create({ title, price, thumbnail })).toJSON();
  }
  async update({ params: { id }, request: { body } }) {
    const { title, price, thumbnail } = body;
    const foundProduct = await Products.findOrFail(id);
    if(title) foundProduct.title = title;
    if(price) foundProduct.price = price;
    if(thumbnail) foundProduct.thumbnail = thumbnail;
    await foundProduct.save()
    return (await Products.findOrFail(id)).toJSON();
  }
  async delete({ params: { id } }) {
    const product = await Products.findOrFail(id);
    return { deleted: await product.delete() }
  }
}

module.exports = ProductController
