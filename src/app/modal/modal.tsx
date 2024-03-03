"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
type modalProps = {
  children: React.ReactNode;
  setModal: any;
};
export default function Modal({ children, setModal }: modalProps) {
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
          className="flex z-50"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`${pathname}`);
            setModal(false);
            const elem = document.body;
            elem.classList.remove("fixedPosition");
          }}
        >
          <div
            className="dialog-container top-4 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              className="close-modal-btn"
              onClick={() => {
                setModal(false);
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
