import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import PhotosStyles from "../styles/Photo.module.css";
import Link from "next/link";
import { PhotoType } from "../types/types";

const photos = (data: any) => {
  return (
    <div>
      {/* <HeadInfo title={"next example photos"} /> */}
      <h1>my photos</h1>

      <ul className={PhotosStyles.photos}>
        {data.data.map((e: PhotoType) => {
          return (
            <li key={e.id}>
              <Link href={`/photos/${e.id}`}>
                <a>
                  <div>
                    <Image
                      src={e.thumbnailUrl}
                      width={100}
                      height={100}
                      alt={e.title}
                    />
                  </div>
                  <div>{e.id}</div>
                  <div>{e.title}</div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default photos;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
