import { FaBed, FaBath, FaRulerCombined, FaTrash, FaEdit } from "react-icons/fa";
import type { Property } from "../../redux/slice/propertiesSlice";

interface DashboardPropertyCardProps {
      item: Property;
      onEdit: (id: string) => void;
      onDelete: (id: string) => void;
      onView: (id: string) => void; 
}

const DashboardPropertyCard = ({ item, onEdit, onDelete, onView }: DashboardPropertyCardProps) => {
      return (
            <div
                  onClick={() => onView(item.id)} 
                  className="bg-gray-10 border border-gray-15 p-5 rounded-3xl group hover:border-purple-60 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-purple-60/10"
            >
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                        <img
                              src={item.mainImage}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              alt={item.name}
                        />
                        <div className="absolute top-4 left-4 bg-gray-08/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-gray-15">
                              {item.categoryBadge || item.type}
                        </div>
                  </div>

                  <div className="mt-6 space-y-4">
                        <h3 className="text-2xl font-bold text-white line-clamp-1 group-hover:text-purple-60 transition-colors">{item.name}</h3>
                        <p className="text-gray-60 text-sm line-clamp-2 leading-relaxed">{item.description}</p>

                        <div className="flex gap-4 p-3 bg-gray-08 rounded-xl text-gray-40 text-sm border border-gray-15">
                              <span className="flex items-center gap-2"><FaBed className="text-purple-60" /> {item.specs?.bedrooms}</span>
                              <span className="flex items-center gap-2"><FaBath className="text-purple-60" /> {item.specs?.bathrooms}</span>
                              <span className="flex items-center gap-2"><FaRulerCombined className="text-purple-60" /> {item.specs?.area}</span>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-15">
                              <div>
                                    <p className="text-gray-60 text-xs">Price</p>
                                    <p className="text-white text-2xl font-extrabold">${item.pricing?.listingPrice?.toLocaleString() || "0"}</p>
                              </div>

                              <div className="flex gap-3">
                                    <button
                                          onClick={(e) => { e.stopPropagation(); onEdit(item.id); }}
                                          className="p-3 bg-gray-15 rounded-xl hover:text-purple-60 transition-colors z-10"
                                    >
                                          <FaEdit size={20} />
                                    </button>
                                    <button
                                          onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}
                                          className="p-3 bg-gray-15 rounded-xl hover:text-red-500 transition-colors z-10"
                                    >
                                          <FaTrash size={20} />
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default DashboardPropertyCard;