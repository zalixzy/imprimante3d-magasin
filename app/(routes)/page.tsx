import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;
const HomePage = async () =>{
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard("3a9871b2-1a73-4ba9-a52c-e01de9176b52");

    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                data={billboard}
                />
                
                <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"> 
                    <ProductList title="Produits présentés" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage