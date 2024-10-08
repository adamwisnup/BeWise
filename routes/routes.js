const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const { image } = require("../libs/multer");
const UserController = require("../features/users/controllers/user");
const ProductController = require("../features/products/controllers/product");
const InformationController = require("../features/informations/controllers/information");
const NewsController = require("../features/news/controllers/news");
const HistoryController = require("../features/histories/controllers/history");

// TESTING
router.get("/users", UserController.getAllUser);

// AUTHENTICATION
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/whoami", restrict, UserController.whoami);

// USER PROFILE
router.patch(
  "/avatar-profile",
  restrict,
  image.single("avatar"),
  UserController.updateAvatar
);
router.patch("/profile", restrict, UserController.updateProfile);

// PRODUCT
router.get("/products", restrict, ProductController.getAllProducts);
router.get("/products/:id", restrict, ProductController.getProductById);
router.get(
  "/products/category/:category",
  restrict,
  ProductController.getProductByCategory
);
router.delete("/products/:id", restrict, ProductController.deleteProduct);

// INFORMATION
router.post(
  "/informations",
  restrict,
  image.single("image"),
  InformationController.createInformation
);
router.get("/informations", restrict, InformationController.getAllInformations);
router.get(
  "/informations/:id",
  restrict,
  InformationController.getInformationById
);
router.patch(
  "/informations/:id",
  restrict,
  image.single("image"),
  InformationController.updateInformation
);
router.delete(
  "/informations/:id",
  restrict,
  InformationController.deleteInformation
);

// NEWS
router.post(
  "/news",
  restrict,
  image.single("image"),
  NewsController.createNews
);
router.get("/news", restrict, NewsController.getAllNews);
router.get("/news/:id", restrict, NewsController.getNewsById);
router.patch(
  "/news/:id",
  restrict,
  image.single("image"),
  NewsController.updateNews
);
router.delete("/news/:id", restrict, NewsController.deleteNews);

// HISTORY
router.get("/histories", restrict, HistoryController.getAllHistories);
router.get("/histories/:id", restrict, HistoryController.getHistoryById);
router.delete("/histories/:id", restrict, HistoryController.deleteHistory);

module.exports = router;
