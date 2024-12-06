import ContactTable from "@/components/organisms/ContactTable";
import DealTable from "@/components/organisms/DealTable";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-5">
      <ContactTable />
      <DealTable />
    </div>
  );
};

export default Home;
