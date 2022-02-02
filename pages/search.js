import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/router'
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({SearchResults}) => {
  const router = useRouter()
  const {location,noOfGuests,startDate,endDate} = router.query;
  const Startdate = new Date(startDate)
  const enddate = new Date(endDate);

  const formattedStartDate = format(new Date(Startdate.getFullYear(), Startdate.getMonth(), Startdate.getDate()), 'dd MMM yy');

  const formattedEndDate = format(new Date(enddate.getFullYear(), enddate.getMonth(), enddate.getDate()), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`

  console.log(SearchResults);

  return (<div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests </p>
                    <h1 className="text-2xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex space-x-3 mb-3 whitespace-nowrap">
                        <p className='filter-class'>Cancellation Flexibility</p>
                        <p className='filter-class'>Type of Place</p>
                        <p className='filter-class'>Price</p>
                        <p className='filter-class'>Rooms and Beds</p>
                        <p className='filter-class'>More Filters</p>
                    </div>
                    <div>
                        {SearchResults.map(({img,description,location,title,total,star,price})=>(
                            <InfoCard 
                                key={img}
                                img={img}
                                description={description}
                                location={location}
                                title={title}
                                total={total}
                                star={star}
                                price={price}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer/> 
        </div>);
};

export default Search;

export async function getServerSideProps(){

    const SearchResults = await fetch('https://links.papareact.com/isz').then((res)=> res.json())

    return {
        props:{
            SearchResults
    }}
}