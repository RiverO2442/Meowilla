import "./styles.css";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
export default function Media() {
  const navigate = useNavigate();
  const onImageDetail = (name: string) => {
    navigate(`/detail/${name}`);
  };
  return (
    <div className="p-2 bg-[#C6DBDD] rounded-[6px] flex flex-col items-center gap-3">
      <div className="flex flex-wrap gap-1.5 h-fit">
        {/* <ul className="media flex flex-wrap gap-1.5 h-fit"> */}
        {itemData.map((item) => (
          <img
            onClick={() => {
              onImageDetail(item.title);
            }}
            className="media-img"
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        ))}
        {itemData.map((item) => (
          <img
            className="media-img"
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        ))}
        {itemData.map((item) => (
          <img
            className="media-img"
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        ))}
      </div>
      <Pagination align="center" defaultCurrent={1} total={50} />
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
