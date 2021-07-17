import Layout from '../components/layout'
import Image from 'next/image'
import Back from '../components/back'

export default function unseremenu(){
    return(
        <Layout> 
            <Back />
            <Image
                src="/menu/unserepizzen1.png" 
                width={291}
                height={606}
            />
            <Image
                src="/menu/unserepizzen2.png" 
                width={284}
                height={607}
            />
            <Image
                src="/menu/unserepizzen3.png" 
                width={277}
                height={353}
            />
        </Layout>
    )
}