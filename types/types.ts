import { DetailedHTMLProps } from "react";

interface HeadType {
  title: string;
  keyword: string;
  content: string;
}

interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
}

export type { HeadType, PhotoType };
