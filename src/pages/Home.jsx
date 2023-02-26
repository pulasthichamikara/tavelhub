import GridAccomadation from '../components/GridAccomadation';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className="">
      <div className="flex sm:hidden w-full justify-center mt-4 ">
        <SearchBar />
      </div>
      <GridAccomadation que={''} />
    </div>
  );
}
