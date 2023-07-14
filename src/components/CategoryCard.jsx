export function CategoryCard({ img, heading, paragraph }) {
  return (
    <article className="category--card max-w-[230px]  p-4 flex flex-col gap-4 text-center rounded-2xl">
      <div className="h-[110px] flex justify-center items-center">
        <img src={img} alt="satellite" className="w-fit mx-auto" />
      </div>
      <h1 className="font-semibold text-lg text-darkBlue">{heading}</h1>
      <h3 className="font-poppins text-base text-lightGray w-[181px] mx-auto">
        {paragraph}
      </h3>
    </article>
  );
}
