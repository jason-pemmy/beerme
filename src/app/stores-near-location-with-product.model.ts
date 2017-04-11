export class StoresNearLocationWithProduct {
    constructor(
        private storeName: string,
        private address1: string,
        private address2: string,
        private city: string,
        private telephone: string,
        private quantity: string,
        private distance: string,
        private latitude: number,
        private longitude: number
    ) {}
}