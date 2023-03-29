import { Icon } from "@iconify/react";
import React from "react";
import Paginate from "react-js-pagination";

interface Props {
  page: number;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<Props> = ({ page, itemsPerPage, totalItems }) => {
  //   const router: NextRouter = useRouter();

  const handlePagination = (pageNumber: number) => {
    // router.push({
    //   pathname: router.pathname,
    //   query: {
    //     ...router.query,
    //     page: pageNumber,
    //   },
    // });
  };

  return (
    <div className="w-fit px-3 !mt-[35px]">
      <Paginate
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItems}
        onChange={handlePagination}
        pageRangeDisplayed={4}
        hideFirstLastPages={true}
        nextPageText={
          <Icon
            icon="ic:round-chevron-right"
            className=" !text-sm !p-0 !m-0 text-grayTwo lg:!text-base !text-center"
          />
        }
        prevPageText={
          <Icon
            icon="ic:round-keyboard-arrow-left"
            className=" !text-sm !p-0 !m-0 text-grayTwo lg:!text-base !text-center"
          />
        }
        innerClass=" flex space-x-2 lg:space-x-3 items-center"
        activeClass=" "
        itemClass="!flex !items-center !justify-center w-[32px] h-[32px] border bg-white text-black "
        linkClass="text-primaryOne text-xs lg:text-sm"
        itemClassNext="!flex !bg-transparent !border border-white !text-white !items-center !justify-center !w-[24px] !h-[24px]"
        itemClassPrev="!flex !items-center !border border-white !justify-center !w-[24px] !h-[24px]"
        activeLinkClass="text-black text-xs lg:text-sm"
      />
    </div>
  );
};

export default Pagination;
