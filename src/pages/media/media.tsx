import "./styles.css";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { mediaSearch } from "../../service/service";
import { useEffect, useState } from "react";

type Pagination = {
  cunrrentPage: number;
  totalItem: number;
};

export default function Media() {
  const navigate = useNavigate();
  const onImageDetail = (name: string) => {
    navigate(`/detail/${name}`);
  };
  const [searchParam, setSearchParam] = useState("random");
  const [media, setMedia] = useState({
    results: [],
  });
  const [pagination, setPagination] = useState<Pagination>({
    cunrrentPage: 1,
    totalItem: 0,
  });

  const handleGetMedia = async () => {
    try {
      const data = (await mediaSearch({
        query: searchParam,
        page: pagination.cunrrentPage,
      })) as any;
      setMedia(data.data);
      setPagination({
        ...pagination,
        totalItem: data.data.result_count,
      });
    } catch (error: any) {
      alert(`${error.response?.data?.message || "Something went wrong."} `);
    }
  };

  useEffect(() => {
    handleGetMedia();
  }, [pagination.cunrrentPage]);

  return (
    <div className="p-2 bg-[#C6DBDD] rounded-[6px] flex flex-col items-center gap-3">
      <div className="flex flex-wrap gap-1.5 h-fit">
        {media?.results?.length > 0 &&
          media["results"].map((item: any) => (
            <img
              onClick={() => {
                onImageDetail(item.id);
              }}
              className="media-img"
              src={`${item.url}`}
              alt={item.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "public/no-image.png";
              }}
            />
          ))}
      </div>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={pagination.totalItem ?? 0}
        pageSize={20}
        pageSizeOptions={[20]}
        onChange={(v: any) => {
          setPagination({
            ...pagination,
            cunrrentPage: v,
          });
        }}
      />
    </div>
  );
}
