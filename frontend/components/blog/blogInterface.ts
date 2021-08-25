export interface IBlogSectionHeader {
    title: string;
    text: string;
}

export interface IPost {
    id: number;
    title: string;
    text?: string;
    tags?: [{ id: number; name: string }];
    media?: {
        id: number;
        url: string;
    }
    excerpt: string;
    created_at: string;
}

export interface IPostArray {
    [key: string]: IPost[]
}

export interface ICount {
    count: number;
}
