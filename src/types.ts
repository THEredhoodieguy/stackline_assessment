export interface ReviewEntry {
    customer: string;
    review: string;
    score: number;
}

export interface SalesEntry {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface ProductEntry {
    brand: string;
    details: [];
    id: string;
    image: string;
    retailer: string;
    reviews: ReviewEntry[];
    sales: SalesEntry[];
    subtitle: string;
    tags: string[];
    title: string;
}