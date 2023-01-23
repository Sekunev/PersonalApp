import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDepartmentAndStaff from "../../hooks/useDepartmentAndStaff";

const HomeTable = () => {
  const navigate = useNavigate();
  const { getDepartmentAndStaff, departmentsAndStaff } =
    useDepartmentAndStaff();

  useEffect(() => {
    getDepartmentAndStaff();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-center mt-6">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block  sm:px-6 lg:px-8">
          <div className="overflow-hidden border-4 rounded-md">
            <table className="min-w-full ">
              <thead className="bg-gray-100 border-b ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Deparment Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    How many staff work in this department?
                  </th>
                </tr>
              </thead>
              <tbody>
                {departmentsAndStaff?.map((item, i) => {
                  const { id, name, personal_count } = item;
                  return (
                    <tr key={id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td
                        className="text-sm text-gray-900 font-light px-6 py-4 text-center  whitespace-nowrap cursor-pointer align-bottom hover:-translate-y-0.5 transition"
                        onClick={() => navigate(`/department/${name}`)}
                      >
                        {name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                        {personal_count}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
