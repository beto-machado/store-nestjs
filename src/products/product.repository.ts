import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private products = [];

    async save(products) {
        this.products.push(products);
    }
    async listAll() {
        return this.products;
    }
}
