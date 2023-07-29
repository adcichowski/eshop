export function FavoriteInput({ id }: { readonly id: string }) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name="A3-confirmation"
        value="yes"
        className="favorite absolute  box-border h-full w-full cursor-pointer opacity-0"
      />
      <div className="flex h-7 w-7 flex-shrink-0 cursor-pointer items-center justify-center border-blue-400 text-red-400 md:h-8 md:w-8">
        <svg viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.64279 13.2665C-0.277723 9.35532 0.69578 3.48856 5.5633 1.53298C10.4308 -0.422605 13.3513 3.48856 14.3248 5.44415C15.2983 3.48856 19.1923 -0.422605 24.0599 1.53298C28.9274 3.48856 28.9274 9.35532 26.0069 13.2665C23.0864 17.1777 14.3248 25 14.3248 25C14.3248 25 5.5633 17.1777 2.64279 13.2665Z"
            stroke="black"
            strokeWidth="1.68852"
          />
        </svg>
      </div>
      <label htmlFor={id} className="sr-only">
        Favorite product
      </label>
    </>
  );
}
