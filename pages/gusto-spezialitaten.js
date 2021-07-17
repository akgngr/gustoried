import Layout from '../components/layout'
import Image from 'next/image'
import Back from '../components/back'

export default function unseremenu(){
    return(
        <Layout>
            <Back />
            <Image
                src="/menu/gustospezial.png"
                alt="Picture of the author"
                width={306}
                height={268}
            />
        </Layout>
    )
}