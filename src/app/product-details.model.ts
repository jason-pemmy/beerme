export class ProductDetailModel {
    constructor(
        public productName: string,
        public productImage: string,
        public productIsDead: boolean,
        public productPrice: string,
        public productOrigin: string,
        public ProductInventoryCount: number,
        public productProducer: string,
        public productType: string) {
    }
}