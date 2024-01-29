import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0;
const HomePage = async () =>{
    const billboard = await getBillboard("3a9871b2-1a73-4ba9-a52c-e01de9176b52");

    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                data={billboard}
                />
            </div>
        </Container>
    )
}

export default HomePage