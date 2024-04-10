"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "../redux/store";

type modalProps = {
  children: React.ReactNode;
  setModal: any;
};
export default function Modal({ children, setModal }: modalProps) {

  const dispatch = useDispatch<AppDispatch>()

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const elem = document.body;
    if (modal) {
      elem.classList.add("fixedPosition");
    } else {
      elem.classList.remove("fixedPosition");
    }
  }, [modal]);
  return (
    <>
      {modal && (
        <dialog
          className="flex z-50 justify-center items-center"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`${pathname}`);
            dispatch(setModal(false));
            const elem = document.body;
            elem.classList.remove("fixedPosition");
          }}
        >
          <div
            className="dialog-container bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              className="close-modal-btn"
              onClick={() => {
                dispatch(setModal(false));
                router.push(`${pathname}`);
                const elem = document.body;
                elem.classList.remove("fixedPosition");
              }}
            >
              <Image
                height={15}
                width={15}
                alt="close-btn"
                src={"/icons/ModalCloseButton.svg"}
              />
            </button>
            <div className="dialog-content">{children}</div>
          </div>
        </dialog>
      )}
    </>
  );
}
