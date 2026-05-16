//Récupération du model Product
const Product = require("./models/product");

//Récupération du productListView
const productListView = require("../view/product/productListView");

//Récupération du formulaire createProductView
const createProductView = require("../view/product/createProductView");

//Affichage de ma vue pour créer un produit
exports.getcreateProductView = async (req, res) => {
  try {
    res.status(201).send(createProductView(req));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 1.createProduct(req, res)
exports.createProduct = async (req, res) => {
  try {
    // Création d'un produit à partir des données du body
    const product = new Product(req.body); // créé une instance style new PRODUCT(req.body)

    //Sauvegarde le produit
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    //Réponse d'erreur mise au format JSON car on est en API REST
    res.status(400).json({ message: error.message });
  }
};

// 2.getAllProducts(req,res)
exports.getAllProducts = async (req, res) => {
  /* try {
    //Récupération de tous les produits stockés en base
    const products = await Product.find();
    res.status(200).send(productListView(req, products));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }*/
  console.log("je suis la");
};

//3.getProductById(req, res)
exports.getProductById = async (req, res) => {
  try {
    // Recherche un produit par son ID
    const product = await Product.findById(req.params.id);
    //Retourne 404 si non trouvé
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//4.updateProduct(req, res)
exports.updateProduct = async (req, res) => {
  try {
    // Met à jour un produit existant
    const product = await Product.findByIdAndUpdate(req.params, req.body, {
      new: true,
    });
    //Retourne 404 si l’ID n’existe pas
    if (!product) return res.status(404).json({ message: "Product not found" });
    //Retourne le produit mis à jour
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//5.deleteProduct(req, res)
exports.deleteProduct = async (req, res) => {
  try {
    // Supprime un produit existant
    const product = await Product.findByIdAndDelete(req.params);
    //Retourne 404 si l’ID n’existe pas
    if (!product) return res.status(404).json({ message: "Product not found" });
    //Retourne 200 si supprimé
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
