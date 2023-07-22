export function TestCard({ name, img, comment, country }) {
  return (
    <article className="ms-4 test-card p-4 md:p-6 max-w-[500px] border-2 border-[#F7F7F7] ">
      <img src={img} alt="image" />
      <p className=" text-lightGray leading-loose mb-5 text-sm md:text-normal">
        {comment}
      </p>
      <h2 className="text-lg font-medium text-lightGray capitalize">{name}</h2>
      <h3 className="text-sm font-normal text-lightGray capitalize">
        {country}
      </h3>
    </article>
  );
}
