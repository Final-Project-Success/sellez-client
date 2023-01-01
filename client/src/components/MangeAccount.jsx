import { Link } from "react-router-dom";
export default function ManageAccount() {
  return (
    <div className="col-span-9 grid grid-cols-3 gap-4">
      {/* single card */}
      <div className="shadow rounded bg-white px-4 pb-8 pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">Personal info</h3>
          <Link to="/account/edit" className="text-primary">
            Edit
          </Link>
        </div>
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">Fian Febry</h4>
          <p className="text-gray-800">fian@gmail.com</p>
          <p className="text-gray-800">+62833232</p>
        </div>
      </div>
    </div>
  );
}
