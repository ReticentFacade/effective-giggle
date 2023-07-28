import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  await Product.findAll({
    // attributes: ["id", "name", "price", "description", "category_id"],
    // include: [
    //   {
    //     model: Category,
    //     attributes: ["id", "name"],
    //   },
    // ],
  })
    .then((productData) => {
      res.json(productData);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getProductById = async (req, res) => {
  await Product.findByPk(res.params.id, {
    // include: [
    //   {
    //     model: Category,
    //     attributes: ["id", "name"],
    //   },
    // ],
  })
    .then((productData) => {
      res.json(productData);
    })
    .catch((err) => {
      res.json(err);
    });
};

const createProduct = async (req, res) => {
  await Product.create(req.body)
    .then((productData) => {
      res.status(200).json(productData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateProduct = async (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((productData) => {
      res
        .status(200)
        .json(productData)
        .send({
          message: "Product updated successfully",
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteProduct = async (req, res) => {
  let deletedProduct = Product.findByPk(req.params.id);
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedProduct) => {
      res.json("Removed product from database");
    })
    .catch((err) => {
      res.json(err);
    });
};

const productController = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

export { productController };
