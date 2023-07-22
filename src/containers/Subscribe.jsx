import { HiOutlineMail } from "react-icons/hi";

export function Subscribe() {
  return (
    <section className="mt-10 mb-32 sub p-4 md:p-8 ">
      <h1 className="p-4 text-[24px] md:text-[28px] ">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h1>
      <form className="flex flex-col md:flex-row gap-4 items-center justify-center  mt-8 text-dark ">
        <div className="relative">
          <input
            type="email"
            className="py-6 pe-4 ps-12 caret focus:outline-none  placeholder:font-extralight"
            placeholder="your email"
          />
          <HiOutlineMail className="email-icon text-lg" />
        </div>
        <button
          type="submit"
          className="text-lg py-2 px-4 sub-button hover:bg-red-400 mb-4 md:mb-0"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
