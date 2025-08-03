import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: "Mobile", price: 2000 },
        { id: 2, name: "Laptop", price: 2000 },
        { id: 3, name: "trimmer", price: 2000 },

    ];

    getAllProducts() {
        return this.products
    }

    getProductsById(id: number) {
        return this.products.find((product) => product.id === id)

    }


}
