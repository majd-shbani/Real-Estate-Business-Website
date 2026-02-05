import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProperty } from "../../../redux/slice/propertiesSlice";
import { type AppDispatch } from "../../../redux/store/index";
import { FaPlus } from "react-icons/fa";
import DashboardPropertyCard from "../../../components/FeaturedCard/DashboardPropertyCard";
import { useProperties } from "../Hooks/Hooks";

const ListRealEstates = () => {
      const dispatch = useDispatch<AppDispatch>();
      const navigate = useNavigate();
      const { properties, loading } = useProperties();

      const handleView = (id: string) => {
            navigate(`/dashboard/real-estate/${id}`);
      };

      const handleEdit = (id: string) => {
            navigate(`/dashboard/real-estate/${id}/edit`);
      };

      const handleDelete = async (id: string) => {
            if (window.confirm("Are you sure?")) {
                  await dispatch(deleteProperty(id));
            }
      };

      if (loading) return <div className="text-center text-white py-20 animate-pulse">Loading Properties Data...</div>;

      return (
            <div className="space-y-10">
                  <div className="flex justify-between items-center bg-Platinum border-Silver dark:bg-gray-10 dark:border-gray-15 p-6 rounded-2xl border ">
                        <div>
                              <h2 className="text-3xl font-bold text-Jet-Gray dark:text-white">Properties Management</h2>
                              <p className="text-gray-60">Manage your real estate listings</p>
                        </div>
                        <button onClick={() => navigate("/dashboard/real-estate/create")} className="flex items-center gap-2 bg-purple-60 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-70 transition-all">
                              <FaPlus /> Add Property
                        </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
                        {properties.map((property) => (
                              <DashboardPropertyCard
                                    key={property.id}
                                    item={property}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                    onView={handleView}
                              />
                        ))}
                  </div>

                  {!loading && properties.length === 0 && (
                        <div className="text-center py-20 border-2 border-dashed border-gray-15 rounded-3xl">
                              <p className="text-gray-60 text-xl">No properties found. Start by adding your first listing!</p>
                        </div>
                  )}
            </div>
      );
}

export default ListRealEstates
