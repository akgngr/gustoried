import Layout from '../components/layout'
import Image from 'next/image'
import Back from '../components/back'

export default function unseremenu(){
    return(
        <Layout> 
            <Back />
            <Image
                src="/menu/unserekebaps.png"
                alt="Picture of the author"
                width={287}
                height={610}
            />
        </Layout>
    )
}