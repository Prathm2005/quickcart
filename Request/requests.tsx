import Category from "@/components/Home/Category";

export async function getAllCategories() {
    const categories = await fetch('https://fakestoreapi.com/products/categories');
    return categories.json();
}

export async function getMockedProducts() {
    const products = await fetch('https://fakestoreapi.com/products');
    const originalProducts = await products.json();

    const mockedProducts: any[] = [];
    const multiplier = 5; 

    for (let i = 0; i < multiplier; i++) {
        originalProducts.forEach((product: any) => {
            const newProduct = {
                ...product,
                id: product.id + i * originalProducts.length,
                title: `${product.title} - Edition ${i + 1}`,
                price: parseFloat((product.price * (1 + Math.random())).toFixed(2)), 
                rating: {
                    ...product.rating,
                    rate: parseFloat((Math.random() * 5).toFixed(1)), 
                },
                image: modifyImageUrl(product.image, i),
            };
            mockedProducts.push(newProduct);
        });
    }

    return mockedProducts;
}


function modifyImageUrl(url: string, index: number): string {

    return url.includes('?') ? `${url}&edition=${index}` : `${url}?edition=${index}`;
}

export async function getProducts() {
    return getMockedProducts();
}

export async function getSingleProduct(id:string){
    const singleProduct=await fetch(`https://fakestoreapi.com/products/${id}`);
    return singleProduct.json();
   
}
export async function getProductByCategories(Category:string){
    const productCategories=await fetch(`https://fakestoreapi.com/products/category/${Category}`);
    return productCategories.json();
   
}

