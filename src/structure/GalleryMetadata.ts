import { Torrent } from "./Torrent";

export interface Book {
    gid: string;
    token: string;
    archiver_key: string;
    title: string;
    title_jpn: string;
    category: string;
    thumb: string;
    uploader: string;
    posted: string;
    filecount: string;
    filesize: number;
    expunged: boolean;
    rating: string;
    torrentcount: string;
    torrents: Torrent[];
    tags: string[];
}
