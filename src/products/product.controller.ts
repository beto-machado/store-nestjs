import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDto } from "./dto/create-product.dto";


@Controller("/products")
export class ProductController {

  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDto) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  async getProducts() {
    return this.productRepository.listAll();
  }
}
