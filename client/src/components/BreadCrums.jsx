import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
export default function BreadCrumbs({ page }) {
  return (
    <div className="container py-4 flex items-center">
      <Link to="/" className="text-primary text-base">
        <FaHome />
      </Link>
      <span className="text-sm text-gray-400">
        <MdChevronRight />
      </span>
      <p className="text-gray-600 font-medium">{page}</p>
    </div>
  );
}
