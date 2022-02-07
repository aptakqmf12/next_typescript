import { DetailedHTMLProps, MetaHTMLAttributes } from "react";

interface HeadType {
  title: string;
  keywords: string;
  description: string;
}

interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
}

export type { HeadType, PhotoType };
