import Image from "next/image";
import Link from "next/link";
import { PhotoType } from "../../../types/types";

const index = (photo: { photo: PhotoType }) => {
  const { id, title, thumbnailUrl } = photo.photo;
  console.log(photo.photo);
  return (
    <div>
      <h2>image{id}</h2>
      <div>{title}</div>
      <Image src={thumbnailUrl} width={500} height={500} alt={title} />
      <Link href="/photos">뒤로가기</Link>
    </div>
  );
};
export default index;

interface Context {
  params: { id: string };
}

export const getStaticProps = async (context: Context) => {
  console.log(context);
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const photos = await res.json();
  const ids = photos.map((photo: PhotoType) => photo.id);
  const paths = ids.map((id: number) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
