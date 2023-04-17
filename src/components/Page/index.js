
import About from '../About'; 
import Contact from '../Contact'; 
import Portfolio from '../Portfolio'; 
import Resume from '../Resume'; 
import PageContent from '../PageContent'; 

const Page = (currentPage) => {
    const renderPage = () =>{
        switch (currentPage.name){
            case 'about me':
                return <About />; 
            case 'portfolio':
                return <Portfolio />
            case 'resume':
                return <Resume />
            case 'contact':
                return <Contact /> 
            default:
                return <About />;  
        }
    }
    return (

        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}

export default Page; 