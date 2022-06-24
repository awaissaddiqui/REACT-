import Header from './Header'
import Body from './Body'
import Footer from './Footer'
const app=()=>{
    return(
        <div>
            <Header />
            <Body 
            title="This is a title"
            id={2}
            description="This is a description "
            />
            <Footer />


        </div>
    )
}
export default app