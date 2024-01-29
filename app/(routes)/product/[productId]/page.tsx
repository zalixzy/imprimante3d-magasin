import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";
    

interface ProductPageProps{
    params:{
        productId: string
    }
}
const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getProduct(params.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })
    return(
        <div className="bg-white ">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-6">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Galerie */}
                        <div>galerie</div>
                        <div className="mt-10 px-4 sm:mt-16 ms:px-0 lg:mt-0">
                            {/* infos */}
                            infos
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Articles liés" items={suggestedProducts}/>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage;