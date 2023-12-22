import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const EditModal = ({ isOpen, closeModal, item, refetch }) => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { data: res } = await axiosSecure.post("/update", report);
    if (res.insertedId) {
      toast.success("Report Submitted Successfully");
      closeModal();
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    const deadline = e.target.deadline.value;
    const data = {
      title,
      description,
      priority,
      deadline,
      email: user.email,
    };
    const res = await axiosSecure.put(`/update?id=${item._id}`, data);
    if (res.data.modifiedCount > 0) {
      toast.success("Updated successfully");
      closeModal();
    }
    refetch();
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-center leading-6 text-blue-500 "
                  >
                    Edit Task
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleUpdate}>
                      <label className="text-blue-500">Title: </label>
                      <input
                        className="outline-blue-500 overflow-hidden bg-gray-200 py-1 px-1 w-full"
                        defaultValue={item.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                      /><br />
                      <label className="text-blue-500">Description: </label>
                      <textarea
                        className="outline-blue-500  bg-gray-200 py-1 px-1 mt-2 w-full"
                        defaultValue={item.description}
                        placeholder="Description"
                        name="description"
                        rows="6"
                      ></textarea>
                      <br />
                      <label className="text-blue-500 ">Priority: </label>
                      <select
                        className="rounded-lg mt-2 bg-blue-200 outline-blue-500"
                        name="priority"
                        defaultValue={item.priority}
                      >
                        <option disabled>Set Status</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                      </select>
                      <label className="text-blue-500 pl-1 ">Deadline:</label>
                      <input
                        className="rounded-lg mt-2 bg-blue-200 outline-blue-500"
                        type="date"
                        name="deadline"
                        defaultValue={item.deadline}
                      />
                      <br />
                      <button
                        type="submit"
                        className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        // onClick={handleTerSend}
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditModal;