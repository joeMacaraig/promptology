"use client";

import { Dialog, Transition } from "@headlessui/react";

export const ModalCard = ({ modal, Fragment, closeModal, confirmation }) => {
  return (
    <Transition appear show={modal} as={Fragment}>
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
          <div className="fixed inset-0 backdrop-blur-md bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white px-6 py-8 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col gap-4">
                  <div className="">
                    <h1>Are you sure you want to delete your prompt?</h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="flex gap-8">
                      <button className="underline" onClick={closeModal}>
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white hover:rounded-xl duration-500" onClick={confirmation}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
