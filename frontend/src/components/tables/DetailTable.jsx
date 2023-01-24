import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDepartmentAndStaff from "../../hooks/useDepartmentAndStaff";

const DetailTable = () => {
  const { name } = useParams();
  const { getPersonalInDepartment, personalInDepartment } =
    useDepartmentAndStaff();

  useEffect(() => {
    getPersonalInDepartment();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="justify-center mt-6">
      <h1 className="text-center font-sekune text-lg mt-6 font-bold text-[24px]">
        <span className="text-red-700">{name}</span> Deparments Personal List
      </h1>
      <div className="flex justify-center mt-6">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block  sm:px-6 lg:px-8">
            <div className="overflow-hidden border-[#ffd10646] border-4 rounded-md">
              <table className="min-w-full ">
                <thead className="bg-[#ffd10646]  border-b ">
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
                      Did Joined?
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Salary
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Is Staffed?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {personalInDepartment?.personals?.map((item, i) => {
                    const {
                      id,
                      days_since_joined,
                      first_name,
                      last_name,
                      title,
                      gender,
                      salary,
                      is_staff,
                    } = item;
                    return (
                      <tr key={id} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 text-center  whitespace-nowrap cursor-pointer align-bottom hover:-translate-y-0.5 transition">
                          {days_since_joined}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                          {title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                          {first_name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                          {last_name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                          {gender}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                          {salary}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 text-center py-4 whitespace-nowrap">
                          {is_staff ? "Yes" : "No"}
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
    </div>
  );
};

export default DetailTable;
